"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Avatar from "./avatar";
import PageTitle from "@/components/PageTitle";

type Claims = { sub: string; email?: string; [key: string]: unknown };

export default function AccountForm({ claims }: { claims: Claims | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      if (!claims?.sub) {
        setLoading(false);
        return;
      }

      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", claims.sub)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [claims, supabase]);

  useEffect(() => {
    getProfile();
  }, [claims, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      if (!claims?.sub) {
        alert("You must be logged in to update your profile");
        return;
      }

      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: claims.sub,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col p-1 gap-3 sm:p-2">
      <PageTitle title="Conta" subtitle="Acabe de criar a sua conta" />
      <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
          <div className="flex flex-col gap-4 ">
        <div  className="flex flex-col gap-3">
          <Avatar
            uid={claims?.sub ?? null}
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ fullname, username, website, avatar_url: url });
            }}
            
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-cinza-ink text-xs font-normal">Email</label>
            <input
              id="email"
              type="text"
              value={claims?.email ?? ""}
              disabled
               className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-cinza-ink text-xs font-normal">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={fullname || ""}
              onChange={(e) => setFullname(e.target.value)}
               className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-cinza-ink text-xs font-normal">Username</label>
            <input
              id="username"
              type="text"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
               className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="website" className="text-cinza-ink text-xs font-normal">Website</label>
            <input
              id="website"
              type="url"
              value={website || ""}
              onChange={(e) => setWebsite(e.target.value)}
               className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque"
            />
          </div>

          <div className="flex flex-col gap-1">
            <button
              className="button primary block"
              onClick={() =>
                updateProfile({ fullname, username, website, avatar_url })
              }
              disabled={loading || !claims?.sub}
            >
              {loading ? "Loading ..." : "Update"}
            </button>
          </div>

          <div>
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>
        </div>
        </div>
      </section>
    </main>
  );
}

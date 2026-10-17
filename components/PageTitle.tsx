import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

export default function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="p-1 sm:p-2">
      <div className="relative min-h-[40vh] overflow-hidden rounded-4xl bg-neutral-900 text-white">
        {/* 1. Imagem de fundo (coloca em /public/hero.jpg) */}
        <Image
          src="/hero.jpg"
          alt="Casa moderna ao entardecer"
          fill
          priority
          className="object-cover"
        />

        {/* 2. Overlay escuro para dar contraste ao texto */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/70" />

        <h1 className="pointer-events-none absolute inset-x-0 top-24 z-10 select-none text-center text-[22vw] font-semibold leading-none tracking-tight bg-linear-to-b from-white/90 to-white/0 bg-clip-text text-transparent sm:top-20">
          {title}
        </h1>

        <div className="absolute bottom-0 left-0 z-20 max-w-sm p-6 sm:p-10">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-white/70">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

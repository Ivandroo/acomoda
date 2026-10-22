This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase authentication

Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in
`.env.local` using the values from your Supabase project. Do not use a service-role
key in the browser.

In Supabase, open **Authentication > URL Configuration** and add the app's
confirmation callback to the redirect URL allow list, for example
`http://localhost:3000/auth/confirm` for local development. Add the matching
callback URL for each deployed environment as well. When email confirmation is
enabled, sign-up displays a message to check email; sign in only works after the
confirmation link has been opened.

Supabase's built-in email sender is intended for testing: it only sends to
addresses belonging to the project's organization team and is limited to two
emails per hour. For other recipients, configure a custom SMTP provider under
**Authentication > SMTP Settings**. If sign-up reports `Error sending
confirmation email` even with custom SMTP, inspect **Authentication > Logs**
and your provider's delivery logs; the application cannot bypass a failed
confirmation email without changing the project's email-confirmation policy.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

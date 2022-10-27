This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/build](http://localhost:3000/api/build). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## One Login Configuration

Create a .env.local file and fill in these variables (make sure to exclude all .env files in your .gitignore!):

```
ONELOGIN_CLIENT_ID=YOUR_CLIENT_ID
ONELOGIN_CLIENT_SECRET=YOUR_CLIENT_SECRET
ONELOGIN_ISSUER=https://YOUR_SUBDOMAIN.onelogin.com
NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET=SOME_VERY_LONG_RANDOM_SECRET
```

-   ONELOGIN_CLIENT_ID - Client ID of the One Login OIDC Application.
-   ONELOGIN_CLIENT_SECRET - Client Secret of the One Login OIDC Application.
-   ONELOGIN_ISSUER - URL of your OneLogin tenant
-   NEXTAUTH_URL - the canonical URL of your site. [More Info](https://next-auth.js.org/configuration/options#nextauth_url)
-   NEXTAUTH_SECRET - Used to encrypt the NextAuth.js JWT. [More Info](https://next-auth.js.org/configuration/options#nextauth_secret)

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Learn Next Auth](https://next-auth.js.org/configuration/initialization) - Next Auth Configuration

To learn more about OneLogin, take a look at the following resources:

-   [Next.js One Login Tutorial](https://www.alanwsmith.com/posts/how-to-add-onelogin-authentication-to-a-next-js-app-with-nextauth--26xmlgc9qykn) - learn how to configure Next.js with One Login Authentication.
-   [One Login Application Tutorial](https://developers.onelogin.com/quickstart/authentication/react) - Learn how to create a OIDC application for React (works with Next JS too).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

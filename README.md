# UN Cakes & Decor

A small business catalogue built with Next.js App Router. Product data lives in `src/data/products.ts`; orders are sent through WhatsApp after the shop confirms availability.

## Add or update products

1. Put a product photo in `public/products/` (create the folder if needed). Use a short filename such as `red-velvet-cake.jpg`.
2. Open `src/data/products.ts` and add an item to the `products` array:

```ts
{
  id: "red-velvet-cake", // unique, URL-safe id
  name: "Red velvet cake",
  price: 1200, // number in rupees; use 0 when the price is not set
  description: "Soft red velvet with cream cheese frosting.",
  category: "cakes-materials",
  image: "/products/red-velvet-cake.jpg",
  // url: "https://your-live-site.example/#red-velvet-cake", // optional
},
```

Use one of these category ids: `cakes-materials` (cakes and baking raw materials), `gift-hampers`, or `packaging` (cake packaging and products). Leave out `image` until a real photo is available; the catalogue shows a placeholder. Prices should be confirmed before publishing. A price of `0` displays as “Price on request.”

## WhatsApp setup

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` for local work and in your hosting provider’s environment settings for deployment. Enter the business number with country code using international digits only, without `+`, spaces, or punctuation. For example, the format is `91` followed by the local number; use the shop’s actual number. Restart the dev server after changing `.env.local`. The number is public because visitors’ browsers need it to open WhatsApp.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before launch, check product names, descriptions, prices, photos, location and social links against the shop’s confirmed details.

## Deploy

Push this project to a Git provider, import the repository into Vercel, and set `NEXT_PUBLIC_WHATSAPP_NUMBER` in the project’s environment variables for Production (and Preview if needed). Deploy, then open the live site on desktop and mobile and test a product order link. Future changes to product data and photos can be committed and pushed; Vercel will build and publish them automatically. For another Node hosting provider, use `npm run build` followed by `npm run start` and configure the same environment variable there.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

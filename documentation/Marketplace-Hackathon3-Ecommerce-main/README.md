# 🛒 Hekto Furniture E-commerce Website



Welcome to Hekto Furniture, your go-to destination for modern and elegant home furniture. This project is built using cutting-edge technologies to provide a seamless and enjoyable shopping experience.

## 🚀 Technologies Used
- **Next.js**: For building the user interface and server-side rendering.
- **Sanity CMS**: To manage and store content, including product information.
- **ShipEngine API**: To track shipments and manage delivery statuses.


## 📂 Project Structure
├── .next ├── Documentation ├── node_modules ├── public ├── src │ ├── app │ │ ├── about │ │ ├── api │ │ │ ├── create-checkout-session │ │ │ │ └── route.ts│ │ │ └── order.ts│ │ ├── cart │ │ ├── checkout │ │ │ └── page.tsx│ │ ├── contact │ │ │ └── page.tsx│ │ ├── fonts │ │ ├── products │ │ ├── profile │ │ ├── sign-in │ │ │ ├── factor-one │ │ │ └── page.tsx│ │ ├── sign-up │ │ │ ├── verify-email-address │ │ │ │ └── page.tsx│ │ │ └── page.tsx│ │ ├── studio │ │ ├── success │ │ │ └── page.tsx│ │ ├── tracking │ │ │ └── page.tsx│ │ ├── favicon.ico│ │ ├── globals.css│ │ ├── layout.tsx│ │ ├── loading.tsx│ │ └── page.tsx│ ├── components │ │ ├── AboutEmailSignUp.tsx│ │ ├── AboutFeatureSection.tsx│ │ ├── AboutPageHeaders.tsx│ │ ├── CheckoutForm.tsx│ │ ├── ClientImage.tsx│ │ ├── ContactForm.tsx│ │ ├── EmailSignUp.tsx│ │ ├── Features.tsx│ │ ├── Filters.tsx│ │ ├── Footer.tsx│ │ ├── Hero.tsx│ │ ├── ImageOnly.tsx│ │ ├── Listing.tsx│ │ ├── Loader.tsx│ │ ├── OrderPlacement.tsx│ │ ├── PopularListing.tsx│ │ ├── ProductsListing.tsx│ │ ├── Profile.tsx│ │ ├── ShoppingBasket.tsx│ │ ├── StorySection.tsx│ │ ├── TopNavbar.tsx│ │ └── Tracking.tsx│ ├── context │ │ └── CartContext.tsx│ ├── pages │ │ └── _document.js │ ├── sanity │ ├── types │ └── svg.d.ts├── .env.local ├── .eslintrc.json ├── .gitignore ├── middleware.ts├── next-env.d.ts├── next.config.ts├── package-lock.json├── package.json├── postcss.config.mjs├── README.md├── sanity.cli.ts├── sanity.config.ts├── server.js├── tailwind.config.ts├── tsconfig.json└── webpack.config.js

## 📦 API Endpoints
### Product Endpoints
- **GET /products**
  - Fetches all available products.
  - Example response:
    ```json
    {
      "Id": 1,
      "name": "Product A",
      "price": 100,
      "stock": 20,
      "image": "url_to_image"
    }
    ```

## 🛠 Environment Variables
Ensure the following environment variables are set in your `.env` file:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_CLERK_FRONTEND_API`
- `SANITY_API_TOKEN`



## 🎨 Styling & Responsiveness
The site is fully responsive and styled using modern CSS techniques to ensure a smooth user experience across all devices.

## 🔍 Lighthouse Performance Report
! [Lighthouse Report](https://example.com/lighthouse.png)
- **Performance: ** 98
- **Accessibility: ** 100
- **Best Practices: ** 100
- **SEO: ** 91

## 🚧 Final Checklist
| Task                       | Status |
|----------------------------|--------|
| Deployment Preparation     | ✓      |
| Staging Environment Setting| ✓      |
| Documentation              | ✓      |
| Form Submission            | ✓      |
| Final Review               | ✓      |




Prepared By: Nadia Shaikh

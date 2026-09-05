# TheCharmClub E-Commerce Website

A complete, production-ready e-commerce website for TheCharmClub – a Chennai-based aesthetic gifting business by Diya & Aaniya.

## 🎨 What I Built

I created a fully functional, premium e-commerce website with:

- **Complete Website Structure**: Home, Shop, Product Details, Cart, About, and Contact pages
- **Product Management**: Centralized product data system with 12 placeholder products
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **WhatsApp Integration**: Complete WhatsApp checkout system for orders and enquiries
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Premium Aesthetics**: Minimalist, feminine, cute design inspired by the brand logo
- **Search & Filter**: Advanced product search and category filtering
- **SEO Optimized**: Meta tags, Open Graph metadata, and semantic HTML
- **Clean Code**: Reusable components, TypeScript, and modern React patterns

## 🚀 How to Run

### Development
```bash
npm install
npm run dev
```
The website will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
```
The built files will be in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## 📦 Product Data Management

### Where is the product data?
All product data is located in: `src/data/products.ts`

### How to add new products
Add a new product object to the `products` array in `src/data/products.ts`:

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  category: "Phone Charms", // Must match siteConfig.categories
  price: 299,
  description: "Product description...",
  image: "/images/products/product-image.jpg",
  images: ["/images/products/product-image.jpg"], // Optional: multiple images
  featured: true, // Show on homepage
  badge: "Best Seller", // Optional: Best Seller, New, Popular, Customizable
  availability: "In Stock", // Optional
  options: ["Option 1", "Option 2"] // Optional: product variants
}
```

### How to change product prices
Edit the `price` field in the product object in `src/data/products.ts`:

```typescript
{
  id: "pink-pearl-phone-charm",
  name: "Pink Pearl Phone Charm",
  price: 399, // Change this price
  // ... other fields
}
```

### Where to replace product images
Product images are located in: `public/images/products/`

Replace the placeholder files with your actual product images:
- `public/images/products/pink-pearl-phone-charm.jpg`
- `public/images/products/cherry-phone-charm.jpg`
- etc.

The image paths in `src/data/products.ts` must match the actual file names.

## ⚙️ Configuration

### WhatsApp Number Configuration
The WhatsApp number is configured in: `src/config/site.ts`

```typescript
export const siteConfig = {
  // ...
  phone: "+91 99629 21849",
  whatsappNumber: "919962921849", // Used for WhatsApp links
  whatsappUrl: "https://wa.me/919962921849",
  // ...
}
```

### Business Information Configuration
All business information is in: `src/config/site.ts`

```typescript
export const siteConfig = {
  name: "TheCharmClub",
  displayName: "TheCharmClub – Diya & Aaniya",
  description: "Your business description",
  location: "Chennai, Tamil Nadu, India",
  founders: "Diya & Aaniya",
  // ... other config
}
```

### Logo Configuration
The logo is configured in: `src/config/site.ts`

```typescript
export const siteConfig = {
  // ...
  logo: "/tcc.logo.jpeg", // Path to your logo file
  // ...
}
```

**IMPORTANT**: Place your actual `tcc.logo.jpeg` file in the `public/` directory.

### Categories Configuration
Categories are configured in: `src/config/site.ts`

```typescript
export const siteConfig = {
  // ...
  categories: [
    "Phone Charms",
    "Key Chains", 
    "Bouquets",
    "Gift Hampers",
    "Custom Gifts"
  ]
}
```

## 🖼️ Image Structure

### Where to place images
- **Logo**: `public/tcc.logo.jpeg`
- **Hero Image**: `public/images/hero.jpg`
- **Category Images**: `public/images/categories/`
- **Product Images**: `public/images/products/`
- **Instagram Images**: `public/images/instagram/`
- **Placeholder**: `public/images/placeholder.svg`

### Category Images
- `public/images/categories/phone-charms.jpg`
- `public/images/categories/key-chains.jpg`
- `public/images/categories/bouquets.jpg`
- `public/images/categories/gift-hampers.jpg`
- `public/images/categories/custom-gifts.jpg`

## 🌐 Deployment

### Deploy to GitHub Pages
1. Create a new GitHub repository, then push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the site automatically.
5. Open the URL shown in the workflow deployment summary. It will usually be `https://<username>.github.io/<repository-name>/`.

The Vite configuration detects the GitHub repository name during the Actions build, so assets work correctly under the repository URL.

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect and build the project

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Any Static Hosting
1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your hosting provider
3. Configure your hosting to serve `index.html` for all routes (SPA routing)

## 🎨 Brand Customization

### Colors
Brand colors are defined in: `tailwind.config.mjs`

```javascript
theme: {
  extend: {
    colors: {
      'brand-black': '#0B0B0D',
      'brand-pink': '#E8A7D8',
      'brand-blush': '#F5D7EC',
      'brand-offwhite': '#FAF8F9',
      'brand-white': '#FFFFFF',
      'brand-grey': '#777777',
    },
  }
}
```

### Fonts
The website uses Google Fonts:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

Fonts are loaded in `index.html`.

## 📱 Features

### Shopping Cart
- Add/remove products
- Quantity management
- localStorage persistence
- Cart drawer for quick access
- WhatsApp checkout

### WhatsApp Integration
- Individual product orders
- Full cart checkout
- Contact form enquiries
- Automatic message generation

### Search & Filter
- Real-time product search
- Category filtering
- Price sorting
- Featured products

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes
- Mobile navigation menu

## 🔧 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 📝 Notes

- The website uses placeholder images that should be replaced with actual product photos
- The logo file `tcc.logo.jpeg` should be placed in the `public/` directory
- Instagram URL should be added to `src/config/site.ts` when available
- All prices are in Indian Rupees (₹)
- The WhatsApp checkout opens WhatsApp with a pre-filled message

## 🎯 Next Steps

1. **Replace the logo**: Add your actual `tcc.logo.jpeg` to `public/`
2. **Add product images**: Replace placeholder images with real product photos
3. **Update product data**: Edit `src/data/products.ts` with your actual products
4. **Add Instagram URL**: Update `instagramUrl` in `src/config/site.ts`
5. **Test the flow**: Try the complete customer journey
6. **Deploy**: Deploy to your preferred hosting platform

## 🐛 Troubleshooting

### Images not showing
- Check that image paths in `src/data/products.ts` match actual files
- Ensure images are in the `public/` directory
- Check file extensions (.jpg, .png, etc.)

### WhatsApp not opening
- Verify the WhatsApp number in `src/config/site.ts`
- Check that the number format is correct (without + or spaces)

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors in the console
- Verify all imports are correct

## 📄 License

This project is built for TheCharmClub. All rights reserved.

---

Built with ❤️ for TheCharmClub – Diya & Aaniya

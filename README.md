# Privacy Policy Web App

A modern, responsive web application for displaying privacy policies for different user types: Users, Merchants, and Drivers.

## Features

- 🎨 Beautiful, modern UI with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌓 Dark mode support
- 🚀 Fast and lightweight
- 🔗 Three separate privacy policy pages with dedicated routes

## Routes

- `/user/privacy` - Privacy policy for end users
- `/merchant/privacy` - Privacy policy for merchant partners
- `/driver/privacy` - Privacy policy for delivery drivers

## Tech Stack

- React 18
- Vite (build tool)
- React Router DOM 6
- Modern CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
privacy/
├── src/
│   ├── pages/
│   │   ├── UserPrivacy.jsx
│   │   ├── MerchantPrivacy.jsx
│   │   └── DriverPrivacy.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To customize the privacy policies:

1. Edit the content in the respective files under `src/pages/`
2. Update contact information in the "Contact Us" sections
3. Modify the last updated date
4. Adjust styling in `App.css`

## Deployment to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your Git repository (GitHub, GitLab, or Bitbucket)
3. Vercel will automatically detect the Vite configuration
4. Click **Deploy**

That's it! Vercel will automatically:
- Detect it's a Vite project
- Run `npm run build`
- Deploy the `dist` folder
- Set up automatic deployments for future pushes

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from project directory:
```bash
cd /Users/manikandan/Desktop/privacy
vercel
```

4. Follow the prompts to deploy

### Your Live URLs

After deployment, your privacy policies will be accessible at:
- `https://your-project.vercel.app/user/privacy` - User Privacy Policy
- `https://your-project.vercel.app/merchant/privacy` - Merchant Privacy Policy
- `https://your-project.vercel.app/driver/privacy` - Driver Privacy Policy

### Custom Domain

To add a custom domain:
1. Go to your project in Vercel dashboard
2. Navigate to **Settings** > **Domains**
3. Add your custom domain and follow DNS configuration instructions

## License

This project is open source and available for use.


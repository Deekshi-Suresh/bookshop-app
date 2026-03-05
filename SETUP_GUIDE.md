# 🚀 BookShop Setup & Deployment Guide

## Prerequisites
- Node.js v16+
- npm or yarn
- Git

## 🏃 Quick Start (5 minutes)

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/Deekshi-SureshFirst/bookshop-app.git
cd bookshop-app
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Start Development Server
\`\`\`bash
npm run dev
\`\`\`
Visit: http://localhost:3000

### 4. Demo Login
- Email: `demo@bookshop.com`
- Password: `demo123`

---

## 📦 Build for Production

\`\`\`bash
npm run build
\`\`\`

Output will be in the `dist/` folder.

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Method 2: Using GitHub
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

✅ Your app will be live!

---

## 🌐 Deploy to Netlify

### Method 1: CLI
\`\`\`bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
\`\`\`

### Method 2: Drag & Drop
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder to Netlify
4. Done! ✅

---

## 🐳 Deploy with Docker

### Dockerfile
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
\`\`\`

### Build & Run
\`\`\`bash
docker build -t bookshop:latest .
docker run -p 3000:3000 bookshop:latest
\`\`\`

---

## 🔧 Environment Variables

Create `.env.local`:
\`\`\`
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=BookShop
\`\`\`

---

## 📊 Project Structure

\`\`\`
bookshop-app/
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   ├── contexts/          # Context providers
│   │   ├── data/              # Books, reviews data
│   │   ├── lib/               # Utilities (currency, etc)
│   │   ├── pages/             # Page components
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── index.css              # Global styles
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
\`\`\`

---

## 🧪 Testing

### Test Credentials
**Account 1:**
- Email: demo@bookshop.com
- Password: demo123

**Create New Account:**
- Signup any email with password

### Test Payment Card
- Card: 4532 1111 1111 1111
- Expiry: Any future (MM/YY)
- CVV: Any 3 digits

### Test UPI
- UPI: test@upi

---

## 🔒 Security Checklist

- [ ] Remove demo credentials before production
- [ ] Add proper authentication backend
- [ ] Integrate real payment gateway
- [ ] Add HTTPS certificate
- [ ] Implement rate limiting
- [ ] Add email verification
- [ ] Secure sensitive data
- [ ] Regular security audits

---

## 📱 Mobile Testing

\`\`\`bash
# Test on mobile devices
npm run dev -- --host
\`\`\`

Then visit: `http://YOUR_IP:5173` from mobile device

---

## 🐛 Troubleshooting

### Port Already in Use
\`\`\`bash
# Linux/Mac
sudo kill -9 $(lsof -ti:3000)

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
\`\`\`

### Clear Cache
\`\`\`bash
rm -rf node_modules
rm package-lock.json
npm install
\`\`\`

### Build Issues
\`\`\`bash
npm run build -- --mode development
\`\`\`

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [React Router](https://reactrouter.com)

---

## 🎯 Next Steps

1. ✅ Deploy the app
2. 📧 Set up email service
3. 💳 Integrate Razorpay/Stripe
4. 📊 Add analytics
5. 🔔 Add notifications
6. 👥 Create admin panel

---

**Happy Coding! 🚀**
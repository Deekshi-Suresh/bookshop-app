# 📚 BookShop - Online Bookstore Application

A modern, feature-rich online bookstore application built with React, TypeScript, and Tailwind CSS. Features user authentication, shopping cart, wishlist, checkout, and order management.

## 🌟 Features

- **User Authentication**: Secure login and signup with localStorage persistence
- **Browse Books**: 50+ books across 20+ categories with search and filtering
- **Shopping Cart**: Add, remove, and manage quantities with persistent storage
- **Wishlist**: Save favorite books for later with one-click management
- **Checkout**: Complete order processing with validation
- **Order Tracking**: Order confirmation and estimated delivery tracking
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Notifications**: Toast notifications for user actions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + PostCSS
- **Build Tool**: Vite
- **State Management**: Context API
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Deekshi-SureshFirst/bookshop-app.git
cd bookshop-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

## 📱 Pages

- **Login/Signup** (`/login`): User authentication
- **Dashboard** (`/dashboard`): Browse and search books
- **Shopping Cart** (`/cart`): Manage items in cart
- **Checkout** (`/checkout`): Complete order information
- **Order Confirmation** (`/order-confirmation`): Order details and tracking
- **Wishlist** (`/wishlist`): Saved books for later purchase

## 🎯 Demo Credentials

Email: `demo@bookshop.com`
Password: `demo123`

## 📚 Available Books

The app features 50+ books across categories including:
- Classic Fiction
- Contemporary Fiction
- Fantasy
- Science Fiction
- Mystery & Thriller
- Historical Fiction
- Biography
- Self-Help & Personal Development
- Business
- Children's Books
- Psychology
- Non-Fiction

## 💾 Data Persistence

- User authentication data stored in localStorage
- Shopping cart persists across sessions
- Wishlist items saved locally
- Order history maintained in localStorage

## 🔐 Security Notes

⚠️ **Demo Mode**: This application uses localStorage for demonstration purposes. For production:
- Implement proper backend authentication
- Use secure payment gateways (Stripe, Razorpay, etc.)
- Use HTTPS for all communications
- Implement proper encryption for sensitive data
- Use secure session management

## 📝 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── ui/             # UI components (Button, Card, Badge)
│   │   ├── Header.tsx
│   │   ├── BookCard.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/           # Context providers
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── data/
│   │   └── books.ts        # Books data (50+ books)
│   ├── pages/              # Page components
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── OrderConfirmationPage.tsx
│   │   └── WishlistPage.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   └── routes.tsx
├── index.css
└── main.tsx
```

## 🎨 Features in Detail

### Authentication
- Email and password validation
- Demo credentials for quick testing
- Session persistence across page refreshes

### Shopping Experience
- Advanced search and filtering
- Multiple sorting options (price, rating, newest)
- Category-based browsing
- One-click wishlist management

### Cart Management
- Quantity adjustment
- Remove items
- Real-time total calculation
- Cart persistence

### Checkout Flow
- Multi-step form with validation
- Shipping information collection
- Payment information entry (demo mode)
- Order summary review

### Order Tracking
- Order confirmation page
- Estimated delivery date
- Order timeline visualization
- Order history access

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🛒 Sample Book Data

Each book includes:
- Title & Author
- Price
- Description
- Category
- Rating
- Stock status
- High-quality cover image

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

For support, email support@bookshop.com or open an issue on GitHub.

## 🎉 Acknowledgments

- React community for excellent tools and libraries
- Tailwind CSS for utility-first styling
- All contributors and users

---

**Built with ❤️ by Deekshi Suresh**

Live Demo: Coming Soon 🚀
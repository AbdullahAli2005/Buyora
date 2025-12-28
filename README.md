# Buyora – MERN Stack E-Commerce Application

Buyora is a modern, responsive, full-stack e-commerce application built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides a complete online shopping experience, including secure user authentication, product browsing by category, shopping cart management, Stripe-based checkout, and a dedicated admin dashboard for product and analytics management.

---

## 🚀 Features

### 🔐 User Authentication

* Secure user signup and login
* JWT-based authentication and authorization
* Protected routes (Cart, Checkout, Admin Dashboard)
* Role-based access control for admin users

### 🛍️ Product Browsing

* Home page with categorized product listings
* Category-specific product pages
* Featured products section for promotions

### 🛒 Shopping Cart

* Add and remove items from the cart
* Persistent cart state using **Zustand**
* Order summary with automatic subtotal calculation
* Coupon / gift card input section

### 💳 Secure Checkout (Stripe)

* Stripe-powered payment processing
* Purchase success and cancel pages
* Confetti animation on successful checkout
* Backend validation of Stripe sessions

### 🧑‍💼 Admin Dashboard (`/secret-dashboard`)

* Create and manage products
* View all products in a centralized panel
* Analytics overview for store performance

### 🎨 UI / UX Highlights

* Dark theme with clean blue accents
* Smooth animations using **Framer Motion**
* Fully responsive, mobile-first design
* Toast notifications with **react-hot-toast**
* Modern iconography using **Lucide React**

---

## 🛠️ Tech Stack

### Frontend

* **React** (Vite)
* **React Router DOM** – Client-side routing
* **Tailwind CSS** – Styling
* **Zustand** – State management
* **Framer Motion** – Animations
* **Lucide React** – Icons
* **React Hot Toast** – Notifications
* **React Confetti** – Checkout success animation
* **Axios** – API communication

### Backend

* **Node.js** + **Express**
* **MongoDB** + **Mongoose**
* **JWT** for authentication
* **Stripe** for payment integration

---

## 📂 Project Structure

```
src/
├── components/
│   ├── CategoryItem.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── FeaturedProducts.jsx
│   ├── OrderSummary.jsx
│   ├── GiftCouponCard.jsx
│   ├── PeopleAlsoBought.jsx
│   ├── CreateProductForm.jsx
│   ├── ProductsList.jsx
│   └── AnalyticsTab.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── CategoryPage.jsx
│   ├── CartPage.jsx
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   ├── AdminPage.jsx
│   ├── PurchaseSuccessPage.jsx
│   └── PurchaseCancelPage.jsx
├── stores/
│   ├── useUserStore.js
│   ├── useCartStore.js
│   └── useProductStore.js
├── lib/
│   └── axios.js
└── App.jsx / main.jsx
```

---

## 🏃‍♂️ Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (Local or MongoDB Atlas)
* Stripe account (for payment processing)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/buyora-ecommerce.git
   cd buyora-ecommerce
   ```

2. **Install dependencies**

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

---

### Environment Variables

Create `.env` files in both the **client** and **server** directories.

#### Server `.env`

```text
PORT=5000
MONGO_URI=mongodb://localhost:27017/buyora
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
```

#### Client `.env`

```text
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### Run the Application

```bash
# Start backend
cd server
npm run dev

# Start frontend (in another terminal)
cd client
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔐 Admin Access

After creating or seeding an admin user, log in using admin credentials to access the dashboard at:

```
/secret-dashboard
```

---

## 🤝 Contributing

Contributions are welcome and encouraged.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

Built with ❤️ using the MERN stack

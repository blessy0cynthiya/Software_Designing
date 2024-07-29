

// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import AddToCart from './components/AddToCart';
//import AdminPanel from './components/AdminPanel';
//import PrivateRoute from './components/PrivateRoute';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import './App.css';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import AboutUs from './components/AboutUs';
const App = () => {
  const [filters, setFilters] = useState({ categories: [], priceRange: '' });
  const products = [
    { id: 1, name: 'Robot', description: 'A fun toy Robo for kids.', price: 1500, imageUrl: 'toy12.jpeg', category: 'electronic' },
    { id: 2, name: 'Robot 2.0', description: 'Classic Electronic Toys Material: Metal Multipack: 1', price: 100.99, imageUrl: 'toy22.jpeg', category: 'electronic' },
    { id: 3, name: 'Dockey', description: 'White Electronic Toys With Light at Best Price', price: 229.99, imageUrl: 'toy 23.jpeg', category: 'electronic' },
    { id: 4, name: 'Baby Doll', description: 'Large 24-inch Vinyl Baby Doll - Realistic Princess India', price: 129.99, imageUrl: 'toy 24.jpeg', category: 'dolls' },
    { id: 5, name: 'Microwave Toys Play Kitchen Set', description: 'Educational building blocks set.', price: 129.99, imageUrl: 'toy5.jpg', category: 'dolls' },
    { id: 6, name: 'Remote Car', description: 'Remote Car Electronic Toy At Best Price', price: 150.00, imageUrl: 'toy 25.jpeg', category: 'electronic' },
    { id: 7, name: 'Chu-Chu Toys', description: 'JMV® Soft Bath Plush Chu-Chu Toys (Multicolour) ', price: 50.00, imageUrl: 'chu chu.jpeg', category: 'chu' },
    { id: 8, name: 'Baby Einstein Take Along Tunes Musical Toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy8.jpeg', category: 'chu' },
    { id: 9, name: 'Auris Glockenspiel 7 Tone Pentatonic', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy9.jpeg', category: 'chu' },
    { id: 10, name: 'Munchkin Mozart Magic Cube', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'toy10.png', category: 'musical' },
    { id: 11, name: 'Double Soft Toys', description: 'Educational building blocks set.', price: 25.00, imageUrl: 'Double Soft Toys.jpeg', category: 'plush' },
    { id: 12, name: 'Jellycat Fuzzle Squirrel Soft toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Jellycat Fuzzle Squirrel Soft Toy.jpeg', category: 'plush' },
    { id: 13, name: 'Keel toys Christmas Reindeer with scarf', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Keel Toys Christmas Reindeer With Scarf.jpg', category: 'plush' },
    { id: 14, name: 'Panda Soft toy', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Panda soft toy.jpg', category: 'plush' },
    { id: 15, name: 'Science Kit', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Science kit.jpg', category: 'blocks' },
    { id: 16, name: 'Super soft Plush Corduroy Cuddle Farm Sitting Dog', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'Super Soft Plush Corduroy Cuddle Farm Sitting Dog.webp', category: 'plush' },
    { id: 17, name: 'Wooden Maths frame', description: 'Educational building blocks set.', price: 150.00, imageUrl: 'wooden maths frame.jpeg', category: 'blocks' }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.categories.length > 0 ? filters.categories.includes(product.category) : true;
    const priceMatch = filters.priceRange ? (
      (filters.priceRange === '0-25' && product.price <= 25) ||
      (filters.priceRange === '25-50' && product.price > 25 && product.price <= 50) ||
      (filters.priceRange === '50-100' && product.price > 50 && product.price <= 100) ||
      (filters.priceRange === '100+' && product.price > 100)
    ) : true;
    return categoryMatch && priceMatch;
  });

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Header />
          <div className="main-container">
            <Sidebar filters={filters} setFilters={setFilters} />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home products={filteredProducts} />} />
                <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<AboutUs />} />
                <Route
          path="/user-dashboard"
          element={
            <PrivateRoute role="user">
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

const Home = ({ products }) => (
  <>
    <b><h1>Welcome to our Toy Topia</h1></b>
    <h4>Explore our collection of toys and find something special for every child.</h4>
    <div className="product-grid">
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}>
          <AddToCart product={product} />
        </Product>
      ))}
    </div>
  </>
);

// PrivateRoute component to handle authentication
// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };
// src/components/PrivateRoute.jsx


// const PrivateRoute = ({ children, role }) => {
//   const { isAuthenticated, currentUser } = useAuth();

//   if (!isAuthenticated || (role && currentUser?.role !== role)) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };



export default App;

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Clock, Truck, CreditCard } from 'lucide-react';
import { Instagram as InstagramIcon } from 'lucide-react';
import { Quote } from 'lucide-react';
import { ShoppingBag, Award, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const STATS = [
    { icon: ShoppingBag, value: '10K+', label: 'Products' },
    { icon: Award, value: '50+', label: 'Brands' },
    { icon: Star, value: '100K+', label: 'Happy Customers' },
  ];
  const REVIEWS = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing quality and style! The customer service was exceptional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Perfect fit and fast shipping. Will definitely shop here again!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment: 'Love the variety of styles and the seasonal collections.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  ];
const INSTAGRAM_POSTS = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
];
const products = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    category: "Men's Fashion"
  },
  {
    id: 2,
    name: 'Designer Summer Dress',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
    category: "Women's Fashion"
  },
  {
    id: 3,
    name: 'Luxury Watch Collection',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Premium Sunglasses',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Elegant Evening Gown',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    category: "Women's Fashion"
  },
  {
    id: 6,
    name: 'Classic Denim Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500',
    category: "Men's Fashion"
  },
  {
    id: 7,
    name: 'Vintage Leather Bag',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    category: 'Accessories'
  },
  {
    id: 8,
    name: 'Designer Heels',
    price: 229.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    category: "Women's Fashion"
  },
  {
    id: 9,
    name: 'Smart Casual Blazer',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500',
    category: "Men's Fashion"
  },
  {
    id: 10,
    name: 'Pearl Necklace Set',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500',
    category: 'Jewelry'
  },
  {
    id: 11,
    name: 'Premium Sneakers',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Footwear'
  },
  {
    id: 12,
    name: 'Silk Scarf Collection',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=500',
    category: 'Accessories'
  }
];
const TRENDING_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
    category: 'Summer Collection',
    title: 'Beach Essentials',
    description: 'Get ready for summer with our curated beach collection',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    category: 'Workwear',
    title: 'Office Edit',
    description: 'Elevate your professional wardrobe',
  },
];
const CATEGORIES = [
  {
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
  },
  {
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
  },
];

  const BENEFITS = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Safe & encrypted checkout',
    },
  ];
  const SPOTLIGHT_PRODUCTS = [
    {
      title: 'Limited Edition Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      tag: 'Exclusive',
    },
    {
      title: 'Premium Leather Bag',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
      tag: 'Bestseller',
    },
    {
      title: 'Designer Sunglasses',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      tag: 'New',
    },
    {
      title: 'Elegant Evening Gown',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
      tag: 'Sale',
    },
  ];
  return (
    <div className="font-sans">
   <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gray-900/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Summer Collection 2024
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-white">
          Discover our latest arrivals and trending styles
        </p>
        <div className="mt-10">
          <NavLink to={'/allproducts'}>

          <button
            className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
            Shop Now
          </button>
            </NavLink>
        </div>
      </div>
    </div>

      {/* Hot Categories */}
      <section className="hot-categories py-16 bg-gray-100">
        <div className="max-w-7xl mx-[22px] text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Hot Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Clothing', 'Beauty', 'Home Appliances'].map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 flex justify-center text-center items-center rounded-lg hover:shadow-xl transform hover:scale-105 transition cursor-pointer"
              >
                <h4 className="md:text-xl lg:text-xl text-[15px] font-semibold text-center items-center text-gray-700">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 tems-center flex justify-center text-center flex-row flex-wrap ">
      <h2 className="md:text-2xl text-[20.9px] md:font-bold lg:font-bold text-gray-900 mb-6">Shop by Category</h2>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => (
          <div key={category.name} className="group perspective cursor-pointer">
            <div className="relative h-80 w-full overflow-hidden rounded-lg transform transition-all duration-500 group-hover:rotate-y-6">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white transform transition-transform group-hover:scale-110">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="md:text-4xl lg:text-4xl text-2xl md:font-bold lg:font-bold text-center mb-4">Featured Products</h2>
      <p className="text-gray-600 text-center mb-12">Discover our handpicked selection of premium items</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative perspective"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`
              relative rounded-xl overflow-hidden bg-white shadow-lg
              transform transition-all duration-500 ease-out
              ${hoveredId === product.id ? 'scale-105 rotate-y-180' : ''}
              hover:shadow-xl
            `}>
              {/* Front of the card */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl text-[#0071ea]">${product.price}</p>
                  <button className="bg-[#0071ea] text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Quick View Overlay */}
              <div className={`
                absolute inset-0 bg-black/80 flex items-center justify-center
                transition-opacity duration-300
                ${hoveredId === product.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              `}>
                <div className="text-white text-center p-6">
                  <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                  <p className="mb-4">{product.category}</p>
                  <NavLink to={'/allproducts'}>
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                    Quick View
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
      {/* Our Services */}
      <section className="new-arrivals py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="md:text-3xl lg:text-3xl text-2xl md:font-bold lg:font-bold mb-8 text-gray-800">New Arrivals</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className="bg-white shadow-lg p-6 rounded-lg">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <h4 className="text-xl font-semibold text-gray-700">{product.name}</h4>
          <p className="text-gray-500 pb-4">${product.price}</p>
          <a className="bg-[#0071ea] text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:bg-indigo-700">
            Shop Now</a>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="services py-3 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="md:text-3xl lg:text-3xl text-2xl md:font-bold lg:font-bold mb-8 text-gray-800">Our Services</h3>
         
      <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Icon className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
      </section>
      <section className="best-sellers py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:font-bold lg:font-bold mb-8 text-gray-800">Best Sellers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SPOTLIGHT_PRODUCTS.map((product) => (
        <div key={product.title} className="bg-white shadow-lg p-6 rounded-lg relative">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
          <h4 className="text-xl font-semibold text-gray-700">{product.title}</h4>
          <p className="text-gray-500 pb-5">${product.price}</p>
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{product.tag}</span>
          <a className="bg-[#0071ea] text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:bg-[#428ddd]">
            Shop Now</a>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 p-6 rounded-xl transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-24 bg-slate-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl lg:text-4xl text-3xl md:font-bold lg:font-bold mb-4">Our Impact</h2>
          <p className="text-black">Trusted by fashion enthusiasts worldwide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group perspective"
            >
              <div className="relative p-8 bg-white backdrop-blur-sm rounded-xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <Icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{value}</div>
                <div className="text-black">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Why Choose Us */}
      <section className="why-choose-us py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl md:font-bold lg:font-bold mb-8">Why Choose Us</h3>
          <p className="md:text-lg lg:text-lg text-[15px]">We provide the best quality products at affordable prices.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl lg:text-4xl md:font-bold lg:font-bold text-center mb-16">Spotlight Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SPOTLIGHT_PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="group perspective"
            >
              <div className="relative rounded-xl overflow-hidden transform transition-all duration-500 group-hover:rotate-y-6 group-hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-4 py-1 bg-white text-gray-900 rounded-full text-sm font-medium mb-4">
                    {product.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-xl text-white">${product.price}</p>
                  <button className="mt-4 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium transform transition-transform hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRENDING_ITEMS.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <p className="mt-2 opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <h3 className="md:text-3xl lg:text-3xl text-[18px] font-bold mb-8 text-center text-gray-800">Subscribe to our newsletter</h3>
      <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <Mail className="h-12 w-12 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to receive updates about new collections,
          special offers, and exclusive events.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>

    
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-12">
          <InstagramIcon className="h-6 w-6" />
          <h2 className="md:text-3xl lg:text-3xl font-bold text-gray-900">Shop Our Instagram</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((image, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Shop Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;

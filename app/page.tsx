"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Heart } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const products = [
    { id: 1, name: "Ember Plate", price: "€85", mood: "Bold", image: "/product-1-ember.jpg" },
    { id: 2, name: "Golden Horizon", price: "€120", mood: "Elegant", image: "/product-2-golden.jpg" },
    { id: 3, name: "Sage Whisper", price: "€95", mood: "Serene", image: "/product-3-sage.jpg" },
    { id: 4, name: "Peach Dream", price: "€110", mood: "Warm", image: "/product-4-peach.jpg" },
    { id: 5, name: "Midnight Eclipse", price: "€130", mood: "Dramatic", image: "/product-5-midnight.jpg" },
    { id: 6, name: "Sunrise Bloom", price: "€105", mood: "Vibrant", image: "/product-6-sunrise.jpg" },
  ]

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Barabbukaa
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                Stories
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition">
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-muted rounded-lg transition">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                className="md:hidden p-2 hover:bg-muted rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <Link href="#" className="text-sm font-medium hover:text-primary transition py-2">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition py-2">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition py-2">
                Stories
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition py-2">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/hero-bg-vibrant.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Kinetic Feast</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                  Where Cuisine Meets <span className="text-primary">Art</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Elevate your dining experience with our curated collection of luxury dinnerware designed to inspire and
                delight every meal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition">
                  Shop Now
                </button>
                <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right Visual - Floating Shapes */}
            <div className="relative h-96 flex items-center justify-center">
              <img
                src="/luxury-dinnerware-plate-elegant-ceramic-dish.jpg"
                alt="Luxury dinnerware collection"
                className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl hover:shadow-primary/30 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mood-Based Navigation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Bold", "Elegant", "Serene", "Warm"].map((mood) => (
              <button
                key={mood}
                className="py-4 px-6 bg-card border border-border rounded-lg hover:border-primary hover:bg-card text-center font-semibold transition group"
              >
                <span className="group-hover:text-primary transition">{mood}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Featured Collection</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted pieces that transform dining into an experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Product Image Area */}
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 group-hover:animate-gradient"></div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition">{product.name}</h4>
                    </div>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 hover:bg-muted rounded-lg transition flex-shrink-0"
                    >
                      <Heart
                        className="w-5 h-5 transition"
                        fill={favorites.has(product.id) ? "currentColor" : "none"}
                        color={favorites.has(product.id) ? "#e53e3e" : "currentColor"}
                      />
                    </button>
                  </div>
                  <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold text-balance">Join the Feast</h3>
          <p className="text-lg text-muted-foreground">
            Subscribe to discover new collections and exclusive dining experiences
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="font-bold">Barabbukaa</h4>
            <p className="text-sm text-muted-foreground">Luxury dinnerware for the modern feast.</p>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">Shop</h5>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">Company</h5>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">Support</h5>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Barabbukaa. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Instagram
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Pinterest
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

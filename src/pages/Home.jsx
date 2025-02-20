import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free shipping on all orders over ₹50"
  },
  {
    icon: "⭐",
    title: "Best Quality",
    description: "Handpicked products from top brands"
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "100% secure payment methods"
  }
]

const Home = () => {
  return (
    <div>
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to E-Commerce Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Discover amazing products at unbeatable prices from top brands
            </p>
            <Link
              to="/products"
              className="btn-primary text-lg"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({icon, title, description}, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white shadow-md"
              >
                <div className="text-4xl text-primary mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
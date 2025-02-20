import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { motion } from 'framer-motion'
import { addToCart } from '../redux/cartSlice'

const Products = ()=> {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products?limit=8')
        setProducts(response.data)
       
      } catch (error) {
        console.error('Error fetching products:', error)
       
      }finally{
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products
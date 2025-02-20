import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const cartItems = useSelector(state => state.cart.items)
  
  return (
    <nav className="bg-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-dark hover:text-primary">
          E-Commerce
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-bold ">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors font-bold">
              Products
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary transition-colors relative">
              <FaShoppingCart className="text-xl " />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
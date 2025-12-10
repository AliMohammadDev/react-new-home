import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeLogo from '../assets/images/home-logo-white.svg';
import ChevronDownIcon from '../assets/icons/ChevronDownIcon.jsx';
import ChevronRightIcon from '../assets/icons/ChevronRightIcon.jsx';
import CartIcon from '../assets/icons/CartIcon.jsx';
import FavoriteIcon from '../assets/icons/FavoriteIcon.jsx';
import ProfileIcon from '../assets/icons/ProfileIcon.jsx';
import HamburgerIcon from '../assets/icons/HamburgerIcon.jsx';
import PlusIcon from '../assets/icons/PlusIcon.jsx';
import MinusIcon from '../assets/icons/MinusIcon.jsx';
import { useState } from 'react';
import clsx from 'clsx';

const Navbar = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const location = useLocation();

  const isProductsActive = location.pathname.startsWith('/products');
  const productCategories = [
    'Cookware',
    'Tableware',
    'Kitchenware',
    'Bakeware',
    'Drinkware',
    'Forhome',
  ];

  return (
    /* Navbar */
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 lg:px-8 py-2 lg:py-4 md:py-1 z-50">
      {/* Logo */}
      <Link to={'/'} >
        <img src={HomeLogo} alt="Logo" className="h-14 w-auto" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-8 font-[Expo-arabic]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-[#E2995E]' : 'text-gray-300 hover:text-white'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-[#E2995E]' : 'text-gray-300 hover:text-white'
          }
        >
          Get in touch
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-[#E2995E]' : 'text-gray-300 hover:text-white'
          }
        >
          About us
        </NavLink>

        {/* Products Dropdown */}
        <div
          className="relative"
          onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
        >
          <button
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            className={clsx(
              'flex items-center gap-2 cursor-pointer transition',
              isProductsActive
                ? 'text-[#E2995E]'
                : 'text-gray-300 hover:text-white'
            )}
          >
            All Products
            <ChevronDownIcon className="scale-75 text-primary duration-150 sm:scale-100" />
          </button>

          <div
            className={clsx(
              'absolute top-full font-[Expo-arabic]  -translate-x-1/4 text-center mt-2',

              'bg-white/10 backdrop-blur-xl shadow-lg rounded-3xl w-70 py-6 z-50 border border-white/20',
              'transition-all duration-300 ease-in-out origin-top',
              isProductMenuOpen
                ? 'opacity-100 scale-100 visible'
                : 'opacity-0 scale-90 invisible'
            )}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            {productCategories.map((item) => (
              <NavLink
                key={item}
                to={`/products/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 justify-center px-4 py-3 rounded-xl transition hover:underline underline-offset-4 ${isActive ? 'text-[#E2995E]' : 'text-white'
                  }`
                }
                onClick={() => setIsProductMenuOpen(false)}
              >
                {item}
                <ChevronRightIcon className="text-primary duration-150 sm:scale-100" />
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden top-4 right-4 z-50">
        <button
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className={clsx(
              'absolute top-2 right-0 w-2/3 max-w-xs lg:hidden z-40 h-auto max-h-[90vh] overflow-y-auto',
              'font-[Expo-arabic] text-left',
              'bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 rounded-2xl',
              'flex flex-col items-stretch justify-start py-8 px-6 text-white overflow-y-auto',
              'transition-all duration-300 ease-in-out'
            )}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="flex flex-col gap-2 font-[Expo-bold] w-full text-sm items-start text-left">
              <NavLink
                to="/"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                Home
              </NavLink>

              {/* Categories dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                  className="px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors flex items-center gap-2 text-left"
                >
                  <span>Categories</span>
                  <ChevronDownIcon
                    className={clsx(
                      'transition-transform duration-300',
                      isCategoryMenuOpen && 'rotate-180'
                    )}
                  />
                </button>

                <div
                  className={clsx(
                    'overflow-hidden transition-all duration-300 flex flex-col',
                    isCategoryMenuOpen
                      ? 'max-h-80 opacity-100'
                      : 'max-h-0 opacity-0'
                  )}
                >
                  {productCategories.map((item) => (
                    <NavLink
                      key={item}
                      to={`/products/${item.toLowerCase()}`}
                      className="py-2 px-4 text-sm text-gray-200 font-[Expo-light] hover:underline underline-offset-4"
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/cart"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                My Cart
              </NavLink>
              <NavLink
                to="/wishlist"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                WishList
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                About us
              </NavLink>

              <div className="w-full h-px bg-white/30 my-2"></div>

              <NavLink
                to="/login"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block px-4 py-2 hover:bg-[#9f9f9f9f] hover:rounded transition-colors"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </>
      )}

      {/* Cart & Profile */}
      <div className="hidden lg:flex relative gap-16">
        <button
          aria-expanded={isCartOpen}
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-[#EDEAE2] text-[#025043] px-4 py-2 rounded-3xl font-[Expo-arabic]
           hover:bg-[#EDEAE2] flex items-center gap-2 cursor-pointer"
        >
          Cart
          <CartIcon />
        </button>

        {isCartOpen && (
          <div
            className={clsx(
              'absolute top-full font-[Expo-arabic] right-38 text-center add-cart',
              'bg-white/10 backdrop-blur-xl shadow-lg w-80 py-6 z-50 border rounded-2xl border-white/20',
              'transition-all duration-300 ease-in-out origin-top'
            )}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="text-center text-white text-sm w-full px-4 py-10">
              <div className="inline-block text-left w-full max-w-xs">
                <div className="grid grid-cols-3 gap-2 font-semibold border-b border-white/30 pb-2 mb-2">
                  <span>Product</span>
                  <span>Price</span>
                  <span>QTY</span>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-1 items-center">
                  <img
                    src="https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765360178/product5_dtuw99.png"
                    alt="product"
                    className="object-cover rounded"
                  />
                  <span>$500.00 sp</span>
                  <div className="relative flex items-center border rounded-4xl bg-white py-1">
                    <a
                      href="#"
                      className="absolute font-[Expo-book]  -top-7 underline left-2 text-xs text-white px-2 shadow-sm"
                    >
                      Remove
                    </a>

                    <button className="p-1 ml-1 rounded-2xl bg-[#025043] text-white cursor-pointer">
                      <PlusIcon />
                    </button>

                    <span className="px-4 text-[#025034] text-center">{0}</span>

                    <button className="p-1 -ml-1 rounded-2xl bg-[#025043] text-white cursor-pointer">
                      <MinusIcon />
                    </button>
                  </div>
                </div>

                <div className="border-b border-white/30 my-2"></div>

                <div className="flex flex-col items-center mb-10">
                  <span className="font-semibold">TOTAL</span>
                  <span className="font-bold">$500.00 sp</span>
                </div>

                <button className="text-[#025043] border cursor-pointer rounded-2xl bg-white font-[Expo-arabic] py-2 mt-4 w-full mx-auto flex justify-center">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-[#025043] font-[Expo-bold] flex cursor-pointer">
          <div className="bg-[#025043] p-2 rounded-full hover:bg-[#507771]">
            <FavoriteIcon />
          </div>
          <div className="bg-[#025043] p-2 rounded-full hover:bg-[#507771]">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

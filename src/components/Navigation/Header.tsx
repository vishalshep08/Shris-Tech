'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'Data Analytics', href: '/services#data-analytics' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
      { name: 'AI/ML Solutions', href: '/services#ai-ml' },
    ],
  },
  { name: 'Shris Academy', href: '/academy' },
  { name: 'Get Started', href: '/contact', cta: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveSubmenu(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Name (Always Visible) */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/ShrisTechLogo.png"
                alt="Shris Tech Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold text-[#0A3D62] leading-tight">
                Shris Tech
              </h1>
              <p className="hidden sm:block text-xs text-neutral-500">
                Innovation & Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) =>
              item.cta ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white text-sm font-semibold rounded-xl shadow-md hover:opacity-90 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-secondary-600 font-semibold'
                        : 'text-neutral-600 hover:text-primary-950'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Desktop Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-neutral-600 hover:text-primary-950 hover:bg-neutral-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-primary-950 hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 w-72 max-w-xs h-full bg-white shadow-2xl overflow-y-auto rounded-l-xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <Image
                        src="/ShrisTechLogo.png"
                        alt="Shris Tech Logo"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-base font-bold text-[#0A3D62]">
                      Shris Tech
                    </h2>
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-neutral-600 hover:text-primary-950"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="p-4 space-y-2">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <div key={item.name}>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-neutral-700 hover:text-primary-950 hover:bg-neutral-50 transition"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeSubmenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Submenu */}
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={closeMenu}
                                  className="block px-4 py-2 text-sm text-neutral-500 hover:text-primary-950 hover:bg-neutral-50 rounded-lg transition"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.cta ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="block w-full text-center px-5 py-3 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                          pathname === item.href
                            ? 'text-secondary-600 bg-secondary-50'
                            : 'text-neutral-700 hover:text-primary-950 hover:bg-neutral-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
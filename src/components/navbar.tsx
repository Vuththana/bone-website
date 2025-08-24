"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-stone-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.imgur.com/52l7hEL.png"
                alt="Bone SMP Logo"
                className="h-10 w-auto"
              />
              <span className="ml-3 font-minecraft text-xl text-bone-100">BONE NETWORK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="font-minecraft text-bone-300 hover:text-bone-100 px-3 py-2 rounded-md text-sm transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/event"
                className="font-minecraft text-bone-300 hover:text-bone-100 px-3 py-2 rounded-md text-sm transition-colors"
              >
                EVENTS
              </Link>
              <Link
                to="/store"
                className="font-minecraft text-bone-300 hover:text-bone-100 px-3 py-2 rounded-md text-sm transition-colors"
              >
                {t("nav.store")}
              </Link>
              <Link
                to="/rules"
                className="font-minecraft text-bone-300 hover:text-bone-100 px-3 py-2 rounded-md text-sm transition-colors"
              >
                {t("nav.rules")}
              </Link>
              <Link
                to="/about"
                className="font-minecraft text-bone-300 hover:text-bone-100 px-3 py-2 rounded-md text-sm transition-colors"
              >
                {t("nav.about")}
              </Link>
              <a
                href="https://discord.gg/RBN8khMGYc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-minecraft bg-emerald-700 text-white hover:bg-emerald-600 px-4 py-2 rounded-md text-sm transition-colors"
              >
                {t("nav.join_discord")}
              </a>
              <div className="ml-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-bone-300 hover:text-bone-100 hover:bg-stone-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-900/95 backdrop-blur-sm">
          <Link
            to="/"
            className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
                to="/news"
                className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
              >
              {t("nav.news")}
          </Link>
              <Link
                to="/event"
                className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
              >
                EVENTS
              </Link>
          <Link
            to="/store"
            className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.store")}
          </Link>
          <Link
            to="/leaderboards"
            className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.leaderboards")}
          </Link>
          <Link
            to="/rules"
            className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.rules")}
          </Link>
          <Link
            to="/about"
            className="font-minecraft text-bone-300 hover:text-bone-100 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <a
            href="https://discord.gg/RBN8khMGYc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-minecraft bg-emerald-700 text-white hover:bg-emerald-600 block px-3 py-2 rounded-md text-base transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.join_discord")}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const lastMenuItemRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      hamburgerRef.current?.focus();
    }, 100);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      const activeElement = document.activeElement;
      if (event.shiftKey) {
        if (activeElement === firstMenuItemRef.current) {
          event.preventDefault();
          lastMenuItemRef.current?.focus();
        }
      } else {
        if (activeElement === lastMenuItemRef.current) {
          event.preventDefault();
          firstMenuItemRef.current?.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <nav
        className={styles.stickyNavbar}
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className={styles.container}>
          <a
            href="#"
            className={styles.logo}
            aria-label="Ocean County Digital - Home"
          >
            <Image
              src="/assets/logo_placeholder.svg"
              alt="Ocean County Digital Logo"
              width={194}
              height={46}
            />
          </a>

          <ul
            className={`${styles.navLinks} ${styles.desktopNav}`}
            role="menubar"
          >
            <li role="none">
              <a href="#home" role="menuitem">
                Home
              </a>
            </li>
            <li role="none">
              <a href="#about" role="menuitem">
                About
              </a>
            </li>
            <li role="none">
              <a href="#services" role="menuitem">
                Services
              </a>
            </li>
            <li role="none">
              <a href="#projects" role="menuitem">
                Projects
              </a>
            </li>
            <li role="none">
              <a href="#contact" role="menuitem">
                Contact
              </a>
            </li>
          </ul>
          <button
            className={`cta-btn-primary ${styles.desktopNav} ${styles.ctaButton}`}
            aria-label="Get started with our services"
          >
            Get Started
          </button>

          <button
            ref={hamburgerRef}
            className={styles.mobileMenuToggle}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
            <span className={styles.srOnly}>
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation-menu"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          onKeyDown={handleMenuKeyDown}
        >
          <div className={styles.mobileMenuHeader}>
            <a
              href="#"
              className={styles.logo}
              aria-label="Ocean County Digital - Home"
            >
              <Image
                src="/assets/logo_placeholder.svg"
                alt="Ocean County Digital Logo"
                width={194}
                height={46}
              />
            </a>
            <button
              className={styles.mobileMenuClose}
              onClick={closeMenu}
              aria-label="Close mobile menu"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
          <nav
            className={styles.mobileNavLinks}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <h2 id="mobile-menu-title" className={styles.srOnly}>
              Mobile Navigation Menu
            </h2>
            <a
              ref={firstMenuItemRef}
              href="#home"
              onClick={closeMenu}
              role="menuitem"
            >
              Home
            </a>
            <a href="#about" onClick={closeMenu} role="menuitem">
              About
            </a>
            <a href="#services" onClick={closeMenu} role="menuitem">
              Services
            </a>
            <a href="#projects" onClick={closeMenu} role="menuitem">
              Projects
            </a>
            <a href="#contact" onClick={closeMenu} role="menuitem">
              Contact
            </a>
            <button
              ref={lastMenuItemRef}
              className="cta-btn-primary"
              onClick={closeMenu}
              aria-label="Get started with our services"
            >
              Get Started
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <div
            className={styles.mobileMenuOverlay}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
}

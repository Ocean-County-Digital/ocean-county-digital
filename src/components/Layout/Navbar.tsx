import Link from "next/link"; // Assuming you're using Next.js
import Image from "next/image";
import styles from "../../styles/Navbar.module.css"; // Adjust the path to your CSS module

export default function Navbar() {
  return (
    <header>
      <nav className={`${styles.container} container`}>
        <div className={`row`}>
          <div className={`col-4 justify-content-start`}>
            <Link href="/">
              <Image
                src="/assets/logo_placeholder.svg"
                alt="Logo"
                width={194}
                height={46}
              />
            </Link>
          </div>
          <ul className={`col-8 d-flex justify-content-end`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

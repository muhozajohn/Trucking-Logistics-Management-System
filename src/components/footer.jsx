import Link from "next/link";
import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="header">
          <h2>
            We Understand The Importance <br /> Approaching Each Work!
          </h2>
          <div className="contact-info">
            <span className="email">ironji.sales@gmail.com</span>
            <span className="phone">+250 784 635 871</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid-section">
          <article>
            <h1>COMPANY</h1>
            <div className="links">
              <Link href="/about">About Us</Link>
              <Link href="/">Company</Link>
              <Link href="/blog">Press & Blog</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </article>
          <article>
            <h1>Navigation</h1>
            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="/services">Services</Link>
            </div>
          </article>
          <article>
            <h1>Services</h1>
            <div className="links">
              <p></p>
              <p>Products Distribution</p>
              <p>Inter-warehouse Transport</p>
              <p>On-demand Transport</p>
            </div>
          </article>
          <article>
            <h1>Ironji</h1>
            <div className="links">
              <p>Revolutionizing Domestic Logistics in Rwanda</p>
            </div>
          </article>
        </div>
        <div className="footer-bottom">
          <p>
            Ironji © 2024 | Developed by{" "}
            <Link
              className="muhoza"
              href="https://muhoza.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              John Muhoza
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

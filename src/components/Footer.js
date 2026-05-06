import { shopConfig } from '../config/shop';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{shopConfig.name}</h3>
          <p>Your trusted digital partner.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📞 {shopConfig.phone}</p>
          <p>✉️ {shopConfig.email}</p>
          <p>📍 {shopConfig.address}</p>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {shopConfig.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
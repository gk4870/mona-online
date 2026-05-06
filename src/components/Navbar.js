import { useState } from 'react';
import { shopConfig } from '../config/shop';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['home', 'services', 'request', 'pricing', 'notices', 'faq', 'contact'];
  const nameParts = shopConfig.name.split(' ');

  return (
    <nav className="navbar">
      <div className="logo">
        {nameParts[0]} <span>{nameParts.slice(1).join(' ')}</span>
      </div>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

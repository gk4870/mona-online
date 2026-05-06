import { shopConfig } from '../config/shop';
import { buildWhatsAppLink, quickServiceMessage } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-card">
        <a href={`tel:${shopConfig.phone}`} className="contact-item">
          📞 {shopConfig.phone}
        </a>
        <a
          href={buildWhatsAppLink(quickServiceMessage())}
          target="_blank" rel="noreferrer"
          className="contact-item whatsapp"
        >
          💬 WhatsApp Us
        </a>
        <a href={`mailto:${shopConfig.email}`} className="contact-item">
          ✉️ {shopConfig.email}
        </a>
        <p className="address">📍 {shopConfig.address}</p>
        <iframe
          className="map" src={shopConfig.mapEmbed}
          loading="lazy" title="Shop Location"
        />
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { openWhatsApp, quickServiceMessage } from '../utils/whatsapp';

export default function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            onClick={() => openWhatsApp(quickServiceMessage(s.name))}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <span className="service-tap">Tap to enquire 💬</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
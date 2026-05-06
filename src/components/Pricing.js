import { motion } from 'framer-motion';
import { pricing } from '../data/pricing';

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <h2 className="section-title">Pricing</h2>
      <div className="pricing-grid">
        {pricing.map((p, i) => (
          <motion.div
            key={p.service}
            className="price-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4>{p.service}</h4>
            <div className="price">{p.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
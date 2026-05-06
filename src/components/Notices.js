import { motion } from 'framer-motion';
import { notices } from '../data/notices';

export default function Notices() {
  const latest = [...notices]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <section className="section" id="notices">
      <h2 className="section-title">📢 Latest Notices</h2>
      <div className="notices-list">
        {latest.map((n, i) => (
          <motion.div
            key={i}
            className="notice-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p>{n.text}</p>
            <div className="notice-date">
              📅 {new Date(n.date).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric'
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
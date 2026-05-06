import { motion } from 'framer-motion';
import { buildWhatsAppLink, quickServiceMessage } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppLink(quickServiceMessage())}
      target="_blank" rel="noreferrer"
      className="float-whatsapp"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      aria-label="Chat on WhatsApp"
    >
      💬
    </motion.a>
  );
}
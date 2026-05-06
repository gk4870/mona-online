import { shopConfig } from '../config/shop';

export const buildWhatsAppLink = (message) => {
  const phone = `${shopConfig.countryCode}${shopConfig.whatsapp}`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const quickServiceMessage = (serviceName = "") => {
  return serviceName
    ? `Hi! I want to know about *${serviceName}* service available at your shop.`
    : `Hi! I want to know about the services available at your shop.`;
};

export const buildRequestMessage = ({ name, phone, service, details, hasPhoto }) => {
  return `*New Service Request*

*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*Details:* ${details || 'N/A'}

${hasPhoto ? '📎 I will send the document photo separately in this chat.' : '(Note: I will send document photo separately if needed)'}`;
};

export const openWhatsApp = (message) => {
  window.open(buildWhatsAppLink(message), '_blank');
};
import { useState } from 'react';
import { services } from '../data/services';
import { openWhatsApp, buildRequestMessage } from '../utils/whatsapp';

export default function RequestForm() {
  const [form, setForm] = useState({
    name: '', phone: '', service: '', details: '', photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      alert('Please fill in Name, Phone, and Service.');
      return;
    }
    const message = buildRequestMessage({
      name: form.name,
      phone: form.phone,
      service: form.service,
      details: form.details,
      hasPhoto: !!form.photo,
    });
    openWhatsApp(message);
  };

  return (
    <section className="section form-section" id="request">
      <h2 className="section-title">Request a Service</h2>
      <form className="form-card" onSubmit={handleSubmit}>
        <input
          type="text" name="name" placeholder="Your Name *"
          value={form.name} onChange={handleChange} required
        />
        <input
          type="tel" name="phone" placeholder="Phone Number *"
          value={form.phone} onChange={handleChange} required
        />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">-- Select Service * --</option>
          {services.map(s => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
        </select>

        <label className="upload-label">
          📎 {form.photo ? form.photo.name : 'Upload Photo (send via WhatsApp)'}
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </label>

        <textarea
          name="details" placeholder="Additional Details..." rows="4"
          value={form.details} onChange={handleChange}
        />

        <button type="submit" className="whatsapp-btn">
          📱 Send via WhatsApp
        </button>

        <p className="form-note">
          ⚠️ WhatsApp doesn't allow direct file uploads from a website.
          After submitting, please attach your photo manually in the WhatsApp chat.
        </p>
      </form>
    </section>
  );
}
import { useState } from 'react';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="faq">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${active === i ? 'active' : ''}`}>
            <div className="faq-q" onClick={() => setActive(active === i ? null : i)}>
              {f.q}
              <span>+</span>
            </div>
            <div className="faq-a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
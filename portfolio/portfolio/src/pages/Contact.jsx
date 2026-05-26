import { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (wire up your API here)');
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-label reveal">// get in touch</div>
        <h2 className="section-title reveal">
          Let's Build Something <span className="accent">Extraordinary</span>
        </h2>
        <div className="section-divider reveal" />

        <div className={styles.grid}>
          {/* Form */}
          <div className={`reveal ${styles.formStack}`}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <input
                name="subject"
                type="text"
                className={styles.input}
                placeholder="Project collaboration, hiring inquiry..."
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project, goals, and timeline..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit} className={styles.submit}>
              Send Message →
            </button>
          </div>

          {/* Info */}
          <div className={`reveal delay-2 ${styles.info}`}>
            <h3 className={styles.infoHeading}>{contactInfo.heading}</h3>
            <p className={styles.infoDesc}>{contactInfo.desc}</p>
            <div className={styles.socials}>
              {contactInfo.socials.map(({ icon, tag, val, href }) => (
                <a key={tag} href={href} target="_blank" rel="noreferrer" className={`social-item ${styles.socialItem}`}>
                  <span className={styles.socialIcon}>{icon}</span>
                  <div className={styles.socialDetails}>
                    <span className={styles.socialTag}>{tag}</span>
                    <span className={styles.socialVal}>{val}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              Available for new projects · Response within 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

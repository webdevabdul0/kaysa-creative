'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const MATH_A = 13, MATH_B = 7;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathError, setMathError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(mathAnswer) !== MATH_A + MATH_B) {
      setMathError(true);
      return;
    }
    setSent(true);
  };

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{ textAlign: 'center', padding: 'clamp(100px,13vh,140px) clamp(20px,5vw,48px) clamp(40px,6vh,60px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.06)', marginBottom: 30 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#B7B2E0' }}>Contact</span>
          </div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 300, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 auto 8px', color: '#F4F2FC' }}>
            Get in{' '}
            <span style={{ fontWeight: 400, background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Touch</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(15px,1.3vw,18px)', lineHeight: 1.7, color: '#A6A2C2', maxWidth: 560, margin: '20px auto 0' }}>
            We are excited about the possibility of working together — share your thoughts, questions, or ideas and our team will get back to you.
          </p>
        </section>

        {/* FORM + INFO */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(30px,5vh,60px) clamp(20px,5vw,48px) clamp(80px,11vh,120px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, alignItems: 'start' }}>
            {/* FORM */}
            <div style={{ padding: 'clamp(28px,4vw,44px)', borderRadius: 24, border: '1px solid rgba(142,134,242,0.16)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', margin: '0 auto 22px', background: 'linear-gradient(135deg,#A99FFF,#6B63D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#fff' }}>✓</div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 22, color: '#F1EFFA', margin: '0 0 10px' }}>Message sent.</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: '#A6A2C2', margin: '0 0 24px' }}>Thank you — our team will be in touch shortly.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary" style={{ fontSize: 14.5, padding: '11px 22px', borderRadius: 11 }}>Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A86AC', marginBottom: 9 }}>Name</label>
                    <input type="text" required placeholder="Your name" className="input-field" />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A86AC', marginBottom: 9 }}>Email Address</label>
                    <input type="email" required placeholder="you@company.com" className="input-field" />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A86AC', marginBottom: 9 }}>Message</label>
                    <textarea required rows={5} placeholder="Tell us about your project..." className="input-field" style={{ resize: 'vertical' }} />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A86AC', marginBottom: 9 }}>
                      {MATH_A} + {MATH_B} = ?
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="Your answer"
                      value={mathAnswer}
                      onChange={e => { setMathAnswer(e.target.value); setMathError(false); }}
                      className="input-field"
                    />
                    {mathError && <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: '#FF7070', margin: '6px 0 0' }}>Incorrect answer, please try again.</p>}
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: 15.5, fontWeight: 600, padding: 16, borderRadius: 13 }}>
                    Submit →
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { label: 'General Enquiries', value: 'info@kaysacreative.com', href: 'mailto:info@kaysacreative.com' },
                { label: 'Technical', value: 'info@kaysacreative.com', href: 'mailto:info@kaysacreative.com' },
              ].map(({ label, value, href }) => (
                <div key={label} style={{ padding: 28, borderRadius: 20, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A86AC' }}>{label}</span>
                  <a href={href} className="contact-link">{value}</a>
                </div>
              ))}
              <div style={{ padding: 28, borderRadius: 20, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A86AC' }}>Location</span>
                <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 18, color: '#E7E4F6', margin: '10px 0 0' }}>Dubai – Meydan Free Zone, UAE</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

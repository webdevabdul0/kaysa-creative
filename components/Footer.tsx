import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(142,134,242,0.10)', background: 'rgba(7,7,12,0.5)', marginTop: 20 }}>
      <div className="footer-grid" style={{
        maxWidth: 1240, margin: '0 auto',
        padding: 'clamp(50px,7vh,80px) clamp(20px,5vw,48px) 40px',
      }}>
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <Image src="/assets/kaysa-logo.webp" alt="Kaysa" width={34} height={34}
              style={{ filter: 'drop-shadow(0 0 12px rgba(107,99,216,0.5))' }} />
            <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '0.12em', color: '#F3F1FB' }}>
              KAYSA<span style={{ color: '#8E86F2' }}> CREATIVE</span>
            </span>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, lineHeight: 1.6, color: '#8E8AAE', margin: '0 0 8px', maxWidth: 280 }}>
            Augmenting Your Reputation. Connecting verified crypto projects with influencers who make an impact.
          </p>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6E6A8C', margin: '14px 0 0' }}>
            Dubai – Meydan Free Zone, UAE
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7E7AA0', margin: '0 0 18px' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/collaborations" className="footer-link">Pitchdeck</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7E7AA0', margin: '0 0 18px' }}>Services</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7E7AA0', margin: '0 0 18px' }}>Connect</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#" className="footer-link">Telegram</a>
            <a href="#" className="footer-link">Twitter / X</a>
            <a href="#" className="footer-link">Instagram</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(142,134,242,0.08)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '22px clamp(20px,5vw,48px)', textAlign: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.08em', color: '#6E6A8C' }}>
            © 2026 KAYSA CREATIVE. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Collaborations — Kaysa Creative' };

export default function CollaborationsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{ textAlign: 'center', padding: 'clamp(100px,13vh,140px) clamp(20px,5vw,48px) clamp(50px,7vh,80px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.06)', marginBottom: 30 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#B7B2E0' }}>Services</span>
          </div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 300, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 auto', color: '#F4F2FC' }}>
            Dive Into Our Collabs.{' '}<span style={{ fontWeight: 400, background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Elevate Your Brand</span>
          </h1>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 15.5, padding: '15px 32px', borderRadius: 13, textDecoration: 'none', display: 'inline-block' }}>Talk With an Expert →</Link>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(40px,6vh,80px) clamp(20px,5vw,48px) 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.4vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F1EFFA' }}>Building Credible Influence Together</h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16.5, lineHeight: 1.7, color: '#A6A2C2', margin: '0 0 16px' }}>Whether you're a crypto or Web3 project seeking authentic visibility, or an influencer looking to collaborate with verified brands — Kaysa is your partner for sustainable growth.</p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16.5, lineHeight: 1.7, color: '#A6A2C2', margin: 0 }}>We believe the best collaborations are built on trust, transparency, and shared values. That's why we only connect partners who truly align.</p>
        </section>

        {/* FOR PROJECTS / FOR INFLUENCERS */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
            {[
              {
                label: 'For Crypto & Web3 Projects',
                body: "Want to position your project credibly in the spotlight? We help you tell your story through influencers who understand your vision and speak your audience's language.",
                points: ['Verified influencers with proven reach', 'Strategic positioning in the right niche', 'Support from campaign concept to execution'],
              },
              {
                label: 'For Influencers & Creators',
                body: "Your reputation is your greatest asset. That's why we connect you only with projects that we've thoroughly vetted — ensuring every collaboration strengthens your brand, not risks it.",
                points: ['Access to exclusive, verified projects', 'Authentic partnerships focused on quality', 'Strategic and creative support for your campaigns'],
              },
            ].map(({ label, body, points }) => (
              <div key={label} style={{ padding: 38, borderRadius: 24, border: '1px solid rgba(142,134,242,0.16)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF' }}>{label}</span>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15.5, lineHeight: 1.68, color: '#BCB8D6', margin: '18px 0 24px' }}>{body}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {points.map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{ width: 18, height: 18, flex: 'none', borderRadius: 6, marginTop: 2, background: 'linear-gradient(135deg,#A99FFF,#6B63D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>✓</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: '#CFCBE4' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECENT COLLABS BENTO */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px) 0' }}>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 36px', color: '#F1EFFA' }}>Recent collaborations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gridAutoRows: 190, gap: 18 }}>
            <div style={{ gridColumn: 'span 3', gridRow: 'span 2', position: 'relative', overflow: 'hidden', borderRadius: 22, border: '1px solid rgba(142,134,242,0.14)', background: 'repeating-linear-gradient(135deg,rgba(107,99,216,0.10) 0 14px,rgba(107,99,216,0.04) 14px 28px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 30 }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#8A86AC', position: 'absolute', top: 24, left: 30 }}>project shot — replace</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', marginBottom: 8 }}>Token Launch</span>
              <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 22, color: '#F1EFFA', margin: 0 }}>A credible debut backed by real investors.</h3>
            </div>
            {[
              { label: 'NFT Collection', title: 'Visibility with legitimacy.', span: 'span 3' },
              { label: 'Creator Partnership', title: 'Aligned voices, authentic reach.', span: 'span 3' },
            ].map(({ label, title, span }) => (
              <div key={label} style={{ gridColumn: span, position: 'relative', overflow: 'hidden', borderRadius: 22, border: '1px solid rgba(142,134,242,0.14)', background: 'repeating-linear-gradient(135deg,rgba(142,134,242,0.08) 0 12px,rgba(142,134,242,0.02) 12px 24px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 26 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.2em', color: '#8A86AC', position: 'absolute', top: 22, left: 26 }}>project shot</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', marginBottom: 6 }}>{label}</span>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 18, color: '#F1EFFA', margin: 0 }}>{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(20px,5vw,48px) clamp(80px,11vh,120px)' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 30, border: '1px solid rgba(142,134,242,0.26)', padding: 'clamp(48px,7vw,80px) clamp(28px,5vw,64px)', textAlign: 'center', background: 'linear-gradient(160deg,rgba(107,99,216,0.22),rgba(30,26,64,0.4))' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.6, background: 'radial-gradient(50% 100% at 50% 0%, rgba(169,159,255,0.3), transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#A99FFF' }}>Get Started</span>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4.2vw,54px)', lineHeight: 1.06, letterSpacing: '-0.025em', margin: '18px auto 22px', maxWidth: 680, color: '#F4F2FC' }}>Let&apos;s build trust, together.</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.65, color: '#BDB9D6', maxWidth: 600, margin: '0 auto 36px' }}>At Kaysa, it's not about the masses — it's about the match. Together, we're building a new era of credible influence in the world of crypto and Web3.</p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, fontWeight: 600, padding: '17px 38px', borderRadius: 14, textDecoration: 'none', display: 'inline-block' }}>Set Up a Free Consultation →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

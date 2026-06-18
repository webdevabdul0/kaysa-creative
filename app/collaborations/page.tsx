'use client';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';


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
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F1EFFA' }}>Building Credible Influence Together</h2>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#8E86F2' }}>Featured Projects</span>
          </div>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 40px', color: '#F1EFFA' }}>Recent Collaborations</h2>
          <div className="bento-6col" style={{ gridAutoRows: 200 }}>
            <div style={{ gridColumn: 'span 4', gridRow: 'span 2', position: 'relative', overflow: 'hidden', borderRadius: 24, border: '1px solid rgba(142,134,242,0.18)' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/shotss.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,12,0.96) 0%, rgba(7,7,12,0.7) 40%, rgba(7,7,12,0.3) 70%, rgba(7,7,12,0.15) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', display: 'block', marginBottom: 10 }}>Blind Mint Protocol · DeFi NFT</span>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(18px,2vw,26px)', color: '#F4F2FC', margin: '0 0 8px' }}>The Moonpot</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, lineHeight: 1.62, color: '#B0ACCC', margin: 0, maxWidth: 420 }}>A fully on-chain blind mint protocol where every TMP minted may drop a rare NFT linked to real USDC rewards — no presales, no team tokens, powered by Chainlink VRF randomness.</p>
              </div>
              <a href="https://themoonpot.com/" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: 24, right: 24, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', color: '#8E86F2', textDecoration: 'none', border: '1px solid rgba(142,134,242,0.3)', padding: '6px 14px', borderRadius: 100, background: 'rgba(7,7,12,0.6)', backdropFilter: 'blur(8px)' }}>↗ Visit</a>
            </div>
            <div style={{ gridColumn: 'span 2', padding: 28, borderRadius: 24, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#7E7AA0', textTransform: 'uppercase' }}>Smart Contracts</span>
              <div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 32, color: '#A99FFF', marginBottom: 6 }}>100%</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#A09CBE' }}>Immutable, fully on-chain. No presales, no team tokens.</div>
              </div>
            </div>
            <div style={{ gridColumn: 'span 2', padding: 28, borderRadius: 24, border: '1px solid rgba(142,134,242,0.22)', background: 'linear-gradient(135deg,rgba(107,99,216,0.18),rgba(107,99,216,0.04))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#A99FFF', textTransform: 'uppercase' }}>Randomness</span>
              <div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 22, color: '#F4F2FC', marginBottom: 6 }}>Chainlink VRF</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#BCB7D8' }}>Verifiable on-chain NFT rarity. No manipulation possible.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(70px,10vh,120px) clamp(20px,5vw,48px) clamp(80px,11vh,120px)' }}>
          <motion.div whileHover={{ scale: 1.005 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 30, border: '1px solid rgba(142,134,242,0.26)', padding: 'clamp(48px,7vw,90px) clamp(28px,5vw,64px)', textAlign: 'center', background: 'rgba(12,10,28,0.85)' }}>
            <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', left: '-8%', top: '-30%', background: 'radial-gradient(circle, rgba(107,99,216,0.45) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
            <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', left: '50%', top: '-40%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(80,195,255,0.3) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />
            <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', right: '-6%', bottom: '-30%', background: 'radial-gradient(circle, rgba(201,111,232,0.38) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(44px)' }} />
            <div style={{ position: 'relative' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#A99FFF' }}>Get Started</span>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: '18px auto 22px', maxWidth: 780, color: '#F4F2FC' }}>Let&apos;s build trust, together.</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: '#BDB9D6', maxWidth: 560, margin: '0 auto 36px' }}>At Kaysa, it&apos;s not about the masses — it&apos;s about the match. Together, we&apos;re building a new era of credible influence in the world of crypto and Web3.</p>
              <Link href="/contact">
                <motion.span className="btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 24px 64px rgba(107,99,216,0.8)' }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', fontSize: 16, fontWeight: 500, padding: '17px 40px', borderRadius: 14 }}>Set Up a Free Consultation →</motion.span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

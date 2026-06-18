'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/Animate';

const SectionLabel = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 20 }}>
    <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#8E86F2' }}>{text}</span>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{ textAlign: 'center', padding: 'clamp(100px,13vh,140px) clamp(20px,5vw,48px) clamp(40px,6vh,70px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.06)', marginBottom: 30 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#B7B2E0' }}>Unlock a New Partnership</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ fontFamily: "'Sora',sans-serif", fontWeight: 300, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0, color: '#F4F2FC' }}
          >
            About{' '}
            <span style={{ fontWeight: 400, background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Kaysa</span>
          </motion.h1>
        </section>

        {/* APPROACH */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(40px,7vh,90px) clamp(20px,5vw,48px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
            <FadeUp>
              <SectionLabel text="Our Approach" />
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: 0, color: '#F1EFFA' }}>Kaysa Creative Marketing — Where Trust Meets Influence</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.72, color: '#A6A2C2', margin: '0 0 18px' }}>In a world that&apos;s evolving at lightning speed, the connection between brands, technology, and communities is being redefined. Crypto is no longer the future — it&apos;s the present. But with growth comes a major challenge: trust.</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.72, color: '#A6A2C2', margin: '0 0 18px' }}>The market is flooded with new tokens, NFTs, and Web3 projects. Among the truly innovative ideas, there are also those that fail to deliver, harming the credibility of the entire industry.</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.72, color: '#D5D1EA', margin: 0 }}>Kaysa Creative Marketing was created to solve that problem. We are the bridge between trust and exposure — connecting verified crypto projects with carefully selected influencers.</p>
            </FadeUp>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px) 0' }}>

          {/* MISSION — images left, content right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25,0.1,0.25,1] }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,6vw,80px)', alignItems: 'center', marginBottom: 'clamp(80px,12vh,140px)' }}
          >
            {/* Image collage */}
            <div style={{ position: 'relative', height: 'clamp(320px,40vw,480px)' }}>
              {/* Background image */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '75%', height: '75%', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(142,134,242,0.16)', background: 'linear-gradient(135deg,rgba(107,99,216,0.18),rgba(30,26,64,0.3))' }}>
                <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(135deg,rgba(107,99,216,0.08) 0 12px,rgba(107,99,216,0.02) 12px 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#6B67A0' }}>VISUAL PLACEHOLDER</span>
                </div>
              </div>
              {/* Foreground image */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: '60%', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(142,134,242,0.22)', background: 'linear-gradient(160deg,rgba(107,99,216,0.25),rgba(40,34,80,0.4))' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#A99FFF' }}>VISUAL</span>
                </div>
              </div>
              {/* Accent dot */}
              <div style={{ position: 'absolute', top: '72%', left: '20%', width: 14, height: 14, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 20px rgba(142,134,242,0.7)' }} />
            </div>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#8E86F2' }}>Our Mission</span>
              </div>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F1EFFA' }}>Mission</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15.5, lineHeight: 1.72, color: '#A6A2C2', margin: '0 0 28px' }}>Kaysa specializes in crypto marketing with one clear goal: to connect verified projects with influential creators who make a genuine impact. Every project we represent undergoes a thorough vetting process — from tokenomics to team background — before being introduced to our influencer network.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Verified projects, end-to-end',
                  'Influencers screened for authenticity',
                  'Shared values, not just reach',
                  'Transparent, trust-first process',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 22, height: 22, borderRadius: 6, flex: 'none', background: 'linear-gradient(135deg,#A99FFF,#6B63D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff' }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: '#CFCBE4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VISION — content left, images right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.25,0.1,0.25,1] }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,6vw,80px)', alignItems: 'center' }}
          >
            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase' as const, color: '#8E86F2' }}>Our Vision</span>
              </div>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F1EFFA' }}>Vision</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15.5, lineHeight: 1.72, color: '#A6A2C2', margin: '0 0 28px' }}>Our vision is to be the trusted global partner for innovation and growth, where strategy meets creativity and every collaboration retains a personal, human touch.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Inspiring credible influence globally',
                  'Strategy meets creativity',
                  'Human touch in every partnership',
                  'Building the future of Web3 trust',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 22, height: 22, borderRadius: 6, flex: 'none', background: 'linear-gradient(135deg,#A99FFF,#6B63D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff' }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: '#CFCBE4' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div style={{ position: 'relative', height: 'clamp(320px,40vw,480px)' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '75%', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(142,134,242,0.16)', background: 'linear-gradient(135deg,rgba(107,99,216,0.18),rgba(30,26,64,0.3))' }}>
                <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(135deg,rgba(107,99,216,0.08) 0 12px,rgba(107,99,216,0.02) 12px 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#6B67A0' }}>VISUAL PLACEHOLDER</span>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '55%', height: '60%', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(142,134,242,0.22)', background: 'linear-gradient(160deg,rgba(107,99,216,0.25),rgba(40,34,80,0.4))' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#A99FFF' }}>VISUAL</span>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '72%', right: '20%', width: 14, height: 14, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 20px rgba(142,134,242,0.7)' }} />
            </div>
          </motion.div>

        </section>

        {/* OUR STRENGTH */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(60px,9vh,110px) clamp(20px,5vw,48px) clamp(80px,11vh,120px)' }}>
          <FadeUp>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 clamp(48px,8vh,96px)', color: '#F1EFFA' }}>Our Strength</h2>
          </FadeUp>

          <div className="stagger-cards" style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
            {[
              { n: '01', label: 'Verification', title: 'Due Diligence', body: "Every token, NFT, or Web3 project we promote is verified for authenticity, transparency, and long-term potential." },
              { n: '02', label: 'Our Network', title: 'Selective Partnerships', body: "We only work with influencers who have a proven track record of integrity and engagement." },
              { n: '03', label: 'End-to-End', title: 'Full-Service Marketing', body: "From strategy and content creation to influencer activation and storytelling — we build trust, not just reach." },
            ].map(({ n, label, title, body }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  flex: 1,
                  position: 'relative',
                  paddingLeft: i > 0 ? 'clamp(24px,3vw,48px)' : 0,
                  paddingRight: i < 2 ? 'clamp(24px,3vw,48px)' : 0,
                  paddingTop: 'clamp(70px,8vw,100px)',
                  paddingBottom: 'clamp(32px,5vh,56px)',
                  borderLeft: i > 0 ? '1px solid rgba(142,134,242,0.12)' : 'none',
                }}
              >
                {/* Ghost number */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  right: i < 2 ? 'clamp(20px,4vw,50px)' : 20,
                  fontFamily: "'Sora',sans-serif", fontWeight: 800,
                  fontSize: 'clamp(70px,9vw,120px)', lineHeight: 1,
                  color: 'rgba(255,255,255,0.06)',
                  userSelect: 'none', pointerEvents: 'none',
                  letterSpacing: '-0.06em',
                  zIndex: 0,
                }}>{n}</div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7E7AA0' }}>{label}</span>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(22px,2.4vw,32px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#F1EFFA', margin: '18px 0 clamp(20px,3vh,36px)' }}>{title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.72, color: '#A09CBE', margin: 0, maxWidth: 340 }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp style={{ marginTop: 'clamp(60px,9vh,100px)' }}>
            <motion.div whileHover={{ scale: 1.005 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 30, border: '1px solid rgba(142,134,242,0.26)', padding: 'clamp(48px,7vw,90px) clamp(28px,5vw,64px)', textAlign: 'center', background: 'rgba(12,10,28,0.85)' }}>
              <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', left: '-8%', top: '-30%', background: 'radial-gradient(circle, rgba(107,99,216,0.45) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
              <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', left: '50%', top: '-40%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(80,195,255,0.3) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />
              <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', right: '-6%', bottom: '-30%', background: 'radial-gradient(circle, rgba(201,111,232,0.38) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(44px)' }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#A99FFF' }}>Get Started</span>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: '18px auto 22px', maxWidth: 780, color: '#F4F2FC' }}>Ready to build something credible?</h2>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: '#BDB9D6', maxWidth: 560, margin: '0 auto 36px' }}>Let&apos;s connect your brand with the right voices — verified, authentic, and aligned with your vision.</p>
                <Link href="/contact">
                  <motion.span className="btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 24px 64px rgba(107,99,216,0.8)' }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', fontSize: 16, fontWeight: 500, padding: '17px 40px', borderRadius: 14 }}>Get in touch →</motion.span>
                </Link>
              </div>
            </motion.div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}

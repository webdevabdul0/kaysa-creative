'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FadeUp, FadeIn, StaggerGroup, StaggerItem, CountUp } from '@/components/Animate';
import type { GlobeConfig } from '@/components/ui/globe';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), { ssr: false });

/* ── Globe config — Kaysa purple palette ── */
const globeConfig: GlobeConfig = {
  globeColor: '#0D0B2A',
  emissive: '#1a1040',
  emissiveIntensity: 0.15,
  shininess: 0.9,
  showAtmosphere: true,
  atmosphereColor: '#8E86F2',
  atmosphereAltitude: 0.18,
  polygonColor: 'rgba(200,190,255,0.7)',
  ambientLight: '#6B63D8',
  directionalLeftLight: '#A99FFF',
  directionalTopLight: '#ffffff',
  pointLight: '#8E86F2',
  arcTime: 1400,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const arcColors = ['#8E86F2', '#6B63D8', '#A99FFF'];
const c = () => arcColors[Math.floor(Math.random() * arcColors.length)];

const sampleArcs = [
  { order:1,  startLat:-19.89, startLng:-43.95, endLat:-22.91, endLng:-43.17, arcAlt:0.1, color:c() },
  { order:1,  startLat:28.61,  startLng:77.21,  endLat:3.14,   endLng:101.69, arcAlt:0.2, color:c() },
  { order:1,  startLat:-19.89, startLng:-43.95, endLat:-1.30,  endLng:36.85,  arcAlt:0.5, color:c() },
  { order:2,  startLat:1.35,   startLng:103.82, endLat:35.68,  endLng:139.65, arcAlt:0.2, color:c() },
  { order:2,  startLat:51.51,  startLng:-0.13,  endLat:3.14,   endLng:101.69, arcAlt:0.3, color:c() },
  { order:2,  startLat:-15.79, startLng:-47.91, endLat:36.16,  endLng:-115.12,arcAlt:0.3, color:c() },
  { order:3,  startLat:-33.87, startLng:151.21, endLat:22.32,  endLng:114.17, arcAlt:0.3, color:c() },
  { order:3,  startLat:21.31,  startLng:-157.86,endLat:40.71,  endLng:-74.01, arcAlt:0.3, color:c() },
  { order:3,  startLat:-6.21,  startLng:106.85, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:c() },
  { order:4,  startLat:11.99,  startLng:8.57,   endLat:-15.60, endLng:-56.06, arcAlt:0.5, color:c() },
  { order:4,  startLat:-34.60, startLng:-58.38, endLat:22.32,  endLng:114.17, arcAlt:0.7, color:c() },
  { order:4,  startLat:51.51,  startLng:-0.13,  endLat:48.86,  endLng:-2.35,  arcAlt:0.1, color:c() },
  { order:5,  startLat:14.60,  startLng:120.98, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:c() },
  { order:5,  startLat:1.35,   startLng:103.82, endLat:-33.87, endLng:151.21, arcAlt:0.2, color:c() },
  { order:5,  startLat:34.05,  startLng:-118.24,endLat:48.86,  endLng:-2.35,  arcAlt:0.2, color:c() },
  { order:6,  startLat:37.57,  startLng:126.98, endLat:35.68,  endLng:139.65, arcAlt:0.1, color:c() },
  { order:6,  startLat:22.32,  startLng:114.17, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:c() },
  { order:7,  startLat:48.86,  startLng:-2.35,  endLat:52.52,  endLng:13.41,  arcAlt:0.1, color:c() },
  { order:7,  startLat:52.52,  startLng:13.41,  endLat:34.05,  endLng:-118.24,arcAlt:0.2, color:c() },
  { order:8,  startLat:49.28,  startLng:-123.12,endLat:52.37,  endLng:4.90,   arcAlt:0.2, color:c() },
  { order:8,  startLat:1.35,   startLng:103.82, endLat:40.71,  endLng:-74.01, arcAlt:0.5, color:c() },
  { order:9,  startLat:51.51,  startLng:-0.13,  endLat:34.05,  endLng:-118.24,arcAlt:0.2, color:c() },
  { order:9,  startLat:22.32,  startLng:114.17, endLat:-22.91, endLng:-43.17, arcAlt:0.7, color:c() },
  { order:10, startLat:-22.91, startLng:-43.17, endLat:28.61,  endLng:77.21,  arcAlt:0.7, color:c() },
  { order:10, startLat:34.05,  startLng:-118.24,endLat:31.23,  endLng:121.47, arcAlt:0.3, color:c() },
  { order:11, startLat:41.90,  startLng:12.50,  endLat:34.05,  endLng:-118.24,arcAlt:0.2, color:c() },
  { order:12, startLat:35.68,  startLng:139.65, endLat:22.32,  endLng:114.17, arcAlt:0.2, color:c() },
  { order:13, startLat:52.52,  startLng:13.41,  endLat:22.32,  endLng:114.17, arcAlt:0.3, color:c() },
  { order:14, startLat:-33.94, startLng:18.44,  endLat:21.40,  endLng:39.88,  arcAlt:0.3, color:c() },
];

const partners = ['LUNARX', 'NOVACHAIN', 'AETHER', 'PULSE', 'ZENITH', 'ORBIT', 'VERTEX', 'HALO'];
const partnersDbl = [...partners, ...partners];

const testimonials = [
  { quote: "Kaysa completely changed the way I collaborate with crypto brands. Every project they connect me with is verified, transparent, and professional — which means I can grow my audience without risking my reputation.", author: 'Angela Charlton', title: 'Web3 Influencer', initial: 'A' },
  { quote: "Before working with Kaysa, it was difficult to find influencers who truly matched our project's vision. They not only verified our token and community but also built a campaign that brought in real investors and long-term holders.", author: 'Kason Espinosa', title: 'CEO, LunarX Token', initial: 'K' },
  { quote: "Kaysa helped bring our NFT project into the spotlight in a way that felt authentic. Their creative direction and influencer partnerships gave us both visibility and legitimacy.", author: 'Rehaan Whitfield', title: 'NFT Creator & Artist', initial: 'R' },
];
const testimonialsDbl = [...testimonials, ...testimonials];

const SectionLabel = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 22 }}>
    <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase' as const, color: '#8E86F2' }}>{text}</span>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════
            HERO — text left, globe right
        ══════════════════════════════════════ */}
        <section style={{
          maxWidth: 1240, margin: '0 auto',
          padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,48px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
          minHeight: '88vh',
        }}>
          {/* LEFT — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.06)', marginBottom: 32 }}
            >
              <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B7B2E0' }}>Augmenting Your Reputation</span>
            </motion.div>

            <div style={{ overflow: 'hidden' }}>
              {['We Build', 'Strong Brands', '+ Influencer', 'Partnerships'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 64 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <h1 style={{
                    fontFamily: "'Sora',sans-serif",
                    fontWeight: i === 1 ? 400 : 300,
                    fontSize: 'clamp(34px,4.2vw,62px)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    margin: 0,
                    color: i === 1
                      ? 'transparent'
                      : '#F4F2FC',
                    background: i === 1
                      ? 'linear-gradient(120deg,#A99FFF,#6B63D8)'
                      : undefined,
                    WebkitBackgroundClip: i === 1 ? 'text' : undefined,
                    backgroundClip: i === 1 ? 'text' : undefined,
                  }}>
                    {line}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(15px,1.3vw,17px)', lineHeight: 1.65, color: '#A6A2C2', maxWidth: 480, margin: '24px 0 36px' }}
            >
              Connecting verified crypto projects with influencers who make a genuine impact — in the world of Web3.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link href="/contact">
                <motion.span
                  className="btn-primary"
                  whileHover={{ scale: 1.04, boxShadow: '0 18px 48px rgba(107,99,216,0.7)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: 'inline-block', fontSize: 15.5, padding: '15px 32px', borderRadius: 13 }}
                >
                  Let&apos;s talk →
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  className="btn-secondary"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: 'inline-block', fontSize: 15.5, padding: '15px 30px', borderRadius: 13 }}
                >
                  How it works
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — globe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ position: 'relative', height: 'clamp(380px,55vw,620px)' }}
          >
            {/* glow behind globe */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(107,99,216,0.18) 0%, transparent 70%)',
              pointerEvents: 'none', zIndex: 0,
            }} />
            {/* bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
              background: 'linear-gradient(to bottom, transparent, #07070C)',
              pointerEvents: 'none', zIndex: 2,
            }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </motion.div>
        </section>

        {/* ── LOGO STRIP ── */}
        <FadeIn>
          <section style={{ padding: '18px 0 8px' }}>
            <p style={{ textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6E6A8C', margin: '0 0 26px' }}>Trusted across the Web3 ecosystem</p>
            <div style={{ position: 'relative', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
              <div className="marquee-l" style={{ display: 'flex', gap: 18, width: 'max-content' }}>
                {partnersDbl.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 28px', borderRadius: 14, border: '1px solid rgba(142,134,242,0.10)', background: 'rgba(255,255,255,0.02)', flex: 'none' }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: 'linear-gradient(135deg,#A99FFF,#6B63D8)' }} />
                    <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 500, fontSize: 16, letterSpacing: '0.05em', color: '#B9B5D2', whiteSpace: 'nowrap' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── WHAT WE DO ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><SectionLabel text="What We Do" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 48px', maxWidth: 680, color: '#F1EFFA' }}>Everything you need to grow with credibility.</h2>
          </FadeUp>
          <StaggerGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              { n: '01', title: 'Influencer Matchmaking', body: "We connect your brand with verified influencers who align with your voice, audience, and values." },
              { n: '02', title: 'Campaign Strategy', body: "We craft tailor-made campaigns to launch, scale or reposition your business — from idea to execution." },
              { n: '03', title: 'Reputation-Safe Partnerships', body: "Every influencer and brand is screened by our team to protect both sides of the collaboration." },
            ].map(({ n, title, body }) => (
              <StaggerItem key={n}>
                <motion.div className="card" whileHover={{ y: -6, borderColor: 'rgba(142,134,242,0.4)' }} transition={{ type: 'spring', stiffness: 300 }} style={{ position: 'relative', padding: 32, borderRadius: 20, overflow: 'hidden', height: '100%' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(107,99,216,0.16)', border: '1px solid rgba(142,134,242,0.28)', marginBottom: 22, fontFamily: "'JetBrains Mono',monospace", color: '#A99FFF', fontSize: 18 }}>{n}</div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 20, color: '#F1EFFA', margin: '0 0 12px' }}>{title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.62, color: '#A09CBE', margin: 0 }}>{body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* ── DIFFERENTIATOR ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
            <FadeUp>
              <SectionLabel text="What Makes Us Different" />
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F1EFFA' }}>
                We Verify Both Sides —{' '}
                <span style={{ background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>To Protect Both Sides</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.7, color: '#A6A2C2', margin: '0 0 16px' }}>At Kaysa, we don&apos;t just make introductions — we make smart matches. Every brand and every influencer we work with goes through our in-house screening process.</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', borderRadius: 13, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.07)', marginTop: 14 }}>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 15, color: '#E7E4F6' }}>Trust isn&apos;t optional. It&apos;s part of our process.</span>
              </div>
              <div style={{ marginTop: 30 }}>
                <Link href="/about"><motion.span className="btn-secondary" whileHover={{ scale: 1.03 }} style={{ display: 'inline-block', fontSize: 15, padding: '13px 26px', borderRadius: 12 }}>Learn More →</motion.span></Link>
              </div>
            </FadeUp>
            <StaggerGroup style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7E7AA0', margin: '0 0 4px' }}>Why it matters</p>
              {[
                { title: 'For Influencers', body: "We protect your personal brand and reputation by only connecting you to trustworthy companies." },
                { title: 'For Brands', body: "We verify influencer data (reach, engagement, authenticity) so you know exactly who you're working with." },
              ].map(({ title, body }) => (
                <StaggerItem key={title}>
                  <motion.div whileHover={{ y: -4 }} style={{ padding: 26, borderRadius: 18, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))' }}>
                    <h4 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 16, color: '#C8B9FF', margin: '0 0 10px' }}>{title}</h4>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: '#A09CBE', margin: 0 }}>{body}</p>
                  </motion.div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div style={{ padding: '22px 26px', borderRadius: 18, border: '1px solid rgba(142,134,242,0.22)', background: 'linear-gradient(135deg,rgba(107,99,216,0.18),rgba(107,99,216,0.05))' }}>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: '#D9D5EE', margin: 0 }}>Genuine, aligned partnerships that feel real — and perform.</p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        {/* ── AUDIENCE CTA BANNER ── */}
        <FadeUp>
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 200 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, border: '1px solid rgba(142,134,242,0.24)', padding: 'clamp(40px,6vw,72px)', textAlign: 'center', background: 'linear-gradient(135deg,rgba(107,99,216,0.20),rgba(40,34,80,0.30))' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.5, background: 'radial-gradient(60% 120% at 50% 0%, rgba(169,159,255,0.25), transparent 70%)', pointerEvents: 'none' }} />
              <h2 style={{ position: 'relative', fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(26px,3.6vw,44px)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 auto 30px', maxWidth: 760, color: '#F4F2FC' }}>
                For Brands Ready to Grow — and Creators Ready to Collaborate
              </h2>
              <Link href="/contact">
                <motion.span className="btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 20px 52px rgba(107,99,216,0.75)' }} whileTap={{ scale: 0.97 }} style={{ position: 'relative', display: 'inline-block', fontSize: 15.5, padding: '15px 34px', borderRadius: 13 }}>Work with us →</motion.span>
              </Link>
            </motion.div>
          </section>
        </FadeUp>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: 'clamp(80px,11vh,130px) 0 0' }}>
          <FadeUp>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#8E86F2' }}>Testimonials</span>
              </div>
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, color: '#F1EFFA' }}>Trust, in their words.</h2>
            </div>
          </FadeUp>
          <div style={{ position: 'relative', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[{ dir: 'marquee-l', grad: 'linear-gradient(135deg,#A99FFF,#6B63D8)' }, { dir: 'marquee-r', grad: 'linear-gradient(135deg,#6B63D8,#4A3F9E)' }].map(({ dir, grad }, ri) => (
              <div key={ri} className={dir} style={{ display: 'flex', gap: 20, width: 'max-content' }}>
                {testimonialsDbl.map((t, i) => (
                  <div key={i} style={{ flex: 'none', width: 'min(420px,82vw)', padding: 30, borderRadius: 20, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))' }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.65, color: '#CFCBE4', margin: '0 0 22px' }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                      <div style={{ width: 42, height: 42, borderRadius: '50%', flex: 'none', background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora',sans-serif", fontWeight: 500, fontSize: 16, color: '#fff' }}>{t.initial}</div>
                      <div>
                        <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 500, fontSize: 15, color: '#F1EFFA' }}>{t.author}</div>
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.06em', color: '#8A86AC' }}>{t.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS BENTO ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><SectionLabel text="Featured Projects" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 40px', color: '#F1EFFA' }}>What Success Looks Like</h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gridAutoRows: 200, gap: 18 }}>
              <motion.div whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 200 }} style={{ gridColumn: 'span 4', gridRow: 'span 2', position: 'relative', overflow: 'hidden', borderRadius: 22, border: '1px solid rgba(142,134,242,0.14)', background: 'repeating-linear-gradient(135deg,rgba(107,99,216,0.10) 0 14px,rgba(107,99,216,0.04) 14px 28px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 30 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#8A86AC', position: 'absolute', top: 24, left: 30 }}>project shot — replace</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', marginBottom: 8 }}>Token Launch</span>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 24, color: '#F1EFFA', margin: 0 }}>From whitepaper to a verified, holder-driven community.</h3>
              </motion.div>
              {[
                { label: 'NFT Drop', title: 'Authentic spotlight, real demand.', span: 'span 2', size: 17 },
                { label: 'Brand Campaign', title: 'Repositioned for the right audience.', span: 'span 2', size: 17 },
                { label: 'Influencer Activation', title: 'Verified creators, measurable reach.', span: 'span 3', size: 19 },
                { label: 'Community Growth', title: 'From hype to lasting holders.', span: 'span 3', size: 19 },
              ].map(({ label, title, span, size }, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} style={{ gridColumn: span, position: 'relative', overflow: 'hidden', borderRadius: 22, border: '1px solid rgba(142,134,242,0.14)', background: 'repeating-linear-gradient(135deg,rgba(142,134,242,0.08) 0 12px,rgba(142,134,242,0.02) 12px 24px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.2em', color: '#8A86AC', position: 'absolute', top: 20, left: 24 }}>project shot</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', marginBottom: 6 }}>{label}</span>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: size, color: '#F1EFFA', margin: 0 }}>{title}</h3>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── HOW WE WORK ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 48px', color: '#F1EFFA' }}>How we work</h2></FadeUp>
          <StaggerGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {[
              { step: 'STEP 01', title: 'You share your vision.', body: "Tell us your goal, your project, and your timeline. Whether it's a token launch, NFT drop, or brand expansion — we start by understanding what success means to you.", accent: false },
              { step: 'STEP 02', title: 'We verify and match.', body: "Every project is screened for authenticity and potential. Then, we connect you with verified influencers whose audience, tone, and values align perfectly with your brand.", accent: false },
              { step: 'STEP 03', title: 'We build and execute.', body: "Our team designs the full strategy — from creative direction and content planning to campaign management and deadlines. You focus on growth; we handle the rest.", accent: false },
              { step: 'STEP 04', title: 'You see results.', body: "Content goes live. Reports are delivered. Visibility increases. We turn verified connections into measurable impact.", accent: true },
            ].map(({ step, title, body, accent }) => (
              <StaggerItem key={step}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} style={{ padding: 30, borderRadius: 20, border: `1px solid rgba(142,134,242,${accent ? '0.22' : '0.12'})`, background: accent ? 'linear-gradient(135deg,rgba(107,99,216,0.16),rgba(107,99,216,0.04))' : 'linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))' }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: accent ? '#A99FFF' : '#7E7AA0', marginBottom: 18 }}>{step}</div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 19, color: '#F1EFFA', margin: '0 0 12px' }}>{title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, lineHeight: 1.6, color: accent ? '#BCB7D8' : '#A09CBE', margin: 0 }}>{body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeUp delay={0.2} style={{ marginTop: 36 }}>
            <Link href="/contact"><motion.span className="btn-primary" whileHover={{ scale: 1.04 }} style={{ display: 'inline-block', fontSize: 15, padding: '14px 30px', borderRadius: 13 }}>Contact us →</motion.span></Link>
          </FadeUp>
        </section>

        {/* ── MISSION + STATS ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <FadeUp>
              <SectionLabel text="A Creative Agency with a Global Mission" />
              <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.16, letterSpacing: '-0.015em', margin: '0 0 24px', color: '#F1EFFA' }}>
                Kaysa was built on one powerful idea:{' '}
                <span style={{ background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Great marketing starts with trusted partnerships.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15.5, lineHeight: 1.68, color: '#A6A2C2', margin: '0 0 16px' }}>From the heart of Dubai – Meydan Free Zone, we connect verified crypto projects with influencers who make an impact.</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15.5, lineHeight: 1.68, color: '#A6A2C2', margin: '0 0 28px' }}>From influencer strategy to full campaign execution — Kaysa is your growth partner in the decentralized era.</p>
              <Link href="/about"><motion.span className="btn-secondary" whileHover={{ scale: 1.03 }} style={{ display: 'inline-block', fontSize: 15, padding: '13px 26px', borderRadius: 12 }}>About Kaysa →</motion.span></Link>
            </FadeUp>
            <StaggerGroup style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { target: 50, suffix: '+', label: 'Verified influencers in network' },
                { target: 100, suffix: '%', label: 'Screened & verified partners' },
                { target: 3, suffix: '+', label: 'Years in Web3 marketing' },
                { target: 1, suffix: '', label: 'Dubai Meydan Free Zone office' },
              ].map(({ target, suffix, label }) => (
                <StaggerItem key={label}>
                  <motion.div whileHover={{ y: -4, borderColor: 'rgba(142,134,242,0.3)' }} style={{ padding: 28, borderRadius: 18, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))' }}>
                    <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 500, fontSize: 38, background: 'linear-gradient(120deg,#A99FFF,#6B63D8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                      <CountUp target={target} suffix={suffix} />
                    </div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, color: '#9A96B8', marginTop: 6 }}>{label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <FadeUp>
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(80px,11vh,130px) clamp(20px,5vw,48px) clamp(80px,11vh,120px)' }}>
            <motion.div whileHover={{ scale: 1.005 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 30, border: '1px solid rgba(142,134,242,0.26)', padding: 'clamp(48px,7vw,90px) clamp(28px,5vw,64px)', textAlign: 'center', background: 'linear-gradient(160deg,rgba(107,99,216,0.22),rgba(30,26,64,0.4))' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.6, background: 'radial-gradient(50% 100% at 50% 0%, rgba(169,159,255,0.3), transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#A99FFF' }}>Get Started</span>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: '18px auto 22px', maxWidth: 780, color: '#F4F2FC' }}>Ready to Grow. Verified. Globally.</h2>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: '#BDB9D6', maxWidth: 560, margin: '0 auto 36px' }}>Work with Kaysa and connect your crypto brand to trusted influencers worldwide. No noise. No risks. Just real growth.</p>
                <Link href="/contact">
                  <motion.span className="btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 24px 64px rgba(107,99,216,0.8)' }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', fontSize: 16, fontWeight: 500, padding: '17px 40px', borderRadius: 14 }}>Start your campaign →</motion.span>
                </Link>
              </div>
            </motion.div>
          </section>
        </FadeUp>
      </main>
      <Footer />
    </>
  );
}

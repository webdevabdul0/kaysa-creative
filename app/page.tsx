'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FadeUp, FadeIn, StaggerGroup, StaggerItem, CountUp } from '@/components/Animate';
import type { GlobeConfig } from '@/components/ui/globe';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%' }} />,
});

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
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowGlobe(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════
            HERO — centred text + globe below
        ══════════════════════════════════════ */}
        <section style={{ position: 'relative', textAlign: 'center', paddingTop: 'clamp(100px,13vh,140px)', overflow: 'hidden' }}>
          {/* Subtle curved lines sweeping across the heading */}
          <svg
            viewBox="0 0 1400 400"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '60%', zIndex: 0, pointerEvents: 'none' }}
            aria-hidden
          >
            <defs>
              {/* Visible at edges, fades out toward centre */}
              <linearGradient id="cl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8E86F2" stopOpacity="0.5" />
                <stop offset="18%" stopColor="#8E86F2" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#8E86F2" stopOpacity="0" />
                <stop offset="70%" stopColor="#A99FFF" stopOpacity="0" />
                <stop offset="82%" stopColor="#A99FFF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#A99FFF" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="cl2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6B63D8" stopOpacity="0.35" />
                <stop offset="18%" stopColor="#6B63D8" stopOpacity="0.15" />
                <stop offset="30%" stopColor="#6B63D8" stopOpacity="0" />
                <stop offset="70%" stopColor="#6B63D8" stopOpacity="0" />
                <stop offset="82%" stopColor="#6B63D8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#6B63D8" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            {/* Curves visible on sides, fade behind text in centre */}
            <path d="M -100 180 Q 700 120 1500 180" fill="none" stroke="url(#cl)" strokeWidth="1" />
            <path d="M -100 240 Q 700 170 1500 240" fill="none" stroke="url(#cl)" strokeWidth="0.8" />
            <path d="M -100 310 Q 700 230 1500 310" fill="none" stroke="url(#cl2)" strokeWidth="0.7" />
          </svg>
          {/* TEXT block */}
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(142,134,242,0.22)', background: 'rgba(142,134,242,0.06)', marginBottom: 36 }}
            >
              <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#8E86F2', boxShadow: '0 0 12px #6B63D8' }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B7B2E0' }}>Augmenting Your Reputation</span>
            </motion.div>

            <div style={{ overflow: 'hidden' }}>
              {['We Build Strong Brands &', 'Influencer Partnerships'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 64 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <h1 style={{
                    fontFamily: "'Sora',sans-serif",
                    fontWeight: i === 1 ? 400 : 300,
                    fontSize: 'clamp(32px,4.4vw,68px)',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    color: i === 1 ? 'transparent' : '#F4F2FC',
                    background: i === 1 ? 'linear-gradient(120deg,#A99FFF,#6B63D8)' : undefined,
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
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.65, color: '#A6A2C2', maxWidth: 560, margin: '18px auto 28px' }}
            >
              Connecting verified crypto projects with influencers who make a genuine impact — in the world of Web3.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}
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

          {/* GLOBE — centred below text, top half only */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ position: 'relative', marginTop: 24, height: 'clamp(300px,38vw,500px)', overflow: 'hidden' }}
          >
            {/* purple glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(60% 80% at 50% 70%, rgba(107,99,216,0.32) 0%, transparent 70%)',
              pointerEvents: 'none', zIndex: 0,
            }} />
            {/* bottom fade — hard cut at ~50% so only top hemisphere shows */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%',
              background: 'linear-gradient(to bottom, transparent 0%, #07070C 60%)',
              pointerEvents: 'none', zIndex: 2,
            }} />
            {/* globe canvas — positioned so top of globe is visible */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 900, height: '200%', zIndex: 1 }}>
              {showGlobe && <World data={sampleArcs} globeConfig={globeConfig} />}
            </div>
          </motion.div>
        </section>


        {/* ── WHAT WE DO ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(160px,18vh,220px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><SectionLabel text="What We Do" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 clamp(56px,9vh,110px)', maxWidth: 680, color: '#F1EFFA' }}>Everything you need to grow with credibility.</h2>
          </FadeUp>

          {/* Staggered columns */}
          <div className="stagger-cards" style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
            {[
              { n: '01', label: 'For Brands & Projects', title: 'Influencer Matchmaking', body: "We connect your brand with verified influencers who align with your voice, audience, and values. No noise — just the right fit." },
              { n: '02', label: 'Strategy & Execution', title: 'Campaign Strategy', body: "We craft tailor-made campaigns to launch, scale or reposition your business — from concept to live content, handled end-to-end." },
              { n: '03', label: 'Built-In Protection', title: 'Reputation-Safe Partnerships', body: "Every influencer and brand is screened by our team. We protect both sides of the collaboration so trust is never at risk." },
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
                {/* Ghost number — top-right of each column */}
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
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.72, color: '#A09CBE', margin: '0 0 32px', maxWidth: 340 }}>{body}</p>
                  <Link href="/contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, color: '#A99FFF', fontWeight: 500 }}>
                    Learn more
                    <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#7B6FFF,#6B63D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff' }}>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── DIFFERENTIATOR ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) 0' }}>
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
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) 0' }}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 200 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, border: '1px solid rgba(142,134,242,0.24)', minHeight: 600, display: 'flex', alignItems: 'flex-end' }}>
              {/* Background image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/collaborate.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                opacity: 1,
              }} />
              {/* Black fade from bottom up */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, #07070C 0%, #07070C 20%, rgba(7,7,12,0.7) 50%, transparent 100%)',
              }} />
              {/* Text — anchored to bottom */}
              <div style={{ position: 'relative', width: '100%', textAlign: 'center', padding: 'clamp(40px,6vw,64px)' }}>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(26px,3.6vw,44px)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 auto 30px', maxWidth: 760, color: '#F4F2FC' }}>
                  For Brands Ready to Grow — and Creators Ready to Collaborate
                </h2>
                <Link href="/contact">
                  <motion.span className="btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 20px 52px rgba(107,99,216,0.75)' }} whileTap={{ scale: 0.97 }} style={{ position: 'relative', display: 'inline-block', fontSize: 15.5, padding: '15px 34px', borderRadius: 13 }}>Work with us →</motion.span>
                </Link>
              </div>
            </motion.div>
          </section>
        </FadeUp>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: 'clamp(140px,16vh,200px) 0 0' }}>
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

        {/* ── FEATURED PROJECT — MOONPOT ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><SectionLabel text="Featured Projects" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 40px', color: '#F1EFFA' }}>What Success Looks Like</h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <div className="bento-6col" style={{ gridAutoRows: 200 }}>
              <motion.div whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 200 }} style={{ gridColumn: 'span 4', gridRow: 'span 2', position: 'relative', overflow: 'hidden', borderRadius: 24, border: '1px solid rgba(142,134,242,0.18)' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/shotss.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,12,0.96) 0%, rgba(7,7,12,0.7) 40%, rgba(7,7,12,0.3) 70%, rgba(7,7,12,0.15) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A99FFF', display: 'block', marginBottom: 10 }}>Blind Mint Protocol · DeFi NFT</span>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(18px,2vw,26px)', color: '#F4F2FC', margin: '0 0 8px' }}>The Moonpot</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, lineHeight: 1.62, color: '#B0ACCC', margin: 0, maxWidth: 420 }}>A fully on-chain blind mint protocol where every TMP minted may drop a rare NFT linked to real USDC rewards — no presales, no team tokens, powered by Chainlink VRF randomness.</p>
                </div>
                <a href="https://themoonpot.com/" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: 24, right: 24, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.18em', color: '#8E86F2', textDecoration: 'none', border: '1px solid rgba(142,134,242,0.3)', padding: '6px 14px', borderRadius: 100, background: 'rgba(7,7,12,0.6)', backdropFilter: 'blur(8px)' }}>↗ Visit</a>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 2', padding: 28, borderRadius: 24, border: '1px solid rgba(142,134,242,0.14)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#7E7AA0', textTransform: 'uppercase' }}>Smart Contracts</span>
                <div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 32, color: '#A99FFF', marginBottom: 6 }}>100%</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#A09CBE' }}>Immutable, fully on-chain. No presales, no team tokens.</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 2', padding: 28, borderRadius: 24, border: '1px solid rgba(142,134,242,0.22)', background: 'linear-gradient(135deg,rgba(107,99,216,0.18),rgba(107,99,216,0.04))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: '#A99FFF', textTransform: 'uppercase' }}>Randomness</span>
                <div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 22, color: '#F4F2FC', marginBottom: 6 }}>Chainlink VRF</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#BCB7D8' }}>Verifiable on-chain NFT rarity. No manipulation possible.</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </section>

        {/* ── HOW WE WORK — BENTO ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) 0' }}>
          <FadeUp><SectionLabel text="Our Process" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(28px,3.8vw,48px)', lineHeight: 1.07, letterSpacing: '-0.02em', margin: '0 0 40px', color: '#F1EFFA' }}>How we work</h2>
          </FadeUp>
          <FadeIn delay={0.15}>
            <div className="bento-6col" style={{ gridAutoRows: 180 }}>

              {/* STEP 01 — wide */}
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 4', gridRow: 'span 2', position: 'relative', overflow: 'hidden', padding: 36, borderRadius: 24, border: '1px solid rgba(142,134,242,0.16)', background: 'linear-gradient(135deg,rgba(107,99,216,0.14),rgba(30,26,64,0.2))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.22em', color: '#A99FFF' }}>STEP 01</div>
                <Image
                  src="/png-step1.png"
                  alt=""
                  width={280}
                  height={280}
                  style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-58%)', opacity: 0.92, pointerEvents: 'none', userSelect: 'none' }}
                />
                <div style={{ position: 'relative' }}>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 'clamp(20px,2vw,28px)', color: '#F1EFFA', margin: '0 0 14px' }}>You share your vision.</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.65, color: '#A6A2C2', margin: 0, maxWidth: 360 }}>Tell us your goal, your project, and your timeline. Whether it's a token launch, NFT drop, or brand expansion — we start by understanding what success means to you.</p>
                </div>
              </motion.div>

              {/* STEP 02 — tall right */}
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 2', gridRow: 'span 2', position: 'relative', overflow: 'hidden', padding: 30, borderRadius: 24, border: '1px solid rgba(142,134,242,0.12)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.22em', color: '#7E7AA0' }}>STEP 02</div>
                <Image
                  src="/png-step2.png"
                  alt=""
                  width={200}
                  height={200}
                  style={{ position: 'absolute', right: -24, top: '38%', transform: 'translateY(-50%) rotate(-20deg)', opacity: 0.55, filter: 'brightness(0.7) saturate(0.4)', pointerEvents: 'none', userSelect: 'none' }}
                />
                <div style={{ position: 'relative' }}>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 19, color: '#F1EFFA', margin: '0 0 12px' }}>We verify and match.</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.62, color: '#A09CBE', margin: 0 }}>Every project is screened for authenticity. Then we connect you with verified influencers whose values align with your brand.</p>
                </div>
              </motion.div>

              {/* STEP 03 — bottom left */}
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 3', padding: 30, borderRadius: 24, border: '1px solid rgba(142,134,242,0.12)', background: 'linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.22em', color: '#7E7AA0' }}>STEP 03</div>
                <div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 19, color: '#F1EFFA', margin: '0 0 10px' }}>We build and execute.</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.62, color: '#A09CBE', margin: 0 }}>Strategy, content, campaign management — handled. You focus on growth.</p>
                </div>
              </motion.div>

              {/* STEP 04 — bottom right accent */}
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260 }} style={{ gridColumn: 'span 3', padding: 30, borderRadius: 24, border: '1px solid rgba(142,134,242,0.26)', background: 'linear-gradient(135deg,rgba(107,99,216,0.22),rgba(107,99,216,0.06))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.22em', color: '#A99FFF' }}>STEP 04</div>
                <div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400, fontSize: 19, color: '#F4F2FC', margin: '0 0 10px' }}>You see results.</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.62, color: '#BCB7D8', margin: 0 }}>Content goes live. Reports delivered. Visibility increases. Verified connections turned into measurable impact.</p>
                </div>
              </motion.div>

            </div>
          </FadeIn>
          <FadeUp delay={0.2} style={{ marginTop: 36 }}>
            <Link href="/contact"><motion.span className="btn-primary" whileHover={{ scale: 1.04 }} style={{ display: 'inline-block', fontSize: 15, padding: '14px 30px', borderRadius: 13 }}>Contact us →</motion.span></Link>
          </FadeUp>
        </section>

        {/* ── MISSION + STATS ── */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) 0' }}>
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
          <section style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(140px,16vh,200px) clamp(20px,5vw,48px) clamp(140px,16vh,200px)' }}>
            <motion.div whileHover={{ scale: 1.005 }} style={{ position: 'relative', overflow: 'hidden', borderRadius: 30, border: '1px solid rgba(142,134,242,0.26)', padding: 'clamp(48px,7vw,90px) clamp(28px,5vw,64px)', textAlign: 'center', background: 'rgba(12,10,28,0.85)' }}>
              {/* glow orb — purple left */}
              <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', left: '-8%', top: '-30%', background: 'radial-gradient(circle, rgba(107,99,216,0.45) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
              {/* glow orb — cyan center-top */}
              <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', left: '50%', top: '-40%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(80,195,255,0.3) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />
              {/* glow orb — pink right */}
              <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', right: '-6%', bottom: '-30%', background: 'radial-gradient(circle, rgba(201,111,232,0.38) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(44px)' }} />
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

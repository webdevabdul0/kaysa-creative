'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/collaborations', label: 'Collaborations' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const path = usePathname();
  const isActive = (href: string) => href === '/' ? path === '/' : path.startsWith(href);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [path]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating pill nav ── */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed', top: 18, left: 0, right: 0,
          zIndex: 100, display: 'flex', justifyContent: 'center',
          padding: '0 clamp(16px,4vw,48px)',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          pointerEvents: 'all',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 8, padding: '8px 10px 8px 16px',
          width: '100%', maxWidth: 1240, borderRadius: 20,
          border: '1px solid rgba(142,134,242,0.18)',
          background: 'rgba(7,7,12,0.45)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(142,134,242,0.08)',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginRight: 8 }}>
            <Image
              src="/assets/kaysa-logo.webp" alt="Kaysa" width={28} height={28}
              style={{ display: 'block', filter: 'drop-shadow(0 0 10px rgba(107,99,216,0.7))' }}
            />
            <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.12em', color: '#F3F1FB' }}>
              KAYSA<span style={{ color: '#8E86F2' }}> CREATIVE</span>
            </span>
          </Link>

          {/* Divider — desktop only */}
          <div className="nav-links-desktop" style={{ width: 1, height: 20, background: 'rgba(142,134,242,0.18)', flex: 'none', alignItems: 'unset' }} />

          {/* Links — desktop */}
          <div className="nav-links-desktop" style={{ gap: 2, flex: 1 }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{ textDecoration: 'none' }}>
                <span className="nav-btn" style={{
                  position: 'relative', display: 'block',
                  color: isActive(href) ? '#FFFFFF' : undefined,
                }}>
                  {label}
                  {isActive(href) && (
                    <motion.span
                      layoutId="float-dot"
                      style={{
                        position: 'absolute', left: '50%', bottom: 2,
                        transform: 'translateX(-50%)',
                        width: 4, height: 4, borderRadius: '50%',
                        background: '#8E86F2', boxShadow: '0 0 6px #6B63D8',
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA — desktop */}
          <div className="nav-links-desktop" style={{ flex: 'none' }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <motion.span
              className="btn-primary"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(107,99,216,0.65)' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block', fontSize: 13.5, padding: '9px 18px', borderRadius: 10 }}
            >
              Let&apos;s Talk
            </motion.span>
          </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 10px', color: '#F3F1FB',
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <AnimatePresence initial={false} mode="wait">
                {menuOpen ? (
                  <motion.g key="x" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <line x1="2" y1="2" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </motion.g>
                ) : (
                  <motion.g key="burger" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="0" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="nav-mobile-menu open"
            style={{ zIndex: 98 }}
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.28 }}
              >
                <Link
                  href={href}
                  className={`nav-mobile-link${isActive(href) ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 + 0.04, duration: 0.28 }}
              style={{ marginTop: 16 }}
            >
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <span className="btn-primary" style={{ display: 'inline-block', fontSize: 16, padding: '14px 36px', borderRadius: 14 }}>
                  Let&apos;s Talk
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

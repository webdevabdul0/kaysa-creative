'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/collaborations', label: 'Collaborations' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const path = usePathname();
  const isActive = (href: string) => href === '/' ? path === '/' : path.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(7,7,12,0.65)',
        borderBottom: '1px solid rgba(142,134,242,0.10)',
      }}
    >
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        padding: '0 clamp(20px,5vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 400 }}>
            <Image
              src="/assets/kaysa-logo.webp" alt="Kaysa" width={38} height={38}
              style={{ display: 'block', filter: 'drop-shadow(0 0 16px rgba(107,99,216,0.7))' }}
            />
          </motion.div>
          <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '0.14em', color: '#F3F1FB' }}>
            KAYSA<span style={{ color: '#8E86F2' }}> CREATIVE</span>
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(({ href, label }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            >
              <Link href={href} style={{ position: 'relative', display: 'block', textDecoration: 'none' }}>
                <motion.span
                  className="nav-btn"
                  whileHover={{ color: '#FFFFFF' }}
                  style={{ display: 'block', position: 'relative' }}
                >
                  {label}
                  {isActive(href) && (
                    <motion.span
                      layoutId="nav-dot"
                      style={{
                        position: 'absolute', left: '50%', bottom: 2,
                        transform: 'translateX(-50%)',
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#8E86F2', boxShadow: '0 0 8px #6B63D8',
                      }}
                    />
                  )}
                </motion.span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(107,99,216,0.65)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block', marginLeft: 14,
                  fontSize: 14.5, padding: '11px 22px', borderRadius: 11,
                }}
              >
                Let&apos;s Talk
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

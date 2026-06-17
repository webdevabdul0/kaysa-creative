import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaysa Creative — Augmenting Your Reputation',
  description: 'Connecting verified crypto projects with influencers who make a genuine impact in Web3.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden', background: '#07070C' }}>
          {/* Ambient background */}
          <div style={{
            position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
            background: `
              radial-gradient(60% 50% at 78% -5%, rgba(107,99,216,0.22), transparent 70%),
              radial-gradient(50% 40% at 5% 12%, rgba(89,73,200,0.16), transparent 70%),
              radial-gradient(60% 60% at 50% 110%, rgba(107,99,216,0.12), transparent 70%),
              #07070C`
          }} />
          <div style={{
            position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.5,
            backgroundImage: `linear-gradient(to right, rgba(142,134,242,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(142,134,242,0.05) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(75% 75% at 50% 30%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(75% 75% at 50% 30%, #000 30%, transparent 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

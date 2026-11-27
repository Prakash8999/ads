import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import About from './pages/About'

const TOOL_CATEGORIES = [
  {
    id: 'image',
    icon: '🖼️',
    title: 'Image Tools',
    desc: 'Resize, compress, crop, convert, watermark, and enhance photos entirely in your browser — no uploads, no waiting.',
    tools: ['Image Resizer', 'Image Compressor', 'Image Cropper', 'Format Converter', 'Rotate & Flip', 'Filters & Effects', 'Watermark & Text', 'Draw & Annotate'],
  },
  {
    id: 'pdf',
    icon: '📄',
    title: 'PDF & Documents',
    desc: 'Merge, split, convert, sign, and reorganize PDF pages directly in your browser using PDF.js — zero server uploads.',
    tools: ['PDF Merge', 'PDF Split', 'PDF Sign', 'PDF Viewer', 'PDF Organizer', 'Images to PDF', 'PDF to Images', 'PDF Watermark'],
  },
  {
    id: 'qr',
    icon: '📲',
    title: 'QR & Barcode',
    desc: 'Generate styled QR codes with custom logos and colors, create barcodes in multiple formats, and scan QR codes instantly.',
    tools: ['QR Code Generator', 'Barcode Generator', 'QR Scanner'],
  },
  {
    id: 'color',
    icon: '🎨',
    title: 'Color Tools',
    desc: 'Pick colors from any image, extract full palettes, build gradients, and convert between HEX, RGB, HSL, and more.',
    tools: ['Color Picker', 'Palette Extractor', 'Gradient Maker', 'Color Converter', 'Color Shades'],
  },
  {
    id: 'text',
    icon: '✏️',
    title: 'Text Suite',
    desc: 'Word counter, diff checker, case converter, text-to-speech, fancy font generator, and line sorter — all offline.',
    tools: ['Word Counter', 'Case Changer', 'Text Diff', 'Fancy Fonts', 'Line Sorter', 'Number to Words'],
  },
  {
    id: 'calc',
    icon: '🧮',
    title: 'Calculators',
    desc: 'Unit converter, EMI calculator, GST calculator, percentage calculator, age & date difference — precise and instant.',
    tools: ['Unit Converter', 'EMI Calculator', 'GST Calculator', 'Percentage Calculator', 'Date Calculator', 'BMI Calculator'],
  },
  {
    id: 'utility',
    icon: '🛠️',
    title: 'Everyday Utilities',
    desc: 'Stopwatch, screen ruler, decibel meter, random coin/dice picker, and a fullscreen screen-light — always handy.',
    tools: ['Stopwatch', 'Screen Ruler', 'Decibel Meter', 'Random Picker', 'Notepad', 'Daily Checklist'],
  },
  {
    id: 'privacy',
    icon: '🔒',
    title: 'Privacy & Diagnostics',
    desc: 'Password generator, encrypted notes using AES-256, file hash checksum verifier, and a gamepad tester — all local.',
    tools: ['Password Generator', 'Password Strength', 'Encrypted Notes', 'File Hash Checksum', 'Gamepad Tester'],
  },
]

const FAQS = [
  {
    q: 'Are my files safe? Do you upload anything?',
    a: 'Zero uploads. All tools process your files entirely inside your browser using HTML5 Canvas, the Web Crypto API, and PDF.js. Nothing ever leaves your device.',
  },
  {
    q: 'Is Substriq Tools free?',
    a: 'Yes, all 63 tools are completely free. The site is ad-supported on tools.substriq.com to keep the service running.',
  },
  {
    q: 'What browsers are supported?',
    a: 'Any modern browser — Chrome, Firefox, Edge, Safari — on Windows, macOS, Linux, Android, and iOS.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account required. Open any tool and start working immediately.',
  },
  {
    q: 'Can I use the tools offline?',
    a: 'Most tools work offline once the page has loaded, since all processing is client-side. Some tools that call browser APIs (like speech synthesis) may require a network connection for voice data.',
  },
]

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">Substriq</span>
          <h1 className="hero-title">Fast, private web tools<br />that work anywhere</h1>
          <p className="hero-subtitle">
            63 free, browser-based utilities for image editing, PDF manipulation, QR codes,
            calculators, text processing, and hardware diagnostics — with zero server uploads.
          </p>
          <div className="hero-actions">
            <a
              href="https://tools.substriq.com"
              className="cta-button"
              rel="noopener noreferrer"
            >
              Launch Tools →
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="tools">
        <div className="container">
          <h2 className="section-title">63 Tools Across 8 Categories</h2>
          <p className="section-desc">
            Every tool runs 100% locally in your browser. No sign-up, no ads on this page, no data collection.
          </p>
          <div className="category-grid">
            {TOOL_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`https://tools.substriq.com/#${cat.id}`}
                className="category-card"
                rel="noopener noreferrer"
              >
                <div className="cat-icon">{cat.icon}</div>
                <h3 className="cat-title">{cat.title}</h3>
                <p className="cat-desc">{cat.desc}</p>
                <ul className="cat-tools">
                  {cat.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy pitch */}
      <section className="section section-alt" id="privacy">
        <div className="container narrow">
          <h2 className="section-title">Built around your privacy</h2>
          <p className="section-desc">
            Substriq Tools was built on a single principle: your files are yours.
            Every operation — resizing an image, merging a PDF, generating a password — happens
            inside your browser tab using standard web APIs. Our servers never see your data.
          </p>
          <div className="trust-grid">
            <div className="trust-item"><span>🔐</span><strong>AES-256 encryption</strong> for encrypted notes</div>
            <div className="trust-item"><span>🌐</span><strong>Web Crypto API</strong> for hash checksums</div>
            <div className="trust-item"><span>📦</span><strong>PDF.js</strong> for all PDF processing</div>
            <div className="trust-item"><span>🖼️</span><strong>HTML5 Canvas</strong> for all image operations</div>
            <div className="trust-item"><span>🚫</span><strong>Zero file uploads</strong> to any server</div>
            <div className="trust-item"><span>✅</span><strong>No account</strong> required, ever</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container narrow">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3 className="faq-q">{faq.q}</h3>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt" id="start">
        <div className="container narrow center">
          <h2 className="section-title">Start using Substriq Tools now</h2>
          <p className="section-desc">Free. Private. No sign-up. Works on any device.</p>
          <a href="https://tools.substriq.com" className="cta-button" rel="noopener noreferrer">
            Open Substriq Tools →
          </a>
        </div>
      </section>
    </>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">Substriq</Link>
          <nav className="nav">
            <a href="/#tools">Tools</a>
            <a href="/#privacy">Privacy</a>
            <a href="/#faq">FAQ</a>
            <Link to="/about">About</Link>
            <a href="https://tools.substriq.com" className="nav-cta" rel="noopener noreferrer">
              Launch App →
            </a>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo">Substriq</span>
            <p>Fast, private web tools that work anywhere.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <strong>Product</strong>
              <a href="https://tools.substriq.com" rel="noopener noreferrer">Substriq Tools</a>
              <a href="https://tools.substriq.com/#image" rel="noopener noreferrer">Image Tools</a>
              <a href="https://tools.substriq.com/#pdf" rel="noopener noreferrer">PDF Tools</a>
              <a href="https://tools.substriq.com/#qr" rel="noopener noreferrer">QR & Barcode</a>
            </div>
            <div className="footer-col">
              <strong>Company</strong>
              <Link to="/about">About</Link>
              <a href="mailto:prakashjha123yt@gmail.com">prakashjha123yt@gmail.com</a>
            </div>
            <div className="footer-col">
              <strong>Legal</strong>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>© {new Date().getFullYear()} Substriq. All rights reserved.</span>
            <span>Runs 100% locally in your browser. Zero server file uploads.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

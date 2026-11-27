export default function About() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <h1>About Substriq</h1>

        <p>
          Substriq is an indie software project built around one idea:{' '}
          <strong>your files should never leave your device.</strong>
        </p>
        <p>
          We noticed that most free online tools — image resizers, PDF mergers, QR generators —
          upload your files to remote servers, process them there, and then delete them (hopefully).
          That's a trust exercise most people don't realise they're taking.
        </p>
        <p>
          Substriq Tools flips the model. Every one of our 63 utilities processes data entirely
          inside your browser tab using standard browser APIs: HTML5 Canvas for image operations,
          PDF.js for PDF manipulation, the Web Crypto API for encryption and checksums, and the Web
          Audio API for sound-based tools. Nothing is ever sent to a server.
        </p>

        <h2>What we built</h2>
        <ul>
          <li>
            <strong>Image Tools</strong> — resize, compress, crop, convert, filter, watermark, and
            annotate photos.
          </li>
          <li>
            <strong>PDF & Documents</strong> — merge, split, sign, organise, and convert PDFs.
          </li>
          <li>
            <strong>QR & Barcode</strong> — generate styled QR codes with logos and scan QR codes
            in real time.
          </li>
          <li>
            <strong>Color Tools</strong> — pick colors from images, extract palettes, build
            gradients, convert formats.
          </li>
          <li>
            <strong>Text Suite</strong> — word counter, diff checker, case changer, fancy fonts,
            and more.
          </li>
          <li>
            <strong>Calculators</strong> — EMI, GST, BMI, unit converter, percentage, date
            difference.
          </li>
          <li>
            <strong>Everyday Utilities</strong> — stopwatch, screen ruler, decibel meter, random
            picker, notepad.
          </li>
          <li>
            <strong>Privacy & Diagnostics</strong> — password generator, AES-256 encrypted notes,
            file hash checksum, gamepad tester.
          </li>
        </ul>

        <h2>How it stays free</h2>
        <p>
          Substriq Tools is ad-supported. We display Google AdSense ads on{' '}
          <a href="https://tools.substriq.com" rel="noopener noreferrer">
            tools.substriq.com
          </a>{' '}
          to keep the service free for everyone. We'll never charge for access, require sign-up, or
          sell your data — because we don't collect any.
        </p>

        <h2>Contact</h2>
        <p>
          Have feedback, found a bug, or want to suggest a new tool? We'd love to hear from you.{' '}
          <a href="/contact">Get in touch →</a>
        </p>
      </div>
    </section>
  )
}

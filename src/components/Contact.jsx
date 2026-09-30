import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p>
            I&apos;d love to hear what you&apos;re working on. Send a note and let&apos;s start a conversation.
          </p>
        </div>
        <a className="contact-button" href="mailto:your.email@example.com">
          <span>Send me an email</span>
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
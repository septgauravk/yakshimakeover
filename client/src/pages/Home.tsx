import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    number: "01",
    name: "Signature bridal makeup",
    description:
      "A complete wedding-day look built around your face, outfit and jewellery: skin preparation, long-wear base, eyes, lips, blush, hair styling and saree or lehenga draping. Designed for photographs, rituals and a full day of movement without feeling heavy.",
    detail: "Skin prep · Makeup · Hair · Draping",
    category: "bridal",
    price: "₹15,000",
    was: "₹18,000",
    discount: "17% off",
  },
  {
    number: "02",
    name: "HD bridal makeup",
    description:
      "A refined HD finish for brides who want extra coverage with a light, camera-friendly appearance. The service includes complexion correction, detailed eye makeup, lip design, soft contouring, hairstyle, extensions where required and final draping for the ceremony.",
    detail: "HD base · Hair · Draping",
    category: "bridal",
    price: "₹18,000",
    was: "₹22,000",
    discount: "18% off",
  },
  {
    number: "03",
    name: "Engagement / reception look",
    description:
      "A polished event look with luminous skin, defined eyes and a hairstyle that works with your outfit and venue lighting. Ideal for engagement, cocktail, reception or roka celebrations when you want more detail than party makeup but less than a full bridal build.",
    detail: "Makeup · Hair · Finish",
    category: "party",
    price: "₹12,500",
    was: "₹15,000",
    discount: "17% off",
  },
  {
    number: "04",
    name: "Party / guest makeup",
    description:
      "A tailored celebration look for family, bridesmaids, guests and festive portraits. Choose a soft glam, defined eye or richer evening finish; the service covers skin prep, makeup, lashes and a simple hair finish that stays comfortable through the event.",
    detail: "Makeup · Lashes · Simple hair",
    category: "party",
    price: "₹6,500",
    was: "₹8,000",
    discount: "19% off",
  },
  {
    number: "05",
    name: "Hair styling",
    description:
      "Event-ready hair designed to hold through your schedule, whether you want soft waves, a structured bun, braid details or a jewellery-friendly updo. Hair padding, basic pins and finishing are included; extensions and elaborate accessories are quoted separately.",
    detail: "Waves · Bun · Braids · Finish",
    category: "regular",
    price: "₹2,500",
    was: "₹3,500",
    discount: "29% off",
  },
  {
    number: "06",
    name: "Draping & dupatta setting",
    description:
      "Precise saree, lehenga dupatta or bridal veil draping to finish the look cleanly and securely. Yakshi works with your outfit, jewellery and movement so pleats, pins and the pallu photograph well and remain comfortable during rituals and celebrations.",
    detail: "Saree · Dupatta · Veil setting",
    category: "regular",
    price: "₹1,200",
    was: "₹1,500",
    discount: "20% off",
  },
  {
    number: "07",
    name: "Occasion nails",
    description:
      "A neat, celebration-ready nail service for brides, bridesmaids and guests. Select a clean nude, classic red, chrome accent or minimal bridal detail based on your outfit. Final design, length and product choice are confirmed before the appointment.",
    detail: "Classic · Minimal · Occasion",
    category: "regular",
    price: "₹1,200",
    was: "₹1,500",
    discount: "20% off",
  },
  {
    number: "08",
    name: "Lashes & eye detailing",
    description:
      "A focused add-on for clients who already have their base planned or want to elevate an existing makeup look. Includes lash selection, placement and eye detailing matched to your eye shape, outfit and the level of definition you prefer.",
    detail: "Lashes · Liner · Eye detail",
    category: "regular",
    price: "₹600",
    was: "₹800",
    discount: "25% off",
  },
  {
    number: "09",
    name: "Bridal makeup trial",
    description:
      "A planning appointment to test complexion, eye direction, lip colour and hair mood before the wedding. Bring reference images, jewellery or outfit details where possible; the trial helps finalise the look and identify any timing or comfort adjustments ahead of the date.",
    detail: "Look planning · Makeup trial",
    category: "bridal",
    price: "₹2,500",
    was: "₹3,000",
    discount: "17% off",
  },
];

const looks = [
  {
    src: "/manus-storage/yakshi-look-1_25163255.jpg",
    label: "The heirloom bride",
    note: "Wine · Gold · Kundan",
  },
  {
    src: "/manus-storage/yakshi-look-2_8e4041e8.jpg",
    label: "The soft-focus edit",
    note: "Champagne · Rose · Mehndi",
  },
];

const gallery = [
  { src: "/manus-storage/yakshi-hero_259e3028.jpg", label: "Bridal glow", note: "Wine · Gold · Kundan" },
  { src: "/manus-storage/yakshi-look-1_25163255.jpg", label: "Classic heirloom", note: "Soft smoke · Red lip" },
  { src: "/manus-storage/yakshi-look-2_8e4041e8.jpg", label: "Engagement edit", note: "Champagne · Rose" },
  { src: "/manus-storage/yakshi-hero_259e3028.jpg", label: "The finishing touch", note: "Draping · Detail" },
];

const testimonials = [
  { quote: "The whole morning felt calm and unhurried. My makeup still looked like me in every photograph, which was exactly what I wanted.", name: "Bride, Ghaziabad", occasion: "Bridal booking" },
  { quote: "Yakshi understood my outfit immediately and made the eye look feel special without making it too dramatic. I felt comfortable from the first step.", name: "Client note", occasion: "Engagement look" },
  { quote: "The home service made a big difference on an already busy family day. Hair, draping and makeup all felt beautifully coordinated.", name: "Family booking", occasion: "Event makeup" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serviceFilter, setServiceFilter] = useState("all");
  const whatsappBase = "https://wa.me/918810576989";
  const filteredServices = serviceFilter === "all" ? services : services.filter((service) => service.category === serviceFilter);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi Bride-to-be,\n\nThank you for your enquiry. Please share the below details to check availability and get bridal package details:\n\nDate of Function: ${String(form.get("date") || "")}\nReady Time: ${String(form.get("time") || "")}\nOccasion: ${String(form.get("eventType") || "")}\nLocation/Venue: ${String(form.get("venue") || "")}\nNo. of Makeups Required: ${String(form.get("guests") || "")}\n\nName: ${String(form.get("name") || "")}\nWhatsApp Number: ${String(form.get("phone") || "")}\nService / Package Interest: ${String(form.get("service") || "")}\nMessage: ${String(form.get("note") || "") || "Please share the suitable package details."}\n\nOur team will connect with you shortly.`;
    toast.success("Your enquiry is ready to send.", {
      description: "Opening WhatsApp with a professional prewritten message.",
    });
    window.location.href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="site-shell">
      <section className="hero-section" id="top">
        <div className="hero-texture" />
        <div className="utility-bar container">
          <p>Freelance makeup artist · Ghaziabad &amp; open to travel</p>
          <a href="https://wa.me/918810576989" target="_blank" rel="noreferrer">
            WhatsApp +91 88105 76989 <MessageCircle size={14} />
          </a>
        </div>
        <nav className="main-nav container" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Yakshi Makeover home">
            <span className="wordmark-mark">✦</span>
            <span className="wordmark-copy">
              <strong>Yakshi</strong>
              <em>Makeover</em>
            </span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button type="button" onClick={() => scrollTo("services")}>Services</button>
            <button type="button" onClick={() => scrollTo("looks")}>The lookbook</button>
            <button type="button" onClick={() => scrollTo("approach")}>Our approach</button>
            <button type="button" className="nav-book-mobile" onClick={() => scrollTo("book")}>Book a date</button>
          </div>
          <button className="nav-cta" type="button" onClick={() => scrollTo("book")}>
            Book a date <ArrowUpRight size={16} />
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Beauty, thoughtfully done</div>
            <h1>Look like <em>yourself.</em><br />Only <span>more</span> luminous.</h1>
            <p className="hero-intro">Bridal, engagement and party makeup brought to your home in Ghaziabad—and wherever your story takes you.</p>
            <div className="hero-actions">
              <button className="button button-light" type="button" onClick={() => scrollTo("book")}>Enquire for your date <ArrowUpRight size={17} /></button>
              <button className="play-link" type="button" onClick={() => scrollTo("looks")}><span className="play-icon"><Play size={12} fill="currentColor" /></span> See the lookbook</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>Y</span><span>✦</span><span>∞</span></div>
              <div><strong>1,432</strong><span>beauty lovers on Instagram</span></div>
            </div>
          </div>
          <div className="hero-visual-wrap">
            <div className="hero-visual">
              <img src="/manus-storage/yakshi-hero_259e3028.jpg" alt="South Asian bride in wine and gold bridal makeup" />
              <div className="hero-image-caption"><span>01</span><span>Yakshi bridal edit</span><span>↗</span></div>
            </div>
            <div className="hero-stamp"><span>crafted</span><strong>with<br />intention</strong><span>since 2023</span></div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <div className="marquee-band" aria-label="Services offered">
        <div className="marquee-track"><span>BRIDAL</span><i>✦</i><span>ENGAGEMENT</span><i>✦</i><span>PARTY</span><i>✦</i><span>NAILS</span><i>✦</i><span>AT YOUR HOME</span><i>✦</i><span>BRIDAL</span><i>✦</i><span>ENGAGEMENT</span><i>✦</i><span>PARTY</span><i>✦</i></div>
      </div>

      <section className="intro-section container" id="approach">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>The Yakshi way</span></div>
        <div className="intro-grid">
          <h2>Not a transformation.<br /><em>A quiet elevation.</em></h2>
          <div className="intro-body"><p>Makeup should feel like a beautiful exhale. Yakshi creates looks that honour your features, your outfit and the energy of the occasion—then brings the whole ritual to you.</p><a href="https://www.instagram.com/yakshi_makeover/" target="_blank" rel="noreferrer" className="text-link">Meet us on Instagram <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="principles"><div><span>01</span><strong>Skin, first</strong><p>Fresh, considered prep for a finish that looks like skin—not a mask.</p></div><div><span>02</span><strong>Made for you</strong><p>Your face, your features, your comfort. No copy-paste bridal formulas.</p></div><div><span>03</span><strong>Where you are</strong><p>At-home beauty for Ghaziabad, with travel available for your celebration.</p></div></div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker light-kicker"><span>02</span><span className="kicker-line" /><span>Services</span></div><h2>Your occasion,<br /><em>beautifully edited.</em></h2></div><p>Filter the menu by the kind of booking you have in mind. Every rate is a sample starting point; WhatsApp for a precise quote.</p></div>
          <div className="service-filters" role="group" aria-label="Filter services by category">{[{ id: "all", label: "All services" }, { id: "bridal", label: "Bridal" }, { id: "party", label: "Party & events" }, { id: "regular", label: "Regular makeup" }].map((filter) => <button key={filter.id} type="button" className={serviceFilter === filter.id ? "is-active" : ""} onClick={() => setServiceFilter(filter.id)}>{filter.label}</button>)}</div>
          <div className="service-list">{filteredServices.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><img className="service-thumb" src={service.category === "bridal" ? "/manus-storage/yakshi-hero_259e3028.jpg" : service.category === "party" ? "/manus-storage/yakshi-look-2_8e4041e8.jpg" : "/manus-storage/yakshi-look-1_25163255.jpg"} alt={`${service.name} makeup reference`} /><div className="service-name-wrap"><h3>{service.name}</h3><span className="service-detail">{service.detail}</span></div><p>{service.description}</p><div className="service-price"><span className="service-was">{service.was}</span><strong>{service.price}</strong><em>{service.discount}</em><small>starting price</small></div><button type="button" aria-label={`Enquire about ${service.name}`} onClick={() => scrollTo("book")}><ArrowUpRight size={20} /></button></article>)}</div>
          <div className="service-footnote"><Sparkles size={16} /> Sample starting rates shown for planning. Final quote depends on look complexity, travel, extensions and event timing.</div>
        </div>
      </section>

      <section className="lookbook-section" id="looks">
        <div className="lookbook-top container"><div><div className="section-kicker"><span>03</span><span className="kicker-line" /><span>The lookbook</span></div><h2>A little <em>moodboard</em><br />for your next chapter.</h2></div><a className="circle-arrow" href="https://www.instagram.com/yakshi_makeover/" target="_blank" rel="noreferrer" aria-label="Open Instagram"><Instagram size={21} /></a></div>
        <div className="lookbook-grid container">
          {looks.map((look, index) => <figure className={`look-card look-${index + 1}`} key={look.src}><img src={look.src} alt={look.label} /><figcaption><div><strong>{look.label}</strong><span>{look.note}</span></div><span className="look-arrow">↗</span></figcaption></figure>)}
          <div className="lookbook-note"><span className="quote-mark">“</span><p>The best makeup is the kind that lets you be fully in the moment.</p><span className="quote-credit">— Yakshi</span></div>
        </div>
      </section>

      <section className="portfolio-section container" id="portfolio">
        <div className="portfolio-heading"><div><div className="section-kicker"><span>04</span><span className="kicker-line" /><span>From Instagram</span></div><h2>Real looks,<br /><em>real moments.</em></h2></div><a className="text-link" href="https://www.instagram.com/yakshi_makeover/" target="_blank" rel="noreferrer">View the full portfolio <Instagram size={16} /></a></div>
        <div className="portfolio-grid">{gallery.map((item, index) => <a className={`portfolio-tile portfolio-tile-${index + 1}`} href="https://www.instagram.com/yakshi_makeover/" target="_blank" rel="noreferrer" key={`${item.label}-${index}`}><img src={item.src} alt={`${item.label} portfolio look`} /><span className="portfolio-overlay"><strong>{item.label}</strong><small>{item.note}</small></span></a>)}</div>
      </section>

      <section className="testimonials-section">
        <div className="container"><div className="testimonials-heading"><div><div className="section-kicker"><span>05</span><span className="kicker-line" /><span>Client notes</span></div><h2>Felt like <em>me.</em></h2></div><p>Thoughtful beauty is personal. These sample client notes capture the calm, considered experience Yakshi aims to create at every appointment.</p></div><div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.quote}><div className="stars" aria-label="5 stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><blockquote>“{testimonial.quote}”</blockquote><div className="testimonial-byline"><strong>{testimonial.name}</strong><span>{testimonial.occasion}</span></div></article>)}</div></div>
      </section>

      <section className="ritual-section container">
        <div className="ritual-card"><div className="ritual-number">04</div><div className="ritual-copy"><div className="section-kicker"><span>04</span><span className="kicker-line" /><span>The ritual</span></div><h2>Your home.<br /><em>Your moment.</em></h2><p>No crowded salon, no rushing between appointments. Yakshi comes to your space with a calm kit, a clear plan and the small details that make a beauty morning feel special.</p><button className="button button-dark" type="button" onClick={() => scrollTo("book")}>Bring the ritual home <ArrowUpRight size={17} /></button></div><div className="ritual-aside"><div className="aside-icon"><MapPin size={18} /></div><strong>At your home</strong><span>Ghaziabad &amp; open to travel</span><div className="aside-rule" /><div className="aside-icon"><Clock3 size={18} /></div><strong>By appointment</strong><span>Dates held with a booking enquiry</span></div></div>
      </section>

      <section className="booking-section" id="book">
        <div className="booking-glow" />
        <div className="container booking-grid"><div className="booking-copy"><div className="section-kicker light-kicker"><span>05</span><span className="kicker-line" /><span>Enquire</span></div><h2>Let’s make your<br /><em>date beautiful.</em></h2><p>Share the details below and WhatsApp will open with Yakshi Makeover’s bride-enquiry format, ready to send.</p><div className="booking-contact"><a href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle size={17} /> +91 88105 76989 <ArrowUpRight size={14} /></a><span><MapPin size={17} /> Ghaziabad · open to travel</span></div></div><div className="booking-form-card">{submitted ? <div className="form-success"><div className="success-icon"><Check size={22} /></div><span className="eyebrow dark-eyebrow">Enquiry received</span><h3>We’ll be in touch soon.</h3><p>Your bride-enquiry details are ready for WhatsApp. If it did not open automatically, use the button below.</p><a className="button button-dark" href={whatsappBase} target="_blank" rel="noreferrer">Open WhatsApp <MessageCircle size={17} /></a><button className="reset-link" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><div className="form-heading"><span>Bridal availability enquiry</span><span>Required fields marked *</span></div><div className="form-row"><label>Name *<input required name="name" placeholder="e.g. Aanya Sharma" /></label><label>WhatsApp number *<input required name="phone" type="tel" placeholder="+91 98765 43210" /></label></div><div className="form-row"><label>Occasion *<select required name="eventType" defaultValue=""><option value="" disabled>Select one</option><option>Wedding / bridal</option><option>Engagement / reception</option><option>Party / family event</option><option>Photoshoot</option><option>Regular makeup</option></select></label><label>Service / package *<select required name="service" defaultValue=""><option value="" disabled>Select one</option><option>Signature bridal makeup</option><option>HD bridal makeup</option><option>Engagement / reception look</option><option>Party / guest makeup</option><option>Hair styling</option><option>Draping &amp; dupatta setting</option><option>Occasion nails</option><option>Lashes &amp; eye detailing</option><option>Bridal makeup trial</option></select></label></div><div className="form-row"><label>Date of function *<input required name="date" type="date" /></label><label>Ready time *<input required name="time" type="time" /></label></div><div className="form-row"><label>Location / venue *<input required name="venue" placeholder="Area, venue or full address" /></label><label>No. of makeups required *<select required name="guests" defaultValue=""><option value="" disabled>Select one</option><option>1 makeup</option><option>2–3 makeups</option><option>4–6 makeups</option><option>7+ makeups</option></select></label></div><label>Message *<textarea required name="note" rows={3} placeholder="Tell us your look, outfit, venue timing, travel needs or anything else we should know…" /></label><button className="button button-dark form-submit" type="submit">Continue to WhatsApp <MessageCircle size={17} /></button><p className="form-note"><MessageCircle size={13} /> Your details will be added to Yakshi’s bride-enquiry message.</p></form>}</div></div>
      </section>

      <a className="floating-whatsapp" href={`${whatsappBase}?text=${encodeURIComponent("Hi Bride-to-be,\n\nThank you for your enquiry. Please share the below details to check availability and get bridal package details:\n\nDate of Function:\nReady Time:\nOccasion:\nLocation/Venue:\nNo. of Makeups Required:\n\nOur team will connect with you shortly.")}`} target="_blank" rel="noreferrer" aria-label="Book quickly on WhatsApp"><MessageCircle size={23} /><span>Book on WhatsApp</span></a>

      <footer className="site-footer"><div className="container footer-main"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">✦</span><span className="wordmark-copy"><strong>Yakshi</strong><em>Makeover</em></span></a><p>Beauty that feels like you,<br />only more luminous.</p><div className="footer-links"><a href={whatsappBase} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.instagram.com/yakshi_makeover/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="https://www.youtube.com/@yakshipal4167" target="_blank" rel="noreferrer"><Youtube size={15} /> YouTube</a></div></div><div className="container footer-bottom"><span>© 2026 Yakshi Makeover</span><span>+91 88105 76989</span><a href="#top">Back to top <ChevronDown size={14} className="up-chevron" /></a></div></footer>
    </main>
  );
}

import Image from "next/image";
import { Catalogue } from "./catalogue";
import { productCategories } from "@/data/products";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
  /\D/g,
  "",
);

const generalMessage = encodeURIComponent(
  "Hello UN Cakes & Decor! I would like to enquire about your products.",
);

const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${generalMessage}`
  : "#contact";

export default function Home() {
  return (
    <main>
      <div className="announcement">
        A little joy, made for your special moments{" "}
        <span aria-hidden="true">✳</span> Raipur, Chhattisgarh
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="UN Cakes and Decor home">
          <span className="brand-monogram">UN</span>
          <span className="brand-name">
            UN CAKES <span>&</span> DECOR
            <small>CAKES · GIFTS · CELEBRATIONS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#catalogue">Shop</a>
          <a href="#about">Our story</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-order"
          href={whatsappHref}
          target={whatsappNumber ? "_blank" : undefined}
          rel="noreferrer"
        >
          Ask us on WhatsApp ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> MADE FOR YOUR MOMENTS
          </p>

          <h1>
            Sweet moments.
            <br />
            <em>Lovely</em> memories.
          </h1>

          <p className="hero-description">
            From celebration cakes to thoughtful hampers and baking essentials,
            find something special for every occasion.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#catalogue">
              Explore the shop <span>↗</span>
            </a>
            <a className="text-link" href="#contact">
              Get in touch <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>
              <strong>Made with care in Raipur</strong>
              <small>Cakes · Gifts · Baking essentials</small>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            <Image
              src="/images/home-banner.jpg"
              alt="Beautiful cakes and celebration treats from UN Cakes & Decor"
              fill
              priority
              sizes="(max-width: 700px) 90vw, 50vw"
              className="hero-photo"
            />
          </div>

          <div className="image-stamp">
            <span>MADE WITH</span>
            <strong>♡</strong>
            <span>LOVE</span>
          </div>

          <div className="hero-caption">
            <span>CELEBRATE BEAUTIFULLY</span>
            <span>UN Cakes & Decor</span>
          </div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Shop highlights">
        <div>
          <span>✳</span> Made for celebrations
        </div>
        <div>
          <span>♡</span> Thoughtful gifting
        </div>
        <div>
          <span>⌖</span> Serving Raipur
        </div>
        <div>
          <span>✿</span> Here for your next bake
        </div>
      </section>

      <section className="section collections" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p>
            <h2>
              Find your <em>kind of happy.</em>
            </h2>
          </div>
          <p className="section-intro">
            Whether you’re celebrating someone or creating something lovely,
            start with a collection.
          </p>
        </div>

        <div className="category-grid">
          {productCategories.map((category, index) => {
            const categoryContent = [
              {
                image: "/images/category-cakes.jpg",
                description: "Celebrate life's little milestones.",
              },
              {
                image: "/images/category-hampers.jpg",
                description: "Thoughtful gifts, beautifully packed.",
              },
              {
                image: "/images/category-boxes.jpg",
                description: "The perfect finishing touch.",
              },
            ];

            const content = categoryContent[index];

            return (
              <a className="category-card" href="#catalogue" key={category.id}>
                <div className="category-image category-art">
                  {content && (
                    <Image
                      src={content.image}
                      alt={category.label}
                      fill
                      sizes="(max-width: 700px) 45vw, 30vw"
                      className="category-photo"
                    />
                  )}

                  <span className="category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="category-arrow">↗</span>
                </div>

                <div className="category-copy">
                  <h3>{category.label}</h3>
                  <p>
                    {content?.description ??
                      "Find something special for your next celebration."}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="featured-section" id="catalogue">
        <div className="section featured-inner">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE UN CAKES & DECOR COLLECTION</p>
              <h2>
                Little things, <em>big feelings.</em>
              </h2>
            </div>
            <p className="section-intro">
              Browse what’s available and message us to confirm your order.
            </p>
          </div>
          <Catalogue />
        </div>
      </section>

      <section className="custom-section">
        <div className="custom-image">
          <Image
            src="/images/cake-custom.jpg"
            alt="Thoughtfully arranged gifts and celebration hampers"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="custom-photo"
          />
        </div>

        <div className="custom-copy">
          <p className="eyebrow">YOUR IDEA, OUR NEXT CREATION</p>
          <h2>
            Have something <em>special in mind?</em>
          </h2>
          <p>
            Planning a birthday, anniversary or festival surprise? Tell us what
            you have in mind and we’ll help you find something lovely.
          </p>
          <a
            className="button button-light"
            href={whatsappHref}
            target={whatsappNumber ? "_blank" : undefined}
            rel="noreferrer"
          >
            Discuss your order <span>↗</span>
          </a>
          <small>
            Availability and order details are confirmed directly with the shop.
          </small>
        </div>
      </section>

      <section className="location-section" id="about">
        <div className="location-mark">UN</div>
        <p className="eyebrow">A LOCAL SHOP, A LOT OF LOVE</p>
        <h2>
          Made for your <em>Raipur moments.</em>
        </h2>
        <p>
          Visit UN Cakes & Decor at Bhatagaon Chowk, Raipur, or get in touch to
          discuss your next celebration.
        </p>
        <div className="location-actions">
          <a
            className="button button-dark"
            href="https://maps.app.goo.gl/BbixKAiftgfbWNuK7"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <span>↗</span>
          </a>
          <a
            className="text-link"
            href="https://www.instagram.com/uncake_21/"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram ↗
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-monogram">UN</span>
              <span className="brand-name">
                UN CAKES <span>&</span> DECOR
                <small>CAKES · GIFTS · CELEBRATIONS</small>
              </span>
            </a>
            <p className="footer-tagline">
              Sweet moments, lovely memories.
              <br />
              Made with love in Raipur.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#catalogue">Shop all products</a>
            <a href="#collections">Collections</a>
            <a href="#about">Our story</a>
          </div>

          <div className="footer-column">
            <h3>Visit & connect</h3>
            <p>
              Bhatagaon Chowk,
              <br />
              Raipur, Chhattisgarh
            </p>
            <a
              href="https://www.instagram.com/uncake_21/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://maps.app.goo.gl/BbixKAiftgfbWNuK7"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps ↗
            </a>
          </div>

          <div className="footer-column">
            <h3>Say hello</h3>
            <p>Questions about a product or order?</p>
            <a
              href={whatsappHref}
              target={whatsappNumber ? "_blank" : undefined}
              rel="noreferrer"
            >
              {whatsappNumber
                ? "Message us on WhatsApp ↗"
                : "WhatsApp contact coming soon"}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 UN Cakes & Decor</span>
          <span>Made for moments that matter ♡</span>
        </div>
      </footer>

      {whatsappNumber && (
        <a
          className="floating-whatsapp"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with UN Cakes and Decor on WhatsApp"
        >
          <span aria-hidden="true">☏</span>
          <span>Chat with us</span>
        </a>
      )}
    </main>
  );
}

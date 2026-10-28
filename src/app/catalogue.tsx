"use client";

import { useState } from "react";
import Image from "next/image";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/data/products";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
  /\D/g,
  "",
);

function orderLink(product: (typeof products)[number]) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  const productUrl =
    product.url || (siteUrl ? `${siteUrl}/#${product.id}` : "");

  const price =
    product.price > 0
      ? `₹${product.price.toLocaleString("en-IN")}`
      : "Price to be confirmed";

  const message = [
    `Hello UN Cakes & Decor! I would like to order: ${product.name}`,
    `Price: ${price}`,
    productUrl ? `Product link: ${productUrl}` : "",
    "Please confirm availability.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function Catalogue() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all",
  );
  const visibleProducts = products.filter(
    (product) =>
      activeCategory === "all" || product.category === activeCategory,
  );

  return (
    <>
      <div
        className="category-filters"
        aria-label="Filter products by category"
      >
        <button
          className={
            activeCategory === "all" ? "filter-chip active" : "filter-chip"
          }
          onClick={() => setActiveCategory("all")}
          aria-pressed={activeCategory === "all"}
        >
          All products
        </button>
        {productCategories.map((category) => (
          <button
            key={category.id}
            className={
              activeCategory === category.id
                ? "filter-chip active"
                : "filter-chip"
            }
            onClick={() => setActiveCategory(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" id={product.id} key={product.id}>
            <div className="product-image">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 440px) 90vw, (max-width: 700px) 44vw, 30vw"
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              ) : null}
              <div className="image-placeholder" aria-hidden="true">
                <span>UN</span>
                <small>Photo coming soon</small>
              </div>
            </div>
            <div className="product-info">
              <div>
                <p className="product-category">
                  {
                    productCategories.find(
                      (category) => category.id === product.category,
                    )?.label
                  }
                </p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">
                  {product.price > 0
                    ? `₹${product.price.toLocaleString("en-IN")}`
                    : "Price on request"}
                </p>
              </div>
              {whatsappNumber ? (
                <a
                  className="button button-dark order-button"
                  href={orderLink(product)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="whatsapp-missing">
                  WhatsApp ordering is being set up.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      {!whatsappNumber && (
        <p className="availability-note">
          Add NEXT_PUBLIC_WHATSAPP_NUMBER to your environment to enable WhatsApp
          ordering.
        </p>
      )}
    </>
  );
}

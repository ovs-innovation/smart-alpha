"use client";

import Image from "next/image";

/** Landscape-first order so tiles read cleanly when cropped to 3:2 */
const galleryImages = [
  { src: "/p2.jpeg", alt: "Smart Alpha workshop session" },
  { src: "/p5.jpeg", alt: "Community financial education" },
  { src: "/p6.jpeg", alt: "Classroom workshop" },
  { src: "/p3.jpeg", alt: "Conference honour moment" },
  { src: "/p1.jpeg", alt: "Smart Alpha team gathering" },
  { src: "/p7.png", alt: "Award moment with Smart Alpha" },
] as const;

export function AboutGallery() {
  return (
    <section className="border-t border-border bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[960px] px-5 sm:px-8 lg:px-10">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
          Gallery
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold text-foreground sm:text-[1.85rem]">
          Moments from the journey
        </h2>

        {/*
          Padding-bottom aspect lock + CSS grid.
          Do NOT wrap tiles in motion/Reveal — that breaks equal row heights.
        */}
        <div
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          style={{ alignItems: "stretch" }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-xl border border-border bg-[#f4f7f4]"
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "66.666%",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

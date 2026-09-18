"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from "@/components/icons";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { HERO_SLIDES } from "@/lib/site";

const INTERVAL_MS = 3000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const labelId = useId();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);

    const syncVisibility = () => setTabHidden(document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      media.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  const goTo = useCallback((next: number) => {
    const total = HERO_SLIDES.length;
    setIndex(((next % total) + total) % total);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => {
        const total = HERO_SLIDES.length;
        return (current + delta + total) % total;
      });
    },
    [],
  );

  const autoplay = !userPaused && !reduceMotion && !tabHidden;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => go(1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, go, index]);

  const current = HERO_SLIDES[index];

  return (
    <section
      aria-roledescription="carrusel"
      aria-labelledby={labelId}
      className="border-b border-line"
    >
      <div className="grid min-h-[calc(100svh-7.5rem)] w-full lg:grid-cols-[minmax(21rem,0.43fr)_1fr]">
        <div className="relative order-1 h-[50vh] w-full min-w-0 overflow-hidden bg-violet-deep lg:order-2 lg:h-auto lg:min-h-full">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={i === index ? slide.alt : ""}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={`object-cover ${
                  i === index && !reduceMotion ? "hero-slide-image" : ""
                }`}
                style={{
                  animationPlayState: autoplay ? "running" : "paused",
                }}
              />
            </div>
          ))}
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-violet-deep/80 to-transparent px-4 pb-4 pt-10 text-xs tracking-wide text-white lg:px-6 lg:pb-6">
            {current.alt}
          </p>
        </div>

        <div className="order-2 flex w-full min-w-0 flex-col justify-end bg-paper px-4 py-12 sm:px-6 sm:py-16 lg:order-1 lg:px-10 lg:py-16 xl:px-14 xl:py-20">
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              key={current.src}
              className={reduceMotion ? "" : "hero-copy-enter"}
              aria-live="polite"
              aria-atomic="true"
            >
              <h1
                id={labelId}
                className="max-w-[13ch] font-display text-[2.15rem] font-medium leading-[1.12] tracking-[-0.035em] text-ink sm:text-5xl"
              >
                {current.title}
              </h1>
              <p className="mt-6 max-w-[38ch] text-[1.0625rem] leading-relaxed text-ink/75">
                {current.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <WhatsAppCta />
              <Link
                href="/servicios"
                className="text-sm font-medium text-violet underline decoration-violet/30 underline-offset-4 transition-colors hover:text-violet-deep hover:decoration-violet-deep"
              >
                Conocer los servicios
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 text-ink">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-paper-2"
                aria-label="Diapositiva anterior"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setUserPaused((value) => !value)}
                disabled={reduceMotion}
                className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-paper-2 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={
                  reduceMotion
                    ? "Reproducción automática desactivada por preferencia de movimiento reducido"
                    : userPaused
                      ? "Reanudar carrusel"
                      : "Pausar carrusel"
                }
              >
                {userPaused ? (
                  <PlayIcon className="h-3.5 w-3.5" />
                ) : (
                  <PauseIcon className="h-3.5 w-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-paper-2"
                aria-label="Diapositiva siguiente"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
              <p
                className="ml-2 text-sm tabular-nums tracking-wide text-ink/60"
                aria-live="polite"
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(HERO_SLIDES.length).padStart(2, "0")}
              </p>
            </div>

            <div
              className="mt-4 flex gap-2"
              role="group"
              aria-label="Seleccionar diapositiva"
            >
              {HERO_SLIDES.map((slide, slideIndex) => {
                const active = slideIndex === index;

                return (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => goTo(slideIndex)}
                    className="relative h-11 flex-1"
                    aria-label={`Ir a la diapositiva ${slideIndex + 1}: ${slide.title}`}
                    aria-current={active ? "true" : undefined}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden bg-ink/15"
                    >
                      {active ? (
                        <span
                          key={`${index}-${autoplay}`}
                          className={`absolute inset-y-0 left-0 bg-violet ${
                            reduceMotion || !autoplay ? "w-full" : "hero-progress"
                          }`}
                          style={{
                            animationDuration: `${INTERVAL_MS}ms`,
                            animationPlayState: autoplay ? "running" : "paused",
                          }}
                        />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

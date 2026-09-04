"use client";

import { useEffect, useRef, useState } from "react";

import CinematicIntro from "@/components/CinematicIntro";
import InvitationEnvelope from "@/components/InvitationEnvelope";
import BabyArrival from "@/components/BabyArrival";
import ParentsSection from "@/components/ParentsSection";
import SistersSection from "@/components/SistersSection";
import FamilyStory from "@/components/FamilyStory";
import InvitationCard from "@/components/InvitationCard";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import Gallery from "@/components/Gallery";
import FloatingFlowers from "@/components/FloatingFlowers";
import FloralBackground from "@/components/FloralBackground";
import Butterflies from "@/components/Butterflies";
import Footer from "@/components/Footer";

/* ============================================================
   BARSE STORY CHAPTERS
   ============================================================ */

const chapters = [
  CinematicIntro,
  InvitationEnvelope,
  BabyArrival,
  ParentsSection,
  SistersSection,
  FamilyStory,
  InvitationCard,
  Countdown,
  EventDetails,
  LocationSection,
  Gallery,
  Footer,
];

/* ============================================================
   CHAPTER TIMINGS
   ============================================================ */

/*
  Cinematic timing for each section.

  Intro             → 6 sec
  Invitation        → 7 sec
  Baby Arrival      → 8 sec
  Parents           → 7 sec
  Sisters           → 7 sec
  Family Story      → 9 sec
  Invitation Card   → 8 sec
  Countdown         → 6 sec
  Event Details     → 6 sec
  Location          → 7 sec
  Gallery           → 10 sec
  Footer            → 6 sec
*/

const getChapterDuration = (chapterComponent) => {
  if (chapterComponent === CinematicIntro) {
    return 6000;
  }

  if (chapterComponent === InvitationEnvelope) {
    return 7000;
  }

  if (chapterComponent === BabyArrival) {
    return 8000;
  }

  if (chapterComponent === ParentsSection) {
    return 7000;
  }

  if (chapterComponent === SistersSection) {
    return 7000;
  }

  if (chapterComponent === FamilyStory) {
    return 9000;
  }

  if (chapterComponent === InvitationCard) {
    return 8000;
  }

  if (chapterComponent === Countdown) {
    return 6000;
  }

  if (chapterComponent === EventDetails) {
    return 6000;
  }

  if (chapterComponent === LocationSection) {
    return 7000;
  }

  if (chapterComponent === Gallery) {
    return 10000;
  }

  if (chapterComponent === Footer) {
    return 6000;
  }

  return 7000;
};

/* ============================================================
   MAIN PAGE
   ============================================================ */

export default function Home() {
  const [chapter, setChapter] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const chapterContainerRef = useRef(null);

  /* ============================================================
     SAFETY CHECK
     ============================================================ */

  useEffect(() => {
    if (
      chapter < 0 ||
      chapter >= chapters.length
    ) {
      setChapter(0);
      setTransitioning(false);
    }
  }, [chapter]);

  /* ============================================================
     AUTOMATIC CHAPTER TRANSITION
     ============================================================ */

  useEffect(() => {
    /*
      Stop automatically on final chapter.
    */

    if (chapter >= chapters.length - 1) {
      return;
    }

    const activeChapter = chapters[chapter];

    const duration =
      getChapterDuration(activeChapter);

    /*
      Wait for the chapter duration.
    */

    const timer = window.setTimeout(() => {
      /*
        Start exit animation.
      */

      setTransitioning(true);

      /*
        Give the exit animation time
        to complete.
      */

      window.setTimeout(() => {
        setChapter((current) => current + 1);
        setTransitioning(false);
      }, 700);
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [chapter]);

  /* ============================================================
     RESET SCROLL WHEN CHAPTER CHANGES
     ============================================================ */

  useEffect(() => {
    const container =
      chapterContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [chapter]);

  /* ============================================================
     AUTO SCROLL
     ============================================================ */

  useEffect(() => {
    const container =
      chapterContainerRef.current;

    if (!container) {
      return;
    }

    let cancelled = false;
    let frameId = null;
    let delayId = null;
    let startTime;

    /* ----------------------------------------------------------
       STOP AUTO SCROLL
       ---------------------------------------------------------- */

    const stopAutoScroll = () => {
      cancelled = true;

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    /* ----------------------------------------------------------
       START AUTO SCROLL
       ---------------------------------------------------------- */

    const startAutoScroll = () => {
      if (cancelled) {
        return;
      }

      const maxScroll =
        container.scrollHeight -
        container.clientHeight;

      /*
        If content fits completely on screen,
        there is nothing to scroll.
      */

      if (maxScroll <= 0) {
        return;
      }

      /*
        The chapter should finish scrolling
        slightly before the chapter changes.

        Example:

        6 sec chapter
        → approximately 4.5 sec scrolling

        8 sec chapter
        → approximately 6.5 sec scrolling

        10 sec chapter
        → approximately 8.5 sec scrolling
      */

      const chapterDuration =
        getChapterDuration(
          chapters[chapter]
        );

      const scrollDurationMs =
        Math.max(
          3500,
          chapterDuration - 1500
        );

      const animate = (timestamp) => {
        if (cancelled) {
          return;
        }

        if (startTime === undefined) {
          startTime = timestamp;
        }

        const elapsed =
          timestamp - startTime;

        const progress = Math.min(
          elapsed / scrollDurationMs,
          1
        );

        /*
          Smooth ease-in-out.
        */

        const easedProgress =
          progress < 0.5
            ? 2 * progress * progress
            : 1 -
              Math.pow(
                -2 * progress + 2,
                2
              ) /
                2;

        container.scrollTop =
          maxScroll * easedProgress;

        if (progress < 1) {
          frameId =
            window.requestAnimationFrame(
              animate
            );
        }
      };

      frameId =
        window.requestAnimationFrame(
          animate
        );
    };

    /*
      Wait for the chapter entrance
      animation before measuring.
    */

    delayId = window.setTimeout(
      startAutoScroll,
      1000
    );

    /* ----------------------------------------------------------
       MANUAL MOUSE SCROLL
       ---------------------------------------------------------- */

    container.addEventListener(
      "wheel",
      stopAutoScroll,
      {
        once: true,
        passive: true,
      }
    );

    /* ----------------------------------------------------------
       MANUAL TOUCH SCROLL
       ---------------------------------------------------------- */

    container.addEventListener(
      "touchstart",
      stopAutoScroll,
      {
        once: true,
        passive: true,
      }
    );

    /* ----------------------------------------------------------
       CLEANUP
       ---------------------------------------------------------- */

    return () => {
      if (delayId !== null) {
        window.clearTimeout(
          delayId
        );
      }

      if (frameId !== null) {
        window.cancelAnimationFrame(
          frameId
        );
      }

      container.removeEventListener(
        "wheel",
        stopAutoScroll
      );

      container.removeEventListener(
        "touchstart",
        stopAutoScroll
      );

      stopAutoScroll();
    };
  }, [chapter]);

  /* ============================================================
     CURRENT CHAPTER
     ============================================================ */

  const CurrentChapter =
    chapters[chapter] ||
    CinematicIntro;

  const isFinalChapter =
    chapter === chapters.length - 1;

  /* ============================================================
     MAIN PAGE
     ============================================================ */

  return (
    <main
      className="
        relative
        h-[100svh]
        w-full
        overflow-hidden
        bg-[#fffdf8]
        text-[#5b3d4a]
      "
    >

      {/* ======================================================
          BACKGROUND
          ====================================================== */}

      <FloralBackground />

      {/* ======================================================
          FLOATING FLOWERS
          ====================================================== */}

      <FloatingFlowers />

      {/* ======================================================
          BUTTERFLIES
          ====================================================== */}

      <Butterflies />

      {/* ======================================================
          CURRENT CHAPTER
          ====================================================== */}

      <div
        ref={chapterContainerRef}
        key={chapter}
        className={`
          relative
          z-10
          h-[100svh]
          w-full

          overflow-x-hidden
          overflow-y-auto

          overscroll-contain

          transition-all
          duration-700

          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            transitioning
              ? `
                translate-x-8
                scale-[0.98]
                opacity-0
                blur-sm
              `
              : `
                translate-x-0
                scale-100
                opacity-100
                blur-0
              `
          }
        `}
      >

        <CurrentChapter />

      </div>

      {/* ======================================================
          STORY PROGRESS
          ====================================================== */}

      <div
        className="
          pointer-events-none

          fixed
          bottom-4
          left-1/2

          z-50

          -translate-x-1/2
        "
      >

        <div
          className="
            flex
            max-w-[90vw]

            items-center
            gap-1.5

            overflow-hidden

            rounded-full

            border
            border-[#d8bf8b]/40

            bg-white/70

            px-3
            py-2

            shadow-lg

            backdrop-blur-xl
          "
        >

          {chapters.map(
            (_, index) => (
              <span
                key={index}
                className={`
                  block
                  shrink-0
                  rounded-full

                  transition-all
                  duration-500

                  ${
                    index === chapter
                      ? `
                        h-1.5
                        w-5
                        bg-[#c9785f]
                      `
                      : index < chapter
                      ? `
                        h-1.5
                        w-1.5
                        bg-[#c9785f]/50
                      `
                      : `
                        h-1.5
                        w-1.5
                        bg-[#d8bf8b]/50
                      `
                  }
                `}
              />
            )
          )}

        </div>

      </div>

      {/* ======================================================
          READ AGAIN
          ====================================================== */}

      {isFinalChapter && (
        <div
          className="
            fixed

            bottom-20
            left-1/2

            z-50

            -translate-x-1/2
          "
        >

          <button
            type="button"
            onClick={() => {
              setTransitioning(false);

              setChapter(0);

              /*
                Scroll the chapter container
                back to the beginning.
              */

              requestAnimationFrame(() => {
                chapterContainerRef.current?.scrollTo(
                  {
                    top: 0,
                    behavior: "auto",
                  }
                );
              });
            }}
            className="
              pointer-events-auto

              whitespace-nowrap

              rounded-full

              border
              border-[#d8bf8b]/60

              bg-white/90

              px-5
              py-2.5

              text-xs
              font-semibold

              tracking-[0.15em]

              text-[#c9785f]

              shadow-lg

              backdrop-blur

              transition
              duration-300

              hover:scale-105

              active:scale-95
            "
          >
            पुन्हा पहा ✨
          </button>

        </div>
      )}

    </main>
  );
}
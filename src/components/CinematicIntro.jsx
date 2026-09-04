"use client";

import { useRef, useState } from "react";

export default function CinematicIntro() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const openInvitation = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/barse-music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play invitation music.", error);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff3e9] px-6">
      <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#f7cdbb]/50 blur-3xl" />

      <div className="absolute right-[-100px] bottom-[-100px] h-80 w-80 rounded-full bg-[#e6def7]/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="float-slow mb-8 text-5xl">🪷</div>

        <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#9b6c57]">
          श्री गणेशाय नमः
        </p>

        <p className="font-hand text-xl text-[#9b6c57] md:text-2xl">
          एका नव्या आनंदाची
        </p>

        <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-[#5b3d4a] md:text-8xl">
          सुरुवात...
        </h1>

        <div className="mx-auto my-8 h-px w-28 bg-[#d8bf8b]" />

        <p className="mx-auto max-w-2xl text-lg leading-9 text-[#6f5a60] md:text-2xl">
          एका चिमुकल्या जीवाच्या आगमनाने
          <br />
          आमचे संपूर्ण जग प्रेमाने भरून गेले आहे. 👶
        </p>

        <p className="mt-8 text-lg font-bold text-[#c9785f]">
          मिलन & रिया काते
        </p>

        <p className="mt-2 text-sm text-[#7b686e]">
          ओवी • विश्वा • आणि परिवार
        </p>

        <button
          type="button"
          onClick={openInvitation}
          className="mt-10 rounded-full bg-[#c9785f] px-9 py-4 font-bold text-white shadow-xl shadow-[#c9785f]/20 transition hover:-translate-y-1 hover:bg-[#b96750]"
        >
          {isPlaying ? "संगीत सुरू आहे 🎵" : "आमंत्रण उघडा 💌"}
        </button>

        <p className="mt-5 text-xs text-[#9b8187]">
          खाली स्क्रोल करून आनंदाचा हा प्रवास पहा
        </p>
      </div>
    </section>
  );
}
"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

const themeAudioMap = {
  default: "/soundtrack/thachu.mp3",
  ironman: "/soundtrack/ironman.mp3",
  batman: "/soundtrack/batman.mp3",
  drdoom: "/soundtrack/drdoom.mp3",
  spiderman: "/soundtrack/spiderman.mp3",
} as const;

type Theme = keyof typeof themeAudioMap;

const ThemeAudio = () => {
  const { theme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteraction, setHasInteraction] = useState(false);
  const [notification, setNotification] = useState<string>("");

  const source = useMemo(() => themeAudioMap[theme as Theme] || themeAudioMap.default, [theme]);
  const songName = useMemo(() => {
    if (theme === "default") return "Thachu";
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  }, [theme]);

  const playAudio = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setNotification(`${songName} is playing`);
      window.setTimeout(() => setNotification(""), 3500);
    } catch (error) {
      setIsPlaying(false);
      console.debug("ThemeAudio: playback blocked or not allowed yet", error);
    }
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    setNotification("");
  };

  useEffect(() => {
    const handleFirstInteraction = () => setHasInteraction(true);
    document.addEventListener("click", handleFirstInteraction, { once: true, capture: true });
    return () => {
      document.removeEventListener("click", handleFirstInteraction, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = source;
    audioRef.current.load();
    if (hasInteraction) {
      playAudio();
    }
  }, [source, hasInteraction]);

  useEffect(() => {
    if (!audioRef.current) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audioRef.current.addEventListener("play", onPlay);
    audioRef.current.addEventListener("pause", onPause);
    return () => {
      audioRef.current?.removeEventListener("play", onPlay);
      audioRef.current?.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const attemptPlay = async () => {
      await playAudio();
    };
    attemptPlay();
  }, [source]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" autoPlay />
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in duration-500">
          <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600/90 to-blue-600/90 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-md border border-white/20">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <span className="font-medium">{notification}</span>
            <button
              onClick={() => setNotification("")}
              className="ml-2 flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
              aria-label="Close notification"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-black/70 px-3 py-2 text-xs text-white shadow-2xl backdrop-blur-sm sm:text-sm">
        <button
          type="button"
          onClick={() => (isPlaying ? pauseAudio() : playAudio())}
          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 transition hover:bg-white/20"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <span className="whitespace-nowrap">
          {theme === "default" ? "Theme music" : `${theme.charAt(0).toUpperCase() + theme.slice(1)} theme`}
        </span>
      </div>
    </>
  );
};

export default ThemeAudio;

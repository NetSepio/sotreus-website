'use client';

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './VideoFacade.module.css';

/**
 * Click-to-load YouTube player. Until the visitor presses play the page makes no request to
 * YouTube: the poster is self-hosted, and the player loads from youtube-nocookie.com only after
 * the click. With JavaScript off the poster is a plain link to the video on YouTube.
 */
export default function VideoFacade({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster: StaticImageData;
}) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  if (playing) {
    return (
      <div className={styles.frame}>
        <iframe
          ref={frameRef}
          className={styles.player}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <a
      className={styles.frame}
      href={`https://youtu.be/${id}`}
      aria-label={`Play video: ${title}`}
      onClick={(e) => {
        // Let modified clicks open YouTube in a new tab or window as usual.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        setPlaying(true);
      }}
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="(min-width: 1280px) 1200px, calc(100vw - 32px)"
        className={styles.poster}
      />
      <span className={styles.play} aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
          <path d="M6 3.8v14.4c0 .8.9 1.3 1.6.9l11.5-7.2c.6-.4.6-1.3 0-1.7L7.6 2.9C6.9 2.5 6 3 6 3.8Z" />
        </svg>
      </span>
    </a>
  );
}

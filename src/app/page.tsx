'use client'
import { useState, useEffect, useRef } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import Menus from './components/Menus'
import Singularity from './components/Singularity'
import Operation from './components/Operation'
import Benefits from './components/Benefits'
import Results from './components/Results'
import Plans from './components/Plans'
import Faqs from './components/Faqs'
import Adaptation from './components/Adaptation'
import Footer from './components/Footer'

export default function App() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;
          const videoIndex = videoRefs.current.indexOf(video);
          if (entry.isIntersecting) {
            if (videoRefs.current[videoIndex]) {
              videoRefs.current[videoIndex].play();
              if (!isPlaying) {
                setIsPlaying(true);
              }
            }
          } else {
            if (videoRefs.current[videoIndex]) {
              videoRefs.current[videoIndex].pause();
            }
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    videoRefs.current.forEach((video, videoIndex) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video, videoIndex) => {
        if (video && video.isConnected) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <Home videoRefs={videoRefs} />
        <Menus videoRefs={videoRefs} />
        <Singularity />
        <Operation videoRefs={videoRefs} />
        <Benefits />
        <Results />
        <Plans />
        <Faqs />
        <Adaptation />
      </main >
      <Footer />
    </div >
  )
}

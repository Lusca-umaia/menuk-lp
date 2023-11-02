import { useState, useRef, useEffect, Fragment } from "react"

import Image from "next/image";

import Video from "./video/Video";

const mediaItems = [
  { type: 'image', url: '/lb/0001.jpg' },
  { type: 'image', url: '/lb/0002.jpg' },
  {
    type: 'video',
    url: "https://storage.googleapis.com/menuk-us/lb-rdonluiz.mp4",
    title: "Expresso Mustache - R$ 34",
    subtitle: "O drink assinado pelo Mustache leva vodka, licor de doce de leite Don Luiz e café expresso! Uma uma ótima opção para acompanhar uma entrada ou sobremesa",
    preload: "auto",
    order: 0,
  },
  { type: 'image', url: '/lb/0003.jpg', order: 0, },
  { type: 'image', url: '/lb/0004.jpg', order: 1, },
  {
    type: 'video',
    url: "https://storage.googleapis.com/menuk-us/lb-involtini.mp4",
    title: "Involtini al Quattro Formaggi - R$ 42",
    subtitle: "A combinação dos quatro queijos que todo mundo ama! Mozzarella, catupiry, provolone e gorgonzola, enrolados pela nossa massa de pizza de longa fermentação, importasse diretamente da Itália",
    preload: "auto",
    order: 1,
  },
  { type: 'image', url: '/lb/0005.jpg', order: 3, },
  {
    type: 'video',
    url: "https://storage.googleapis.com/menuk-us/lb-r357.mp4",
    title: "Gnocchi alla Sorrentina - R$ 69",
    subtitle: "Gnocchi artesanal com molho de tomate italiano, queijos mozzarella e parmesão, folhas de manjericão, servido em uma cesta de massa de pizza que leva só 4 ingredientes: água, sal, farinha importada da Itália e fermento biológico.",
    preload: "auto",
    order: 2,
  },
  { type: 'image', url: '/lb/0006.jpg', order: 4 },
  { type: 'image', url: '/lb/0007.jpg', order: 5 },
  { type: 'image', url: '/lb/0009.jpg', order: 6 },
  { type: 'image', url: '/lb/0010.jpg', order: 7 },
  {
    type: 'video',
    url: "https://storage.googleapis.com/menuk-us/lb-calzone-smores.mp4",
    title: "Calzone S'mores - R$ 55",
    subtitle: "Nutella e marshmallow envolto pela nossa tradicional massa de pizza de longa fermentação, em formato de calzone, que é assado no forno e finalizada com chocolate ao leite Lindt",
    preload: "auto",
    order: 3,
  },
  { type: 'image', url: '/lb/0011.jpg', order: 8 },
  { type: 'image', url: '/lb/0012.jpg', order: 9 },
  { type: 'image', url: '/lb/0013.jpg', order: 10 },
  { type: 'image', url: '/lb/0014.jpg', order: 11 },
]

const videos_url = mediaItems.filter((media) => media.type === 'video');

export default function ExamplePdf() {
  // const [videoProgress, setVideoProgress] = useState(Array(videos_url.length).fill(0));
  const [videoLiked, setVideoLiked] = useState(Array(videos_url.length).fill(false));
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

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
                setShowButton(false)
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

    const handleTimeUpdate = (index: number) => () => {
      const video = videoRefs.current[index];
      const progress = (video.currentTime / video.duration) * 100;

    };


    videoRefs.current.forEach((video, videoIndex) => {
      if (video) {
        video.addEventListener('waiting', handleWaiting);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('timeupdate', handleTimeUpdate(videoIndex));
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video, videoIndex) => {
        if (video && video.isConnected) {
          observer.unobserve(video);
          video.removeEventListener('timeupdate', handleTimeUpdate(videoIndex));
          video.removeEventListener('waiting', handleWaiting);
          video.removeEventListener('canplay', handleCanPlay);
        }
      });
    };
  }, []);

  return (
    <div className='w-full flex flex-col max-h-screen overflow-auto'>
      <div className='w-full max-w-full overflow-y-auto grid scrollStyleSecondary place-items-center gap-y-1'>
        {mediaItems.map((media, index) => (
          <Fragment key={index}>
            {media.type === 'image' && (
              <Image src={media.url}
                alt="Vercel Logo"
                className='w-full'
                width={500}
                priority={index === 0}
                height={500} />
            )}
            {media.type === 'video' && (
              <Video
                videoRefs={videoRefs}
                videoLiked={videoLiked}
                setVideoLiked={setVideoLiked}
                videos_url={videos_url}
                isLoading={isLoading}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setShowButton={setShowButton}
                showButton={showButton}
                indexVideo={media.order}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
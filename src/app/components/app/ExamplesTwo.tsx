'use client'
import { useState, useEffect, useRef, Fragment } from 'react'

import Link from 'next/link'

import Image from "next/image"

import Nav from './components/Nav'
import Card from './components/Card'
import CardFavorites from './components/CardFavorites'
import Video from '../video/Video'

const mediaItems = [
  {
    type: 'card',
    title: 'Cardápio Almoço',
    products: [
      {
        title: 'Bulgogi Vegano + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/523786c0-aebf-11ec-b99f-5504017ee26a.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "cogumelos, mini pimentões e cebola roxa tostados e pimenta gochujang... ",
        price: '49,00'
      },
      {
        title: 'Frango Empanado com Molho de Queijos + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/5e553b10-18b3-11ed-8c61-b7f633bde1ba.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "Frango empanado (230g) • molho de queijos • house fries",
        price: '49,00'
      },
      {
        title: 'Ragu + Chá Gelado',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      },
      {
        title: 'Ragu + Chá Gelado Com Ervas',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      }
    ]
  },
  {
    type: 'video',
    url: "https://storage.googleapis.com/menuk-us/lb-calzone-smores.mp4",
    title: "Calzone S'mores - R$ 55",
    subtitle: "Nutella e marshmallow envolto pela nossa tradicional massa de pizza de longa fermentação, em formato de calzone, que é assado no forno e finalizada com chocolate ao leite Lindt",
    preload: "auto",
    order: 0,
  },
  {
    type: 'card',
    title: 'Bebidas',
    products: [
      {
        title: 'Bulgogi Vegano + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/523786c0-aebf-11ec-b99f-5504017ee26a.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "cogumelos, mini pimentões e cebola roxa tostados e pimenta gochujang... ",
        price: '49,00'
      },
      {
        title: 'Frango Empanado com Molho de Queijos + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/5e553b10-18b3-11ed-8c61-b7f633bde1ba.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "Frango empanado (230g) • molho de queijos • house fries",
        price: '49,00'
      },
      {
        title: 'Ragu + Chá Gelado',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      },
      {
        title: 'Ragu + Chá Gelado Com Ervas',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      }
    ]
  },
  {
    type: 'card',
    title: 'Drinks',
    products: [
      {
        title: 'Bulgogi Vegano + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/523786c0-aebf-11ec-b99f-5504017ee26a.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "cogumelos, mini pimentões e cebola roxa tostados e pimenta gochujang... ",
        price: '49,00'
      },
      {
        title: 'Frango Empanado com Molho de Queijos + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/5e553b10-18b3-11ed-8c61-b7f633bde1ba.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "Frango empanado (230g) • molho de queijos • house fries",
        price: '49,00'
      },
      {
        title: 'Ragu + Chá Gelado',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      },
      {
        title: 'Ragu + Chá Gelado Com Ervas',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      }
    ]
  },
  {
    type: 'card',
    title: 'Vinhos e espumantes',
    products: [
      {
        title: 'Bulgogi Vegano + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/523786c0-aebf-11ec-b99f-5504017ee26a.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "cogumelos, mini pimentões e cebola roxa tostados e pimenta gochujang... ",
        price: '49,00'
      },
      {
        title: 'Frango Empanado com Molho de Queijos + Chá Gelado',
        href: '#',
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/5e553b10-18b3-11ed-8c61-b7f633bde1ba.jpg&w=80&h=80&output=jpg&dpr=2",
        description: "Frango empanado (230g) • molho de queijos • house fries",
        price: '49,00'
      },
      {
        title: 'Ragu + Chá Gelado',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      },
      {
        title: 'Ragu + Chá Gelado Com Ervas',
        description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
        link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
        href: '#',
        price: '100,00'
      }
    ]
  },
]

const cards = mediaItems.filter(item => item.type == 'card')
const videos_url = mediaItems.filter(item => item.type == 'video')


const navItems = cards.map((item) => item.title)

const favorites = [
  {
    title: 'Bulgogi Vegano + Chá Gelado',
    href: '#',
    link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/523786c0-aebf-11ec-b99f-5504017ee26a.jpg&w=80&h=80&output=jpg&dpr=2",
    description: "cogumelos, mini pimentões e cebola roxa tostados e pimenta gochujang... ",
    price: '49,00'
  },
  {
    title: 'Frango Empanado com Molho de Queijos + Chá Gelado',
    href: '#',
    link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/5e553b10-18b3-11ed-8c61-b7f633bde1ba.jpg&w=80&h=80&output=jpg&dpr=2",
    description: "Frango empanado (230g) • molho de queijos • house fries",
    price: '49,00'
  },
  {
    title: 'Ragu + Chá Gelado',
    description: "ragu de carne • batata baby confit • picles de moranga • farofa de pão • couve",
    link: "https://tagmeimages.azureedge.net/?q=70&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/81b49120-afa2-11ec-827e-bfa70ccd62ce.jpg&w=80&h=80&output=jpg&dpr=2",
    href: '#',
    price: '100,00'
  }
]


export default function Home() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const header = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false);
  console.log(videos_url)
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [videoLiked, setVideoLiked] = useState(Array(videos_url.length).fill(false));
  const [videoProgress, setVideoProgress] = useState(Array(videos_url.length).fill(0));

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
              header.current ? header.current.style.zIndex = '2' : null
              if (!isPlaying) {
                setIsPlaying(true);
                setShowButton(false)
              }
            }
          } else {
            if (videoRefs.current[videoIndex]) {
              videoRefs.current[videoIndex].pause();
              header.current ? header.current.style.opacity = '0' : null
              setTimeout(() => {
                header.current ? header.current.style.zIndex = '20' : null
                header.current ? header.current.style.opacity = '1' : null
              }, 100);

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
        // Verifique se o vídeo existe e ainda está conectado ao DOM antes de tentar desobservá-lo
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
    <section className="max-w-full max-h-screen overflow-auto scrollStyleSecondary">
      <header className="flex gap-4 pt-5 pb-4 items-center bg-white w-full mx-auto px-4">
        <Image
          src={"https://uploads-ssl.webflow.com/630e1cc4ef3ca67693bf0b39/630e1ec70e633309ba330951_AF_ROISTER_PNG-01.png"}
          alt="Logo do site"
          width={100}
          height={100}
          className="h-8 w-auto"
        />
        <div className='flex flex-col'>
          <h1 className="font-bold text-sm">Roister - Rua 24 de outubro</h1>
          <h2 className="font-medium text-xs ext-gray-300">Cantina & Italiano</h2>
        </div>
      </header>
      <Nav
        navItems={navItems}
        ref={header}
      />
      <main className="flex flex-col ">
        <CardFavorites favorites={favorites} />
        {mediaItems && mediaItems.map((item, index) => (
          <Fragment key={item.title}>
            {item.type == "card" ? (
              <Card
                title={item.title}
                products={item.products ? item.products : []}
                idElement={item.title}
              />
            ) : (
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
                indexVideo={item.order}
              />
            )}
          </Fragment>
        ))}
      </main >
    </section >
  )
}
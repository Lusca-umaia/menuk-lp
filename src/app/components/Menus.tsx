const screenshots = [
  {
    title: "PDF",
    src: "/lb-rdonluiz.mp4"
  },
  {
    title: "APP",
    src: "/lb-app.mp4"
  }
]

export default function Menus({ videoRefs }: { videoRefs: any }) {

  return (
    <div className="relative">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div className="pb-14" id='menu'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl mx-auto max-w-7xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cardápios feitos com Menuk
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Possuimos 2 modelos de cardápio
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center max-sm:gap-24 gap-32 max-sm:flex-wrap px-12'>
        {screenshots.map((item, index) => (
          <div className='flex flex-col items-center gap-2' key={item.src}>
            <p className="text-lg font-semibold leading-7 text-gray-900">
              Modelo - {item.title}
            </p>
            <div className="flex relative justify-center items-center">
              <div className={`relative w-full`}>
                <img src="/60917b7bf16c66bc189576bd3101b483 3.png" className="absolute h-full" alt="asdas" />
                <video
                  ref={(element) => {
                    if (element) {
                      videoRefs.current[index + 1] = element;
                    }
                  }}
                  playsInline
                  width={316}
                  loop
                  height={684}
                  className="rounded-[13%] py-2 px-4 max-md:px-3"
                  autoPlay={true}
                  muted
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
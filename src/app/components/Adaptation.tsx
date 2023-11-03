import Image from "next/image"

export default function Adaptation() {
  return (
    <div className="relative isolate bg-white max-sm:px-0 px-6 pb-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-menuk to-primary-menuk opacity-30 sm:left-[calc(50%-45rem)] sm:w-[64.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="overflow-hidden mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Adapte-se ao Consumidor Moderno com Menuk!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              O comportamento do consumidor mudou. A preferência por vídeos superou amplamente as imagens tradicionais. Com o Menuk, você não só atende a essa expectativa, mas a supera, criando uma experiência culinária inovadora e envolvente.
              Seja pioneiro na transformação do setor de restaurantes, destacando-se em meio à concorrência.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-primary-menuk px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-menuk"
              >
                Contratar <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex max-w-full flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image src={"/background-menuk.png"}
                alt="background-menuk"
                width={500}
                height={500}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-menuk to-primary-menuk opacity-30 sm:left-[calc(50%+35rem)] sm:w-[65.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
'use client'
import Image from 'next/image'
import Home from './components/Home'
import Header from './components/Header'
import Singularity from './components/Singularity'
import Plans from './components/Plans'
import Menus from './components/Menus'
import Benefits from './components/Benefits'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <Home />
        <Menus />
        <Singularity />
        <div className="pb-24 sm:pb-32" id='how_it_works'>
          <div className="max-md:flex-col gap-32 justify-center max-md:gap-8 flex items-center mx-auto max-w-7xl max-lg:px-2 px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl max-w-7xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Escaneou,<br />desejou,<br />pediu!
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
                Veja como é simples aumentar suas vendas e melhorar a experiência de seus clientes com nosso cardápio.
              </p>
            </div>
            <video className="max-w-sm w-full h-full rounded-lg shadow-lg" playsInline loop autoPlay={true} muted>
              <source src="https://storage.googleapis.com/menuk-us/lb-involtini.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <Benefits />
        <div className="bg-[#455D7F] mt-32">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Resultados reais de nossos clientes:
              </h2>
              <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                Você está a um passo de revolucionar
                as vendas de seu restaurante!
              </p>
            </div>
            <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">De aumento em vendas</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-[var(--primary-color)]">Até 129%</dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Carregamento da página</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-[var(--primary-color)]">1s</dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">De aumento médio em receita</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-[var(--primary-color)]">60%</dd>
              </div>
            </dl>
          </div>
        </div>

        <Plans />
        <Faqs />

        <div className="relative isolate bg-white max-sm:px-0 px-6 pb-32 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--primary-color)] to-[var(--primary-color)] opacity-30 sm:left-[calc(50%-45rem)] sm:w-[64.1875rem]"
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
                    className="rounded-md bg-[var(--primary-color)] px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-[var(--primary-color)cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                  >
                    Contratar <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex max-w-full flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img src={"/background-menuk.png"}
                    alt=""
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
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--primary-color)] to-[var(--primary-color)] opacity-30 sm:left-[calc(50%+35rem)] sm:w-[65.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main >
      <Footer />
    </div >
  )
}

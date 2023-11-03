import { Fragment } from 'react'

import Image from 'next/image'

const exclusives = [
  {
    title: "Influencie a Escolha dos Pratos",
    description: "Com o Menuk, você tem o controle. Destaque os pratos que deseja vender e influencie os clientes a escolhê-los, aumentando suas vendas."
  },
  {
    title: "Aumento do Ticket Médio",
    description: "Quando os clientes veem os pratos em preparo, eles são incentivados a pedir mais, impulsionando o ticket médio do restaurante."
  },
  {
    title: "Não Preicisa Baixar Aplicativo",
    description: "Não são necessários equipamentos ou programas sofisticados. Com apenas um celular, seu cliente tem acesso à inovação que o Menuk proporciona, sem precisar instalar app."
  },
  {
    title: "Adaptação ao Consumidor Moderno",
    description: "Com o Menuk, você se destaca e incentiva seus clientes a compartilharem a nova experiência, aproveitando o poder do boca a boca."
  },
  {
    title: "Carregamento rápido",
    description: "Sabemos que um cliente faminto não gosta de esperar. Garantimos que nossos vídeos carreguem em milisegundos."
  },
  {
    title: "As pessoas comem com os olhos",
    description: "Com o Menuk, seus pratos não apenas são vistos, são sentidos. Prepare-se para conquistar o coração e o paladar dos seus clientes."
  },
]

export default function Singularity() {
  return (
    <div className="relative pt-14">
      <div className="py-24 sm:py-32">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-menuk to-primary-menuk opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto px-6 lg:px-8" id='functionalities'>
          <div className="text-center">
            <h2 className="text-4xl mx-auto max-w-7xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Além da inovação visual, o que torna nosso cardápio em vídeo único?
            </h2>
            <div className="mt-12">
              {exclusives.map((item, index) => (
                <Fragment key={index}>
                  <div className="lg:mx-auto mb-30 lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className={`mt-12 sm:mt-16 ${index % 2 == 0 ? "lg:col-start-2" : "lg:col-start-1"} lg:mt-0`}>
                      <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                        <Image
                          className="object-cover object-right w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                          style={{ maxWidth: "-webkit-fill-available;" }}
                          src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                          alt="Customer profile user interface"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className={`mx-auto max-w-xl px-4 sm:px-6 ${index % 2 == 0 ? "lg:col-start-1" : "lg:col-start-2"} lg:mx-0 lg:max-w-none lg:py-32 lg:px-0 text-right`}>
                      <div>
                        <div className="mt-6">
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            {item.title}
                          </h2>
                          <p className="mt-4 text-lg text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-46rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-menuk to-primary-menuk opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div >
  )
}
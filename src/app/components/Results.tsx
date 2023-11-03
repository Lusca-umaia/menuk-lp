export default function Results() {
  return (
    <div className="bg-secondary-menuk mt-32">
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
            <dd className="order-1 text-5xl font-bold tracking-tight text-primary-menuk">Até 129%</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Carregamento da página</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-primary-menuk">1s</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">De aumento médio em receita</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-primary-menuk">60%</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
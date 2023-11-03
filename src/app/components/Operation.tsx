export default function Operation({ videoRefs }: { videoRefs: any }) {
  return (
    <div className="relative mb-24 sm:mb-32" id='operation'>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
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
      <div className="max-md:flex-col md:gap-8 lg:gap-32 gap-32 justify-center max-md:gap-8 flex items-center mx-auto max-w-7xl max-lg:px-2 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl max-w-7xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Escaneou,<br />desejou,<br />pediu!
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
            Veja como é simples aumentar suas vendas e melhorar a experiência de seus clientes com nosso cardápio.
          </p>
        </div>
        <video
          ref={(element) => {
            if (element) {
              videoRefs.current[3] = element;
            }
          }}
          className="max-w-sm w-full h-full rounded-lg shadow-lg"
          playsInline
          loop
          autoPlay={true}
          muted>
          <source src="https://storage.googleapis.com/menuk-us/lb-involtini.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
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
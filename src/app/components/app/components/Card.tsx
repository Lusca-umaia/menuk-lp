import Image from "next/image"

interface product {
  title: string,
  id?: number | string,
  description: string,
  price: string,
  link: string,
  type?: string,
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function CardList({ products, title, idElement, example }: { products: product[], title: string, idElement?: string, example?: boolean }) {
  return (
    <div id={idElement} className={`bg-gray-100`}>
      <h2 className={`${example ? "py-5" : "my-5"} pl-4 font-semibold text-sm`}>{title}</h2>
      <div className="grid divide-y divide-gray-200 overflow-hidden grid-cols-1 gap-px shadowAlter">
        {products.map((product, index) => (
          <div
            key={index}
            className={classNames(
              `flex justify-between items-center gap-8 group relative bg-white p-4`,
              example ? "blur-[.1rem]" : ""
            )}
          >
            <div>
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                <span className="absolute inset-0" aria-hidden="true" />
                {product.title}
              </h3>
              <p className="mt-2 text-xs text-black font-light">
                {product.description}
              </p>
              <p className="mt-2 text-xs text-black font-medium	">
                R$ {product.price}
              </p>
            </div>
            <Image src={product.link} width={100} height={100} alt={"Imagem do produto" + product.title} className="w-16 h-16" />
          </div>
        ))}
      </div>
    </div >
  )
}
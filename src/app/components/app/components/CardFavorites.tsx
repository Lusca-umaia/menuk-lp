import { memo } from 'react'
import Link from "next/link"

interface product {
  title: string,
  href: string,
  description: string,
  price: string,
  link: string
}

import Image from 'next/image'

function CardFavorites({ favorites }: { favorites: product[] }) {
  return (
    <div className='shadow-lg bg-white'>
      <h2 className="pl-4 my-5 font-semibold text-base">Produtos mais vendidos</h2>
      <div className="bg-gray-50 flex overflow-auto gap-4 scrollStyle pb-4 px-2">
        {favorites.map((product, index) => (
          <div
            key={product.title}
            className={"flex flex-col justify-between items-start gap-4 group relative bg-white min-w-44 max-w-44 shadow-md"}
          >
            <div className='h-full flex flex-col justify-between items-start gap-2 group w-full'>
              <div className='w-full flex flex-col gap-2'>
                <Image src={product.link} width={200} height={200} alt={"Imagem do produto" + product.title} className="w-auto h-36 object-cover" />
                <h3 className="text-sm font-medium leading-6 text-gray-900 px-2">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {product.title}
                </h3>
              </div>
              <p className="mt-2 text-xs text-black font-medium	px-2 py-2">
                R$ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default CardFavorites
'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Nav = React.forwardRef(({ navItems }: { navItems: string[] }, ref: React.Ref<HTMLDivElement>) => {
  const [buttonSelected, setButtonSelected] = useState(0)

  return (
    <nav className="flex flex-col bg-white top-0 z-10 pt-1.5 shadow-lg ease-linear duration-700 opacity-100" id='header'>
      <section className="flex gap-3.5 min-w-full overflow-auto scroll-remove px-2 pb-2 scrollStyle" id='nav'>
        {navItems.map((item, index) => (
          <button
            key={item}
            type="button"
            id={`button${item}`}
            className={`${index == buttonSelected ?
              "bg-white px-8 py-2 text-xs font-bold text-black w-auto border-black border-2 whitespace-nowrap buttons" :
              "bg-white px-8 py-2 text-xs font-medium text-gray-700 border-2 w-auto whitespace-nowrap buttons"} `}
          >
            {item}
          </button>
        ))}
      </section>
    </nav >
  )
})

Nav.displayName = 'Nav';

export default Nav
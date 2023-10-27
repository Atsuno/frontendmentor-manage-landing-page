'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useDataStore from '@/hooks/useDataStore'

const Article = () => {
  const { article, btnText } = useDataStore()
  const { articleList, header } = article
  const [isSwap, toggleSwap] = useState(articleList[0])

  return (

    <section className="flex flex-col items-center pb-14 md:pb-24 xl:pb-32">
      <h1 className="pb-12 text-4xl font-bold">{header}</h1>
      <div className="carousel w-[375px] gap-5 pt-20 md:carousel-end md:rounded-box md:w-full md:pb-14 ">
        {articleList.map(({ name, image, id, articleText }, index) => (
          <div key={id} id={id} onChange={() => toggleSwap(articleList[index])} aria-hidden="true" className="carousel-item w-full flex-col items-center justify-center gap-5 bg-neutral-four text-center md:w-1/3">
            <div className="w-20">
              <Image className="-mt-10" width={144} height={144} priority src={image} alt={name} />
            </div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="px-8 pb-10 text-neutral-one">{articleText}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2 pb-10 pt-5 md:hidden">
        {articleList.map(({ id }, index) => (
          <Link key={id} href={`#${id}`} onClick={() => toggleSwap(articleList[index])} className={`${isSwap === articleList[index] ? 'bg-primary-one' : ''} radio border-primary-one`} aria-label={id} />
        ))}
      </div>
      <button className="w-fit rounded-full bg-primary-one px-10 py-4 text-sm text-specific shadow-lg shadow-primary-one/40 hover:bg-primary-one/80" type="button">{btnText}</button>
    </section>

  )
}

export default Article

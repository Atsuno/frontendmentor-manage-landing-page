'use client'

import Image from 'next/image'
import useDataStore from '@/hooks/useDataStore'

const HeroSection = () => {
  const { heroSection, btnText } = useDataStore()
  const { alt, header, image, paragrap } = heroSection

  return (
    <section className="flex flex-col-reverse gap-5 px-5 py-10 text-center md:flex-row md:px-10 md:text-left lg:px-20">
      <div className=" flex flex-col items-center md:w-1/2  md:items-start lg:justify-evenly xl:pr-20">
        <h1 className="pb-3 text-4xl font-bold lg:text-5xl xl:text-6xl">{header}</h1>
        <p className="pb-8 text-neutral-one lg:text-xl xl:pr-24">{paragrap}</p>
        <button className="w-fit rounded-full bg-primary-one px-10 py-4 text-sm text-specific shadow-lg shadow-primary-one/40 hover:bg-primary-one/80" type="button">{btnText}</button>
      </div>
      <div className="text-right md:w-1/2">
        <Image className="w-full" width={580} height={525} priority src={image} alt={alt} />
      </div>

    </section>
  )
}

export default HeroSection

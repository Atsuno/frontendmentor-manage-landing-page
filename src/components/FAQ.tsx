'use client'

import useDataStore from '@/hooks/useDataStore'

const FAQ = () => {
  const { faq, btnText } = useDataStore()

  return (
    <section className="flex w-full flex-col items-center justify-between gap-10 bg-primary-one  bg-simplify-mobile py-24 text-center text-specific md:flex-row md:bg-simplify-desktop md:bg-center md:px-10 md:text-left xl:px-20">
      <h1 className="px-10 text-4xl md:w-1/2 md:px-0 xl:text-5xl">{faq.header}</h1>
      <button className="w-fit rounded-full bg-specific px-10 py-4 text-sm font-bold text-primary-one hover:text-primary-one/60" type="button">{btnText}</button>
    </section>
  )
}

export default FAQ

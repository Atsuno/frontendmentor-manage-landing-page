'use client'

import useDataStore from '@/hooks/useDataStore'

const Feature = () => {
  const { feature } = useDataStore()
  const { header, lists, paragrap } = feature

  return (
    <section className="flex flex-col py-10 md:flex-row md:px-10 md:text-left lg:px-20">
      <div className="pb-14 text-center md:w-1/2 md:text-left lg:pr-10">
        <h1 className="px-5 pb-5 text-3xl font-bold md:px-0 xl:pb-10 xl:text-5xl">{header}</h1>
        <p className="px-2 text-neutral-one md:px-0 xl:pr-44 xl:text-xl">
          {paragrap}
        </p>
      </div>
      <ul className="md:w-1/2 lg:pl-10">
        {lists.map(({ headerList, list, paragrapList }) => (
          <li key={list} className="pb-14">
            <div className="flex w-full items-center rounded-l-full bg-primary-one/20 md:bg-transparent lg:-ml-20">
              <h1 className="rounded-full bg-primary-one px-5 py-1 text-specific xl:text-xl">{list}</h1>
              <p className="pl-3 font-bold lg:pl-5 xl:text-xl">{headerList}</p>
            </div>
            <p className="pt-5 text-neutral-one xl:text-xl">
              {paragrapList}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

export default Feature

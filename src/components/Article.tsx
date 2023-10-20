'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type ArticleList = {
  h1: string,
  articleItem: Array<{
    id: string,
    image: string,
    name: string,
    article: string,
  }>,
  btnText: string,
}

const articleLists: Array<ArticleList> = [{
  h1: 'What they’ve said',
  articleItem: [{
    id: 'item1',
    image: '/images/avatar-anisha.png',
    name: 'Anisha Li',
    article: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
  }, {
    id: 'item2',
    image: '/images/avatar-ali.png',
    name: 'Ali Bravo',
    article: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
  }, {
    id: 'item3',
    image: '/images/avatar-richard.png',
    name: 'Richard Watts',
    article: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
  }, {
    id: 'item4',
    image: '/images/avatar-shanai.png',
    name: 'Shanai Gough',
    article: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
  }],
  btnText: 'Get Started',
}]
const Article = () => {
  const [isSwap, toggleSwap] = useState(articleLists[0].articleItem[0])

  return (

    articleLists.map(({ h1, articleItem, btnText }) => (
      <section key={h1} className="flex flex-col items-center pb-14 md:pb-24 xl:pb-32">

        <h1 className="pb-12 text-4xl font-bold">{h1}</h1>

        <div className="carousel w-[375px] gap-5 pt-20 md:carousel-end md:rounded-box md:w-full md:pb-14">
          {articleItem.map(({ name, article, image, id }, index) => (
            <div key={id} id={id} onClick={() => toggleSwap(articleItem[index])} aria-hidden="true" className="carousel-item w-full flex-col items-center justify-center gap-5 bg-neutral-one/5 text-center md:w-1/3">
              <div className="w-20">
                <Image className="-mt-10" width={144} height={144} priority src={image} alt={name} />
              </div>
              <h1 className="text-lg font-bold">{name}</h1>
              <p className="px-8 pb-10 text-neutral-one">{article}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2 pb-10 pt-5 md:hidden">
          {articleItem.map(({ id }, index) => (
            <Link key={id} href={`#${id}`} onClick={() => toggleSwap(articleItem[index])} className={`${isSwap === articleItem[index] ? 'bg-primary-one' : ''} radio border-primary-one`} aria-label={id} />
          ))}
        </div>
        <button className="w-fit rounded-full bg-primary-one px-10 py-4 text-sm text-specific shadow-lg shadow-primary-one/40 hover:bg-primary-one/80" type="button">{btnText}</button>
      </section>
    ))

  )
}

export default Article

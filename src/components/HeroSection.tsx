import Image from 'next/image'

type HeroContain = {
  header: string,
  textParagraph: string,
  textButton: string,
  image: string,
  alt: string,
}

const heroContains: Array<HeroContain> = [{
  header: 'Bring everyone together to build better products.',
  textParagraph: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
  textButton: 'Get Started',
  image: '/images/illustration-intro.svg',
  alt: 'illustration intro',
}]

const HeroSection = () => (
  <section className="flex flex-col-reverse gap-5 text-center md:flex-row md:text-left">
    {heroContains.map(({ header, textButton, textParagraph }) => (
      <div key={header} className="flex flex-col md:w-1/2 lg:justify-evenly xl:pr-20">
        <h1 className="pb-3 text-4xl font-bold lg:text-5xl xl:text-6xl">{header}</h1>
        <p className="pb-8 text-neutral-one lg:text-xl xl:pr-24">{textParagraph}</p>
        <button className="w-fit rounded-full bg-primary-one px-10 py-4 text-sm text-specific shadow-lg shadow-primary-one/40 hover:bg-primary-one/80" type="button">{textButton}</button>
      </div>
    ))}
    {heroContains.map(({ alt, image }) => (
      <div key={alt} className="text-right md:w-1/2">
        <Image className="w-full" width={580} height={525} priority src={image} alt={alt} />
      </div>
    ))}

  </section>
)

export default HeroSection

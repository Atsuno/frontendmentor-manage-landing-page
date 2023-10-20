type FeatureList = {
  h1: string,
  p: string
  lists: Array<{
    list: string,
    h2: string,
    p1: string,
  }>,
}

const features: Array<FeatureList> = [{
  h1: 'What’s different about Manage?',
  p: 'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.',
  lists: [{
    list: '01',
    h2: 'Track company-wide progress',
    p1: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  }, {
    list: '02',
    h2: 'Advanced built-in reports ',
    p1: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  }, {
    list: '03',
    h2: 'Everything you need in one place ',
    p1: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  }],
}]

const Feature = () => (
  features.map(({ h1, p, lists }) => (
    <section key={h1} className="flex flex-col py-10 md:flex-row md:px-10 md:text-left lg:px-20">
      <div className="pb-14 text-center md:w-1/2 md:text-left lg:pr-10">
        <h1 className="px-5 pb-5 text-3xl font-bold md:px-0 xl:pb-10 xl:text-5xl">{h1}</h1>
        <p className="px-2 text-neutral-one md:px-0 xl:pr-44 xl:text-xl">
          {p}
        </p>
      </div>
      <ul className="md:w-1/2 lg:pl-10">
        {lists.map(({ h2, list, p1 }) => (
          <li key={list} className="pb-14">
            <div className="flex w-full items-center rounded-l-full bg-primary-one/20 md:bg-transparent lg:-ml-20">
              <h1 className="rounded-full bg-primary-one px-5 py-1 text-specific xl:text-xl">{list}</h1>
              <p className="pl-3 font-bold lg:pl-5 xl:text-xl">{h2}</p>
            </div>
            <p className="pt-5 text-neutral-one xl:text-xl">
              {p1}
            </p>
          </li>
        ))}
      </ul>
    </section>
  ))

)

export default Feature

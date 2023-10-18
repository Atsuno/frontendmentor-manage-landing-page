import Link from 'next/link'

const ByCode = () => (
  <section className="text-center text-xs text-primary-two [&_a]:text-primary-one hover:[&_a]:text-primary-two">
    Challenge by
    {' '}
    <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</Link>
    .
    Coded by
    {' '}
    <Link href="https://github.com/Atsuno/frontendmentor-manage-landing-page" target="_blank" rel="noreferrer">Atsuno</Link>
    .
  </section>
)

export default ByCode

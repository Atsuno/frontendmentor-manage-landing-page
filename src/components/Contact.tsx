'use client'

import Link from 'next/link'
import useDataStore from '@/hooks/useDataStore'

const Contact = () => {
  const { contact, banner, submit, changeInputText, inputText } = useDataStore()
  const { copyright, btnText, input, menulist, sociallists } = contact
  const { inputPlaceholder, inputValid } = input

  return (
    <section className="flex w-full flex-col-reverse items-center justify-between gap-10 bg-neutral-two px-10 py-16 text-specific md:flex-row xl:px-20">
      <p className="text-right text-xs text-neutral-one md:hidden">{copyright}</p>
      <div className="flex w-full flex-col-reverse items-center gap-10 md:w-fit md:flex-col md:items-start md:gap-28">
        <div className="[&_path]:fill-specific">
          {banner.svg}
        </div>
        <div>
          <ul className="flex gap-5">
            { sociallists.map(({ name, link, social }) => (
              <li key={name}>
                <Link className="hover:[&_path]:fill-primary-one" href={link} rel="noopenner">
                  {social}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-between md:w-1/3">
        <div>
          <ul className="last:[&_li]:pb-0">
            {menulist.map((value) => (
              <li className="pb-5" key={value}>
                <Link className="hover:text-primary-one" href={sociallists[0].link} rel="noopenner">{value}</Link>
              </li>
            )).slice(0, 4)}
          </ul>
        </div>
        <div>
          <ul>
            {menulist.map((value) => (
              <li className="pb-5" key={value}>
                <Link className="hover:text-primary-one" href={sociallists[0].link} rel="noopenner">{value}</Link>
              </li>
            )).slice(4)}
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col md:w-1/3 md:items-end md:justify-between md:gap-20">
        <form className="" action="#">
          <div className="flex gap-5">
            <input type="email" className="input input-bordered w-full" value={inputText} onChange={(event) => changeInputText(event.target.value)} placeholder={inputPlaceholder} />
            <div className="rounded-full bg-specific">
              <button type="submit" onClick={() => submit(inputText)} className="h-full rounded-full bg-primary-one px-5 py-1 hover:bg-primary-one/80 ">
                {btnText}
              </button>
            </div>
          </div>
          <label className=" label h-5">
            <span className={`${inputText ? 'block' : 'hidden'} label-text-alt text-primary-one `}>{inputValid}</span>
          </label>

        </form>
        <p className="hidden text-right text-xs text-neutral-one md:block">{copyright}</p>
      </div>
    </section>
  )
}

export default Contact

import type { Metadata } from 'next'
import Article from '@/components/Article'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Feature from '@/components/Feature'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/layout/NavBar'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Manage landing page',
  description: 'Challenge Manage landing page',
}

const PageHome = () => (
  <main className=" flex min-h-screen w-full flex-col items-center bg-neutral-four md:max-w-8xl ">
    <NavBar />
    <HeroSection />
    <Feature />
    <Article />
    <FAQ />
    <Contact />
  </main>
)

export default PageHome

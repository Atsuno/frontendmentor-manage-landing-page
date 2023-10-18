import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/layout/NavBar'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Manage landing page',
  description: 'Challenge Manage landing page',
}

const PageHome = () => (
  <main className=" flex min-h-screen w-full flex-col items-center gap-10 bg-neutral-four px-5 md:max-w-8xl md:px-10 lg:px-20">
    <NavBar />
    <HeroSection />
  </main>
)

export default PageHome

import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import ByCode from '@/components/ByCode'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="flex flex-col items-center font-primary text-primary-two">
      {children}
      <footer>
        <ByCode />
      </footer>
    </body>
  </html>
)

export default RootLayout

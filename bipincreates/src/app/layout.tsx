import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const Poppin = Poppins({
  subsets: ['latin'],
  weight: ['700','600','500','400','300'],
  display:'swap',
  variable:'--poppin'
})

export const metadata: Metadata = {
  title: 'Bipin Creates',
  description: 'We solve your problem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{Poppin.className} `}>
       <Navbar/>
        <main className=''>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}

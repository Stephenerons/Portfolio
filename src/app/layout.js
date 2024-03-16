import Sidebar from './component/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculator',
  description: 'A well designed calculator app with diverse functionalities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-gradient-to-r from-[#70888D] to-[#3B9FB5]  ${inter.className}`}> {children}</body>
    </html>
  )
}


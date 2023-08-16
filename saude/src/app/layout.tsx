import './globals.css'
import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import Header from '../../components/header'

const caveat =Caveat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Espaço Emídio & Sá',
  description: 'Massoterapia, Piscicologia, cuidando do corpo e da mente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={caveat.className}>
        <Header/>
        {children}</body>
    </html>
  )
}

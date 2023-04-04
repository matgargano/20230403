import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'NextJS is cool',
  description: 'My first NextJS App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav><Link href="/">Home</Link> | <Link href="/info">Info</Link></nav>  
        {!process?.env?.API_KEY && <>You need to set an API key...</>}

        {children}
      </body>
    </html>
  )
}

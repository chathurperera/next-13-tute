import '../globals.css';
import {Montserrat} from '@next/font/google';

const montserrat = Montserrat({
  weight:["200","400","500"],
  subsets:["latin"],
  variable:"--font-montserrat"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <nav className='font-montserrat'>
          This is thhe Dashboard Nav
        </nav>
        {children}</body>
    </html>
  )
}
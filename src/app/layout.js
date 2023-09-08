import './globals.css'
import Script from 'next/script'



export const metadata = {
  title: 'Dashzer portfolio',
  description: 'A frontend developer portfolio',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/d5d3cf2fd3.js"         
        ></Script>
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

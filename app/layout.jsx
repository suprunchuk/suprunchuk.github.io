import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GeistSans } from 'geist/font/sans'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export const metadata = {
  title: 'Pasha Suprunchuk',
  description: 'Lifehacks and useful materials',
  openGraph: {
    siteName: 'Pasha Suprunchuk',
    description: 'Lifehacks and useful materials',
    images: [
      'https://assets.vercel.com/image/upload/v1646691291/front/try/default-landing-page-og-image-teal.png',
    ],
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <Head />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer>
            <small>
              <time>{new Date().getFullYear()}</time> © Pasha Suprunchuk.
            </small>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}

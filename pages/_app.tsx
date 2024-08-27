import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={GeistSans.className}>

        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </main>
    </>
  )
}

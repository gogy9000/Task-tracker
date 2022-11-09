import { CommonProvider } from 'app/provider'
import '../styles/global.css'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>App</title>
        <meta

        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonProvider>
        <Component {...pageProps} />
      </CommonProvider>
    </>
  )
}

export default MyApp

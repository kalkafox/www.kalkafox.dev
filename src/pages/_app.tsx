import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import meta from '@/data/meta.json'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#597056' />
        <meta name='msapplication-TileColor' content='#79BC71' />
        <meta name='theme-color' content='#79BC71' />
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:url' content={meta.url} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='kalkafox' />
        <meta property='og:locale' content='en_US' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kalkafox' />
        <meta name='twitter:creator' content='@kalkafox' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

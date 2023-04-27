import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import meta from '@/data/meta.json'

export default function Home() {
  return (
    <>
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
      <main className={`font-['Times_New_Roman']`}>
        Whoa! You&apos;re on the lo-fi version of https://www.kalkafox.dev/
        <br />
        <Image
          src='https://avatars.githubusercontent.com/u/9144208'
          alt='avatar'
          width='184'
          height='184'
          priority
          quality={1}
        />
        <br />
        (Yes, I know, it&apos;s supposed to be using http, but it is difficult
        to force Next.js to use http instead of https.)
        <br />
        It&apos;s also designed to look like it was made in the 90s, but using
        modern web technology, which is extremely overkill, so it&apos;s a bit
        of a stupid twist.
        <br />
        <br />
        I also don&apos;t have much of a design set yet, I was kind of bored.
        Maybe I&apos;ll have an idea for this later.
        <br />
        <br />
        <Link href='/about' className='underline'>
          About
        </Link>
        <br />
        <Link href='/yip' className='underline'>
          Ping edge
        </Link>
        <br />
        <Link href='https://kalkafox.dev' className='underline'>
          Go to the real site
        </Link>
      </main>
    </>
  )
}

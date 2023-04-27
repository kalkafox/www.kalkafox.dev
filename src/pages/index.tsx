import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={`font-['Times_New_Roman']`}>
        Whoa! You&apos;re on the lo-fi version of https://kalkafox.dev/
        <br />
        The <code>www</code> subdomain wasn&apos;t in use, so I decided to make
        this.
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

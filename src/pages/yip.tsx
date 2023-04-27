import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import Image from 'next/image'

function Yip() {
  const [elapsed, setElapsed] = useState(0)

  const foxQuery = useQuery({
    queryKey: ['fox'],
    queryFn: async () => {
      const res = await fetch('https://randomfox.ca/floof/')
      const data = await res.json()
      return data
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: false,
  })

  const yipQuery = useQuery({
    queryKey: ['yip'],
    queryFn: async () => {
      const then = Date.now()
      setElapsed(then)
      const res = await fetch('/api/yip')
      const data = await res.json()
      setElapsed(Date.now() - then)
      return data
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  return (
    <main className={`font-['Times_New_Roman']`}>
      {yipQuery.isLoading ? (
        'Loading...'
      ) : yipQuery.error ? (
        'An error has occurred: ' + yipQuery.error
      ) : (
        <>
          <div>{yipQuery.data.message}</div>
          <div>{elapsed}ms</div>
        </>
      )}
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          foxQuery.refetch()
        }}>
        Click here for a random fox
      </button>
      <br />
      <br />
      {!foxQuery.isLoading && foxQuery.data && (
        <Image
          src={foxQuery.data.image}
          priority
          fetchPriority='high'
          width='384'
          height='384'
          alt='fox'
        />
      )}
    </main>
  )
}

export default Yip

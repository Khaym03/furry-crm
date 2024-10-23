import { useEffect, useState } from 'react'

type CSVData = {
  name: string
  phone: string
  pets: unknown[]
  rowIndexs: number[]
}

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8080'
    : (process.env.NEXT_PUBLIC_BACKEND_URL as string)

export function useData() {
  const [data, setData] = useState<CSVData[]>([])

  useEffect(() => {
    const handler = async () => {
      const res = await fetch(`${url}/data`)
      const d = await res.json()
      setData(d ?? [])
    }

    handler()
  }, [])

  return { data }
}

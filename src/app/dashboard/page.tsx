'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useEffect, useState } from 'react'

export default function Page() {
  const { data } = useData()

  if (!data) return <div>Loading...</div>
  return (
    <section className="flex flex-col gap-6">
      <div className="flex">
        <Card className="p-4">
          <CardTitle>Total de clientes</CardTitle>
          <p>{data.length}</p>
        </Card>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data &&
          data.map((d, i) => (
            <Card className="p-4" key={i}>
              <CardHeader>
                <CardTitle>{d.name}</CardTitle>
                <CardDescription>{d.phone}</CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>
    </section>
  )
}

type CSVData =  {
    name: string
    phone: string
    pets: unknown[]
}

function useData() {
  const [data, setData] = useState<CSVData[]>([])

  useEffect(() => {
    const handler = async () => {
      const res = await fetch('http://127.0.0.1:8080/data')
      const d = await res.json()
      setData(d ?? [])
    }

    handler()
  }, [])

  return { data }
}

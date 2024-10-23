'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useData } from '@/hooks/csv-data'

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
              <CardContent>
                <CardDescription>
                  <span>Frecuencia absoluta: {d.rowIndexs.length}</span>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  )
}



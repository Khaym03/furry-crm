import { CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Box, PawPrint, Stethoscope, Syringe, UserIcon } from 'lucide-react'
import Link from 'next/link'

const options = [
  {
    title: 'Cliente',
    description: 'Registra un cliente nuevo',
    icon: UserIcon,
    href: '/record/customer'
  },
  {
    title: 'Mascota',
    description: 'Registra una nueva mascota',
    icon: PawPrint,
    href: '/record/pet'
  },
  {
    title: 'Vacuna',
    description: 'Registra una nueva vacuna',
    icon: Syringe,
    href: '/record/pet'
  },
  {
    title: 'Alergias',
    description: 'Registra una nueva alerjia',
    icon: Stethoscope,
    href: '/record/allegies'
  },
  {
    title: 'Servicio',
    description: 'Registra un nuevo servicio',
    icon: Box,
    href: '/record/service'
  }
]

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center  w-full h-full rounded-xl pt-4 container">
      <div className="flex flex-col justify-center items-center gap-2 text-center w-4/5 mb-12 max-w-2lg">
        <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Registra tus Datos
        </h3>
        <p className="text-base text-muted-foreground text-balance">
          Aquí podrás gestionar y controlar toda la información de manera
          eficiente. Con nuestras herramientas, podrás manipular los datos
          fácilmente y realizar análisis profundos que te ayudarán a tomar
          decisiones informadas.
        </p>
      </div>
      <ListOfOptions />
    </div>
  )
}

function ListOfOptions() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {options.map((option, i) => (
        <Link
          key={i}
          href={option.href}
          className={cn(
            'flex flex-row justify-between items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent'
          )}
        >
          <div className="flex flex-col items-start gap-2">
            <CardTitle>{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </div>
          <div className="flex items-center justify-center p-2">
            <option.icon className="h-6 w-6" />
          </div>
        </Link>
      ))}
    </div>
  )
}

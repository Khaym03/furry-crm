'use client'
import {
  Box,
  PawPrint,
  Stethoscope,
  Syringe,
  UserIcon,
  LucideIcon
} from 'lucide-react'
import { Label } from './ui/label'
import { CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ScrollArea } from './ui/scroll-area'
import { useRouter } from 'next/navigation'
import { useRecordContext } from '@/app/record/context.record'

type RecordOption = {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

const options: RecordOption[] = [
  {
    title: 'Registrar Cliente',
    description:
      'Crea un nuevo perfil para un cliente, incluyendo información de contacto y detalles relevantes.',
    icon: UserIcon,
    href: '/record/customer'
  },
  {
    title: 'Registrar Mascota',
    description:
      'Añade una nueva mascota al sistema, especificando su nombre, raza y otros datos importantes.',
    icon: PawPrint,
    href: '/record/pet'
  },
  {
    title: 'Registrar Vacuna',
    description:
      'Documenta la administración de vacunas a mascotas, asegurando su salud y bienestar.',
    icon: Syringe,
    href: '/record/vaccine' // Ruta corregida
  },
  {
    title: 'Registrar Alergias',
    description:
      'Introduce información sobre alergias conocidas de mascotas para un mejor cuidado y tratamiento.',
    icon: Stethoscope,
    href: '/record/allergies' // Corrección tipográfica en la ruta
  },
  {
    title: 'Registrar Servicio',
    description:
      'Crea un registro de servicios ofrecidos a clientes y mascotas, como consultas o tratamientos.',
    icon: Box,
    href: '/record/service'
  }
]

export default function ListOfRecordOptions() {
  const router = useRouter()
  const { selectedRoute, setSelectedRoute } = useRecordContext()

  // useEffect(() => {}, [selectedRoute])


  return (
    <ScrollArea className="h-[650px] px-4">
      <div
        className="grid auto-rows-min gap-4 pb-2"
      >
        {options.map((option, i) => (
          <div
            key={i}
            onClick={() => {
              if (selectedRoute === option.href) {
                setSelectedRoute('/record')
                router.push('/record')
              } else {
                setSelectedRoute(option.href)
                router.push(option.href)
              }
            }}
          >
            <div
              // value={option.href}
              id={option.href}
              className="peer sr-only "
            />

            {/* flex-col items-center justify-between */}
            <Label
              htmlFor={option.href}
              className={`flex  rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground  [&:has h-full cursor-pointer ${
                selectedRoute === option.href
                  ? 'border-primary bg-accent/40'
                  : 'border-muted'
              }`}
            >
              <div className="w-full [&>*]:pointer-events-none">
                <CardHeader className="flex flex-row items-center justify-between px-0 pt-0 pb-2 ">
                  <CardTitle>{option.title}</CardTitle>
                  <option.icon className="" />
                </CardHeader>
                <CardFooter className="p-0">
                  <CardDescription>{option.description}</CardDescription>
                </CardFooter>
              </div>
            </Label>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

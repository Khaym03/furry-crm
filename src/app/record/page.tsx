import { CardDescription, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'

const options = [
  {
    title: 'Cliente',
    description: 'Registra un cliente nuevo',
    icon: UserIcon,
    href: '/record/customer'
  }
]

export default function Page() {
  return (
    <div className="flex justify-center items-center  w-full h-full rounded-xl pt-4">
      {/* <Card className="p-4 ">
        <CustomerForm />
      </Card> */}
      <ListOfOptions />
    </div>
  )
}

function ListOfOptions() {
  return (
    <ScrollArea className="flex flex-col gap-4">
      {options.map((option, i) => (
        <Link
          key={i}
          href={option.href}
          className={cn(
            'flex flex-row items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent'
          )}
        >
          <div className='flex flex-col items-start gap-2'>
            <CardTitle>{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </div>
          <div className='flex items-center justify-center p-2'>
          <option.icon className='h-6 w-6' />
          </div>
        </Link>
      ))}
    </ScrollArea>
  )
}

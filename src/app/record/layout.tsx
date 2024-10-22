import ListOfRecordOptions from '@/components/list-of-record-options'
import { RecordProvider } from './context.record'
// import { Card, CardDescription, CardTitle } from '@/components/ui/card'
// import { cn } from '@/lib/utils'
// import { Box, PawPrint, Stethoscope, Syringe, UserIcon } from 'lucide-react'
// import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecordProvider>
      <div className="grid gap-6 grid-cols-[1fr,3fr] h-full rounded-xl container">
        <div className="flex flex-col h-full">
          <ListOfRecordOptions />
        </div>

        <div className="flex flex-col justify-center items-center bg-muted/50 rounded-xl">
          {children}
        </div>
      </div>
    </RecordProvider>
  )
}

// function ListOfOptions() {
//   return (
//     <div className="grid auto-rows-auto gap-4 ">
//       {options.map((option, i) => (
//         <Card key={i}>
//           <Link
//             href={option.href}
//             className={cn(
//               'flex flex-row justify-between items-start gap-2  p-3 text-left text-sm transition-all hover:bg-accent h-full'
//             )}
//           >
//             <div className="flex flex-col items-start gap-2">
//               <CardTitle>{option.title}</CardTitle>
//               <CardDescription>{option.description}</CardDescription>
//             </div>
//             <div className="flex items-center justify-center p-2">
//               <option.icon className="h-6 w-6" />
//             </div>
//           </Link>
//         </Card>
//       ))}
//     </div>
//   )
// }

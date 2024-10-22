import CustomerForm from '@/components/customer-form'
import { Card } from '@/components/ui/card'

export default function Page() {
  return (
    <div className="flex justify-center items-center  w-full h-full rounded-xl pt-4">
      <Card className='p-6'>
        <CustomerForm />
      </Card>
    </div>
  )
}

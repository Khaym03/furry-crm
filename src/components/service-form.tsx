'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { DollarSign } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRecordContext } from '@/app/record/context.record'

const formSchema = z.object({
  name: z.string({ required_error: 'El nombre es obligatorio' }),
  description: z.string({ required_error: 'La descripción es obligatoria' }),
  price: z.preprocess(value => {
    return value === '' ? undefined : Number(value)
  }, z.number({ required_error: 'El precio es obligatorio' }).positive())
})

export default function ServiceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const router = useRouter()
  const { setSelectedRoute } = useRecordContext()

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del servicio</FormLabel>
              <FormControl>
                <Input placeholder="Corte de pelo..." {...field} />
              </FormControl>
              <FormDescription>
                Poner un nombre descriptivo para el servicio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripcion del servicio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="El servicio es para..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio del servicio</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="20..."
                    {...field}
                    className="-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <DollarSign className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                </div>
              </FormControl>
              <FormDescription>El precio es en dolares.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => {
              setSelectedRoute('/record')
              router.push('/record')
            }}
            variant={'secondary'}
            type="button"
          >
            cancelar
          </Button>
          <Button type="submit">Registrar</Button>
        </div>
      </form>
    </Form>
  )
}

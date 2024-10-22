'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { useRecordContext } from '@/app/record/context.record'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  firstName: z
    .string({ required_error: 'El nombre es obligatorio' })
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres' }),
  lastName: z
    .string({ required_error: 'El apellido es obligatorio' })
    .min(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    .max(50, { message: 'El apellido no puede tener más de 50 caracteres' }),
  phone: z
    .string({ required_error: 'El teléfono es obligatorio' })
    .min(10, { message: 'El teléfono debe tener al menos 10 caracteres' })
    .max(15, { message: 'El teléfono no puede tener más de 15 caracteres' }),
  email: z.string({ required_error: 'El email es obligatorio' }).email()
})

export default function CustomerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const { setSelectedRoute } = useRecordContext()
  const router = useRouter()

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Campo para First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Ejemplo: John" {...field} />
                </FormControl>
                <FormDescription>Nombre público del cliente.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo para Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Ejemplo: Doe" {...field} />
                </FormControl>
                <FormDescription>Apellido público del cliente.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Campo para Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Ejemplo: +1234567890" {...field} />
              </FormControl>
              <FormDescription>
                Introduce el número de teléfono del cliente.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo para Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Ejemplo: email@ejemplo.com" {...field} />
              </FormControl>
              <FormDescription>
                Introduce la dirección de correo electrónico.
              </FormDescription>
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

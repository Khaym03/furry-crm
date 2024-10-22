'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form'
import { Input } from './ui/input'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRecordContext } from '@/app/record/context.record'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  type: z.string(),
  race: z.string(),
  owner: z.string(),
  gender: z.string().max(1)
})

const PET_TYPES = [
  { label: 'PERRO', value: '1' },
  { label: 'GATO', value: '2' }
]

const RACES = [
  { label: 'SALCHICHA', value: '1' },
  { label: 'PITBULL', value: '2' }
]

const LIST_OF_CUSTOMERS = [
  { label: 'MARIA CASTILLO', value: '1' },
  { label: 'EMILIANO MELIAN', value: '2' }
]

export default function PetForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values)
  }

  const { setSelectedRoute } = useRecordContext()
  const router = useRouter()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4">
          {/* Campo para First Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Ejemplo: Firulais" {...field} />
                </FormControl>
                <FormDescription>Nombre de la mascota.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo para el tipo de mascota */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tipo de Mascota</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? PET_TYPES.find(
                              petType => petType.value === field.value
                            )?.label
                          : 'Seleccione un tipo'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search language..." />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {PET_TYPES.map(p => (
                            <CommandItem
                              value={p.label}
                              key={p.value}
                              onSelect={() => {
                                form.setValue('type', p.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  p.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {p.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Con el typo de mascota podras seleccionar la RAZA.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo para seleccionar una raza */}
          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Raza de la Mascota</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? RACES.find(
                              race => race.value === field.value
                            )?.label
                          : 'Seleccione una raza'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar raza..." />
                      <CommandList>
                        <CommandEmpty>No se encontro esa raza.</CommandEmpty>
                        <CommandGroup>
                          {RACES.map(p => (
                            <CommandItem
                              value={p.label}
                              key={p.value}
                              onSelect={() => {
                                form.setValue('race', p.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  p.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {p.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {/* <FormDescription>
                  Con el typo de mascota podras seleccionar la RAZA.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo para seleccionar el dueno */}
          <FormField
            control={form.control}
            name="owner"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Quien es el dueño?</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value
                          ? LIST_OF_CUSTOMERS.find(
                              c => c.value === field.value
                            )?.label
                          : 'Selecciona un cliente'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar raza..." />
                      <CommandList>
                        <CommandEmpty>No se encontro un resultado.</CommandEmpty>
                        <CommandGroup>
                          {LIST_OF_CUSTOMERS.map(p => (
                            <CommandItem
                              value={p.label}
                              key={p.value}
                              onSelect={() => {
                                form.setValue('owner', p.value)
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  p.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {p.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  El cliente es el dueño de la mascota.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

       
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

'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from './ui/breadcrumb'
import Link from 'next/link'

export default function DynamicBreadcrumb() {
  const pathname = usePathname()
  const [segments, setSegments] = useState<string[]>([])

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(segment => segment) // Filtrar segmentos vacíos
    setSegments(pathSegments)
  }, [pathname])

  // Generar los elementos de breadcrumb
  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/') // Crear el enlace correspondiente
    return (
      <BreadcrumbItem key={index}>
        <Link href={href}>
          {segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, ' ')}{' '}
          {/* Capitalizar y reemplazar guiones */}
        </Link>
        {index < segments.length - 1 && <BreadcrumbSeparator />}{' '}
        {/* Agregar separador si no es el último elemento */}
      </BreadcrumbItem>
    )
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

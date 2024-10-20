'use client'
import { useUser } from '@clerk/nextjs'

export default function Dashboard() {
  const { user } = useUser()
  return (
    <div>
      <h1>Bienvenido {user?.fullName}</h1>
    </div>
  )
}

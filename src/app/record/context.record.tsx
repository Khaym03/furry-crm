"use client"
import { createContext, useContext, useState } from 'react'

type RecordContextType = {
  selectedRoute: string
  setSelectedRoute: (value: string) => void
}

const RecordContext = createContext<RecordContextType>({
  selectedRoute: '',
  setSelectedRoute: () => {}
})

const RecordProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedRoute, setSelectedRoute] = useState('/record')

  return (
    <RecordContext.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </RecordContext.Provider>
  )
}

const useRecordContext = () => {
  const context = useContext(RecordContext)
  if (context === undefined) {
    throw new Error('useRecordContext must be used within a RecordProvider')
  }
  return context
}

export {useRecordContext, RecordProvider}
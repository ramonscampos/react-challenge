import React, { createContext, useContext, useEffect, useState } from 'react'

import data from '@/data/periodic-table.json'

interface IElementsContext {
  elements: string[]
}

type ElementsProviderProps = {
  children: React.ReactNode
}

const ElementsContext = createContext<IElementsContext>({} as IElementsContext)

export const ElementsProvider = ({ children }: ElementsProviderProps) => {
  const [elements, setElements] = useState<string[]>([])

  useEffect(() => {
    setElements(data.elements.map((element) => element.symbol))
  }, [])

  return (
    <ElementsContext.Provider value={{ elements }}>
      <>{children}</>
    </ElementsContext.Provider>
  )
}

export const useElements = () => {
  const context = useContext(ElementsContext)
  return context
}

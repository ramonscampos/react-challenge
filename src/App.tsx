import './globals.css'

import { useState } from 'react'

import { Button } from './components/ui/button'
import { Elemented } from './components/ui/Elemented'
import { Input } from './components/ui/input'

type Errors = {
  [key: string]: string
}

export function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errors, setErrors] = useState({} as Errors)

  const handleBreakify = () => {
    if (!firstName || !lastName) {
      setErrors({
        firstName: !firstName ? 'First name is required' : '',
        lastName: !lastName ? 'Last name is required' : '',
      })
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900">
      <div className="flex flex-col gap-6">
        <div className="mb-6 flex flex-col gap-12 text-center text-8xl font-bold text-emerald-50">
          <Elemented word={firstName || 'Breaking'} />
          <Elemented word={lastName || 'Bad'} />
        </div>

        <div className="flex gap-4">
          <div className="flex w-full flex-col">
            <label htmlFor="first-name" className="mb-1 text-zinc-50">
              First Name
            </label>
            <Input
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              errorMessage={errors.firstName}
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="last-name" className="mb-1 text-zinc-50">
              Last Name
            </label>
            <Input
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              errorMessage={errors.lastName}
            />
          </div>
        </div>

        <Button className="w-full" onClick={handleBreakify}>
          Breakify
        </Button>
      </div>
    </div>
  )
}

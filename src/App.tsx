import './globals.css'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from './components/ui/button'
import { Elemented } from './components/ui/Elemented'
import { Input } from './components/ui/input'

type Inputs = {
  firstName: string
  lastName: string
}

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleBreakify: SubmitHandler<Inputs> = (data) => {
    setFirstName(data.firstName)
    setLastName(data.lastName)
  }

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900">
      <form
        className="flex min-w-[500px] flex-col gap-6"
        onSubmit={handleSubmit(handleBreakify)}
      >
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
              {...register('firstName', { required: 'First name is required' })}
              errorMessage={errors.firstName?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="last-name" className="mb-1 text-zinc-50">
              Last Name
            </label>
            <Input
              {...register('lastName', { required: 'Last name is required' })}
              errorMessage={errors.lastName?.message}
            />
          </div>
        </div>

        <Button className="w-full">Breakify</Button>
      </form>
    </div>
  )
}

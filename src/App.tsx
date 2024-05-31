import './globals.css'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from './components/ui/button'
import { Elemented } from './components/ui/Elemented'
import { Input } from './components/ui/input'
import { Switch } from './components/ui/switch'

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
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleBreakify: SubmitHandler<Inputs> = (data) => {
    setFirstName(data.firstName)
    setLastName(data.lastName)
  }

  const toggleTheme = () => {
    const html = document.getElementsByTagName('html')
    if (html.length) {
      html[0].classList.toggle('dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="flex h-screen items-center justify-center bg-background">
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
            <label htmlFor="first-name" className="mb-1 text-foreground">
              First Name
            </label>
            <Input
              {...register('firstName', { required: 'First name is required' })}
              errorMessage={errors.firstName?.message}
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="last-name" className="mb-1 text-foreground">
              Last Name
            </label>
            <Input
              {...register('lastName', { required: 'Last name is required' })}
              errorMessage={errors.lastName?.message}
            />
          </div>
        </div>

        <Button className="w-full">Breakify</Button>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          <span className="text-foreground">Light Mode</span>
        </div>
      </form>
    </div>
  )
}

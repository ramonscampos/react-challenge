import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, errorMessage, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-zinc-400 bg-zinc-400 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            errorMessage && 'border-destructive focus-visible:ring-destructive',
            className,
          )}
          ref={ref}
          {...props}
        />
        {!!errorMessage && (
          <span className="ml-1 mt-1 text-xs text-red-500">{errorMessage}</span>
        )}
      </>
    )
  },
)
Input.displayName = 'Input'

export { Input }

import { useEffect, useState } from 'react'

import { useElements } from '@/hooks/elements'

type ElementedProps = {
  word: string
}

export const Elemented = ({ word }: ElementedProps) => {
  const [highlightedWord, setHighlightedWord] = useState<JSX.Element | string>(
    '',
  )

  const { elements } = useElements()

  useEffect(() => {
    for (let i = 0; i < word.length; i++) {
      for (let j = 1; j <= 2; j++) {
        const substring = word.substring(i, i + j)
        if (
          elements
            .map((element) => element.toLowerCase())
            .includes(substring.toLowerCase())
        ) {
          const highlighted = (
            <span>
              {word.substring(0, i)}
              <span className="bg-emerald-800 p-2">{substring}</span>
              {word.substring(i + j)}
            </span>
          )
          setHighlightedWord(highlighted)
          return
        }
      }
    }

    setHighlightedWord(word)
  }, [elements, word])

  return <>{highlightedWord}</>
}

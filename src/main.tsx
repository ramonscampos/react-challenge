import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { ElementsProvider } from './hooks/elements.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ElementsProvider>
      <App />
    </ElementsProvider>
  </React.StrictMode>,
)

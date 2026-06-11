import react  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//another way to create an element without using JSX
const elmt = react.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Google'
)
createRoot(document.getElementById('root')).render(
  
    // <App />

    elmt
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from './Context/ApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ContextProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ContextProvider>
  </>
)

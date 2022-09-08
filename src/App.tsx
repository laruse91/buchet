import { MainPage } from 'pages/main'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const App = () => (
  <>
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  </>
)


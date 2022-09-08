import { App } from 'App'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firebaseConfig = {
  apiKey: 'AIzaSyDOx-DQS8lIXdZBMGwbOdmyReyMhnxltrQ',
  authDomain: 'bucheot.firebaseapp.com',
  projectId: 'bucheot',
  storageBucket: 'bucheot.appspot.com',
  messagingSenderId: '968999775828',
  appId: '1:968999775828:web:1057dde5b70c9c2d8207c1',
  measurementId: 'G-LH21BWCZZK',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(<App/>)

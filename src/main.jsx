import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'animate.css'
import { Provider } from 'react-redux'
import { persistor, store } from './components/Global/store.js'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading="Loading..." persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ToastContainer/>
  </StrictMode>,
)

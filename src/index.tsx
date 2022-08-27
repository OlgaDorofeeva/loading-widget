import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'state'
import { LanguageProvider } from 'contexts'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root') as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
)

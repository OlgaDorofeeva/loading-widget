import { Suspense } from 'react'
import Header from 'components/Header'
import LoadingWidget from 'components/LoadingWidget'
import 'i18n'
import 'App.css'

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className='App'>
      <Header />
      <LoadingWidget />
    </div>
  </Suspense>
)

export default App

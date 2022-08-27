import { MouseEvent } from 'react'
import { useTranslation } from 'contexts'

const Header = () => {
  const { setLanguage, currentLanguage } = useTranslation()

  const changeLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement
    setLanguage(value)
  }

  return (
    <header>
      <button onClick={changeLanguage} value='ru'>
        RU
      </button>
      <button onClick={changeLanguage} value='en'>
        EN
      </button>
      <div>Выбранный язык: {currentLanguage}</div>
    </header>
  )
}

export default Header

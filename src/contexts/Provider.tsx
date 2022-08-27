import { createContext, FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContextApi, ProviderState } from './types'
import { LS_KEY, fetchLocale, getLanguageCodeFromLS, DEFAULT_KEY } from './helpers'

const initialState: ProviderState = {
  isFetching: true,
  currentLanguage: DEFAULT_KEY,
  dataTranslate: undefined,
}

export const LanguageContext = createContext<ContextApi>(undefined)

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS()

    return {
      ...initialState,
      currentLanguage: codeFromStorage,
    }
  })
  const { currentLanguage, dataTranslate } = state
  const { i18n } = useTranslation()

  useEffect(() => {
    const fetchInitialLocales = async () => {
      const codeFromStorage = getLanguageCodeFromLS()

      if (codeFromStorage !== DEFAULT_KEY) {
        void i18n.changeLanguage(codeFromStorage)
      }

      const dataFetchTranslate = await fetchLocale(codeFromStorage)

      setState(prevState => ({
        ...prevState,
        isFetching: false,
        dataTranslate: dataFetchTranslate,
      }))
    }

    void fetchInitialLocales()
  }, [setState])

  const setLanguage = async (language: string) => {
    const dataFetchTranslate = await fetchLocale(language)
    localStorage.setItem(LS_KEY, language)
    void i18n.changeLanguage(language)

    setState(prevState => ({
      ...prevState,
      isFetching: false,
      currentLanguage: language,
      dataTranslate: dataFetchTranslate,
    }))
  }

  const translate = useCallback(
    (key: string) => state?.dataTranslate?.[key],
    [currentLanguage, dataTranslate],
  )

  return (
    <LanguageContext.Provider value={{ ...state, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

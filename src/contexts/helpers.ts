import { messages } from 'mockData/messages'

export const LS_KEY = 'CURRENT_LANGUAGE'
export const DEFAULT_KEY = 'ru'

export const fetchLocale = async (_lang: string) => {
  const response = await fetch('')

  return messages
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || DEFAULT_KEY
  } catch {
    return DEFAULT_KEY
  }
}

export type ContextData = {
  [key: string]: string
}

export interface ProviderState {
  isFetching: boolean
  currentLanguage: string
  dataTranslate: Record<string, string>
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: string) => void
  t: (key: string, data?: ContextData) => string
}

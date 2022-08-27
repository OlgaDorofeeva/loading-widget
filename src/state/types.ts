export type WidgetResponse = Record<string, string>

export type WidgetState = {
  isLoading: boolean
  isError: boolean
  data: WidgetResponse
}

export type GlobalState = {
  widget: WidgetState
}

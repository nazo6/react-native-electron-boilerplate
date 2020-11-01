declare global {
  interface Window {
    api: api
  }
}

export interface api {
  alert: (title: string, message: string) => void
}

/*eslint-env browser */

export const showAlert = (title: string, message: string) => {
  //@ts-ignore
  window.api.alert(title, message)
}

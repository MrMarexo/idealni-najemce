// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: string,
    primaryColor: string,
    secondaryColor: string,
    accentColor: string,
    contrastColor: string
  }
}
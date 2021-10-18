import { createGlobalStyle } from 'styled-components'
import colors from '../constants/colors'

export const Styles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  * + * {
    margin-top: 1rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Spectral";
  }
  body {
    font-family: "DM Sans";
    margin: 0;
  }

`

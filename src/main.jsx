import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const Estilo =createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: 'Playpen Sans', cursive;
  }

  :root{
    /*       Primary Colors            */
    --mermaid-green: #0B9D8F;
    --midnight-mutt: #2D3E4E;
    --tiger-orange: #FF8E4E;
    --vanilla-fluff: #FFFD98;
    --flamingo-furry: #D81E5B;
    /* ------------------------------- */
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Estilo />
    <App />
  </>,
)

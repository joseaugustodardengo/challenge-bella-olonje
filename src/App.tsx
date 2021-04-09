import logo from './assets/logo.svg';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Bella Olonje</h1>
      <GlobalStyle />
    </div>
  );
}

import "./App.css";
import Portfolio from "./components/template/portfolio";
import { ThemeProvider } from "./components/template/portfolio/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Portfolio></Portfolio>
    </ThemeProvider>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
import './App.css';
import Notebook from './components/Notebook';
import { ContextProvider } from './context';



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Notebook />
      </ContextProvider>
    </div>
  );
}

export default App;

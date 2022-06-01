import './App.css';
import Master from './Master';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    </div>
  );
}

export default App;

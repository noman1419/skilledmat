import './App.css';
import Master from './Master';
import { BrowserRouter } from 'react-router-dom';
import ChatContextProvider from './Context';
function App() {
  return (
    <div className="App">
      <ChatContextProvider>
        <BrowserRouter>
          <Master />
        </BrowserRouter>
      </ChatContextProvider>
    </div >
  );

}

export default App;

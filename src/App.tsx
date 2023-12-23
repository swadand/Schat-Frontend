import './App.css'
import Chatlist from './components/Chatlist';
import DM from './components/DM';
import Header from './components/Header';


function App() {

  return (
    <>
      <Header />
      <div className='main-container'>
        <Chatlist chats={[{ "id": 1, "name": "Anna" }, { "id": 2, "name": "Amy" }]} />
        <DM />
      </div>
    </>
  );
}

export default App

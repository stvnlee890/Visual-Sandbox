import './App.css';
import MainBackground from './components/main-background/MainBackground';
import Nav from './components/nav/Nav';
import NavContext from './store/Nav-context';
import { useContext } from 'react';

function App() {
  const context = useContext(NavContext)
  return (
    <div className="App">
      <Nav link={context.link} setLink={context.setLink}/>
      <MainBackground link={context.link}/>
    </div>
  );
}

export default App;

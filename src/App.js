import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Menu from './Menu';
import Foot from './Foot';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Head/>
      <Menu/>
      <Foot/>
      <Dashboard/>
    </div>
  );
}

export default App;

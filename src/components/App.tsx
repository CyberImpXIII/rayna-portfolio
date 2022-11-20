import '../styles/App.css';
import Digital from './pages/Digital';
import Illustration from './pages/Illustration';
import Print from './pages/Print';
import Spaces from './pages/Spaces';

const App=()=>{

  return (
    <div className="App">
      <Print />
      <Digital />
      <Spaces />
      <Illustration />
    </div>
  );
}

export default App;

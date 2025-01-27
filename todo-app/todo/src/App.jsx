// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppName from './components/AppName';
import Inputs from './components/inputs';
import Btn from './Btn';


function App() {
  return <>
      <div className='container'>


      <AppName></AppName>
      
      <Inputs></Inputs>
      <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn>


      </div>
  </>
}

export default App;
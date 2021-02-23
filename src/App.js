import './App.css';
import Hello from './myComponents/Hello'
import Welcome from './myComponents/classComponent'

function App()
{
  return (
    <div className="App">
      
      <Hello age="18" age="18" name="Tushar"></Hello>
      <Hello age="17" name="Nadia"></Hello>
      <Hello age="15" name="Tisha"></Hello>
      <Hello age="16" name="Maria"></Hello>

      <Welcome name="class 1"></Welcome>
      <Welcome name="class 2"></Welcome>
    </div>
  );
}

export default App;

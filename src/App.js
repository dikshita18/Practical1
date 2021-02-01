import './App.css';

/*
function App() {

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}
*/

function App() {
  const date = new Date()
  const abc = <h1>{date.toLocaleTimeString()}</h1>;
  return abc;
}



export default App


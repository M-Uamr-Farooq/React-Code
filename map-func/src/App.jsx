import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const arr = ['Hello ', 'World', 'Shani'];

  return (
    <>
      {arr.map((value, index) => (
        <li key={index} className="list-group-item">
          {value}
        </li>
      ))}
    </>
  );
}

export default App;

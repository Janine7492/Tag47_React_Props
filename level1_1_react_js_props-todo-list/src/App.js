
import './App.css';
import DataBank from './components/DatabankArray/Databank';

const data = [
  { todo: "Bug Grocery" },
  { todo: "Send Email" },
  { todo: "Finish Assignment" },
  { todo: "Write Blog" },
  { todo: "Bake Cake" },
];

function App() {
  return (
    <div className="App">
      <h1>My To-Do-List</h1>
      {data.map((singleToDo, index) => {
        return <DataBank key={index} todo={singleToDo.todo} />
      })}
    </div>
  );
}

export default App;

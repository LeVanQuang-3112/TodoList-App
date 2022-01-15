import './App.css';
import Header from './components/Header';
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import TaskListContextProvider from "./context/TaskListContext"


function App() {
  return (
    <div className="App">
      <TaskListContextProvider>
        <Header/>
        <div className="container">
          <div className="todo__container">
          <TaskForm/>
          <TaskList/>
        </div>
        </div>

      </TaskListContextProvider>
    </div>
  );
}

export default App;

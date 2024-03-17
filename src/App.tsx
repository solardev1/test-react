import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskConextProvider from "./context/TaskContext";

function App() {
  return (
    <TaskConextProvider>
      <Navbar />
      <main className="container">
        <TaskForm />
        <TaskList />
      </main>
    </TaskConextProvider>
  );
}

export default App;

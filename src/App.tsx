import { ThemeProvider } from 'context/ThemeContext';
import { Task } from 'pages/Task';

const App = () => {
  return (
    <ThemeProvider>
      <Task />
    </ThemeProvider>
  );
};

export default App;

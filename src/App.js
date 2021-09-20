import React from "react"
import { TodoProvider } from "./context/TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introducción a react', completed: false },
//   { text: 'Preparar', completed: false },
// ]



function App() {


  // console.log('render antes del useeffect');

  // useEffect(() => {
  //   console.log('use efect')
  //   return () => {
  //     console.log('return useeffect')
  //   }
  // }, [totalTodos])
  // console.log('render despues del useeffect');



  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>


  );
}

export default App;

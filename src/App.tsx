import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


export type FilterValuesType = 'all' | 'completed' | 'active';

export const App=() => {
    let [tasks, setTasks] = useState< Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Typescript", isDone: false},
        {id: 6, title: "RTK query", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')
    

//TODO: учебный вариант работы  useState
    // let arr = useState(initTasks)
    // let tasks = arr[0]
    // let setTasks = arr[1]



  const removeTask=(id: number) => {
        let filterTasks = tasks.filter( t => t.id !== id)
setTasks(filterTasks)
    }

   const changeFilter=(value: FilterValuesType) => {
        setFilter(value)
   }

    let tasksForTodolist = tasks
    if (filter === 'completed'){
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'active'){
        tasksForTodolist = tasks.filter(t => !t.isDone )
    }



  return (
    <div className="App">
        <Todolist title="What to learn"
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  date={"28.03.2025"}/>

        <Todolist title="Books"
                  tasks={[]}
                  removeTask={removeTask}
                  changeFilter={changeFilter}/>

    </div>
  );
}





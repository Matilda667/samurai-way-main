import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active';

export const App = () => {
    let [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "Typescript", isDone: false},
            {id: v1(), title: "RTK query", isDone: false}
        ]
    )


//TODO: учебный вариант работы  useState
    // let arr = useState(initTasks)
    // let tasks = arr[0]
    // let setTasks = arr[1]


    const deleteTask = (id: string) => {
        // alert(id)
        let filterTasks = tasks.filter(t => t.id !== id)
        setTasks(filterTasks)
    }


    const [filter, setFilter] = useState<FilterValuesType>('all')
    const changeFilter = (nexFilter: FilterValuesType) => {
        setFilter(nexFilter)
    }

    const createTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        const nexState: TaskType[] = [...tasks, newTask]
        setTasks(nexState)

        // setTasks([...tasks,{id: 7, title: title, isDone: false}])
    }

    let tasksForTodolist = tasks
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      createTask = {createTask}
                      date={"28.03.2025"}/>

            <Todolist title="Books"
                      tasks={[]}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      createTask = {createTask}
                      date={"28.03.2025"}/>
        </div>
    );
}





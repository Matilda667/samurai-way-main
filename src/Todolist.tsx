import React from "react";
import {FilterValuesType} from "./App";
import {Button} from "./Button";


export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: TaskType[]
    date?: string
    deleteTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void

}

export const Todolist=({ title, tasks, deleteTask,changeFilter,date }: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={"+"}/>
            </div>
            <ul>
                {tasks.length === 0
                    ? <p>Тасок нет!</p>
                    :tasks.map(t =>
                        <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        <Button title={"x"} onClick={ () => deleteTask(t.id)} />
                        </li>
                    )
                }
            </ul>

            <div>
                <Button title={"All"} onClick={ () => changeFilter('all')} />
                <Button  title={"Active"} onClick={ () => changeFilter('active')} />
                <Button  title={"Completed"} onClick={ () => changeFilter('completed')} />
                <div>{date}</div>
            </div>
        </div>
    )
}
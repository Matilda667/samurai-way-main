import React from "react";
import {FilterValuesType} from "./App";



export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: TaskType[]
    date?: string
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void

}

export const Todolist=({ title, tasks, removeTask,changeFilter,date }: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button title={"+"}/>
            </div>
            <ul>

                {tasks.length === 0
                    ? <p>Тасок нет!</p>
                    :tasks.map(t =><li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        <button onClick={ () => {removeTask(t.id)}} title={"x"}/>

                        </li>
                    )
                }

            </ul>

            <div>
                <button onClick={ () => {changeFilter('all')}} title={"All"}/>
                <button onClick={ () => {changeFilter('active')}} title={"Active"}/>
                <button onClick={ () => {changeFilter('completed')}} title={"Completed"}/>
                <div>{date}</div>
            </div>
        </div>
    )
}
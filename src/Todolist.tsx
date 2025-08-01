// import React, {useRef} from "react";
import {FilterValuesType} from "./App";
import {Button} from "./Button";
import {useState, KeyboardEvent} from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: TaskType[]
    date?: string
    deleteTask: (id: string) => void
    changeFilter: (nexFilter: FilterValuesType) => void
    createTask: (title: string) => void
}

export const Todolist = ({
                             title,
                             tasks,
                             deleteTask,
                             changeFilter,
                             createTask,
                             date
                         }: PropsType) => {

    const [taskTitle, setTaskTitle] = useState('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 15) {
            setTaskTitle(e.currentTarget.value);
        }
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && taskTitle.trim() !== "") {
            createTask(taskTitle.trim());
            setTaskTitle("");
        }
    };

    const onClickAddTask = () => {
        if (taskTitle.trim() !== "") {
            createTask(taskTitle.trim());
            setTaskTitle("");
        }
    };

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={e => setTaskTitle(e.currentTarget.value)}
                    placeholder="max 15 characters"
                />
                <Button
                    title={"+"}
                    disabled={taskTitle === ""|| taskTitle.length > 15}
                    onClickHandler={()=>{
                        createTask(taskTitle)
                        setTaskTitle("")
                    }}/>
                {taskTitle && taskTitle.length <= 15 && <div>max 15 characters</div>}
                {taskTitle && taskTitle.length > 15 && <div style={{color: "red"}}>title is too ling</div>}
            </div>

            <ul>
                {tasks.length === 0 ? (
                    <span>Тасок нет!</span>
                ) : (
                    tasks.map(t => (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} readOnly/>
                            <span>{t.title}</span>
                            <Button
                                title={"x"}
                                onClickHandler={() => deleteTask(t.id)}
                            />
                        </li>
                    ))
                )}
            </ul>

            <div>
                <Button title={"All"} onClickHandler={() => changeFilter('all')}/>
                <Button title={"Active"} onClickHandler={() => changeFilter('active')}/>
                <Button title={"Completed"} onClickHandler={() => changeFilter('completed')}/>
                <div>{date}</div>
            </div>
        </div>
    );
};

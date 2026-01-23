import React from 'react';
import AddTaskForm from "@/components/AddTaskForm.jsx";
import SearchTaskForm from "@/components/SearchTaskForm.jsx";
import TodoInfo from "@/components/TodoInfo.jsx";
import TodoList from "@/components/TodoList.jsx";

const ToDo = () => {
    const tasks = [
        {id: 'task-1', title: 'Купить молоко', isDone: false,},
        {id: 'task-2', title: 'Погладить кота', isDone: true,},
    ]
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length} //аналогично (task) => task.isDone
            />
            <TodoList tasks={tasks}/>
        </div>
    );
};

export default ToDo;
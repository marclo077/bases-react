import {useState} from "react";
import {EmptyTodoList} from "./EmptyTodoList";
import {TodoForm} from "./TodoForm";
import {Todo} from "./Todo";

export const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {text, isCompleted: false}])
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <h1 className="text-2xl mb-3 text-amber-600 mt-5">Lista de Tareas</h1>
            <div className="mx-auto mt-5 bg-gray-300 p-2">
                <div className="bg-gray-500 p-2">
                    <TodoForm addTodo={addTodo}></TodoForm>
                    {todos.length > 0 ? (
                        todos.map((todo, index) => (
                            <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                completedTodo={completeTodo}
                                removeTodo={removeTodo}
                            />
                        ))) : (
                        <EmptyTodoList/>
                    )}

                </div>
            </div>
        </>
    )

}

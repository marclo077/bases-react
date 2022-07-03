export const Todo = ({ todo: { isCompleted, text }, index, completedTodo, removeTodo }) => {

    let todoClassName = 'flex mb-1 text-sm py-3 px-2 bg-blue-500 text-white rounded rounded-lg';

    if(isCompleted) {
        todoClassName += ' line-through';
    }
    return (
        <>
            <div className={todoClassName}>
                {text}
            </div>
            <div className="relative float-right -mt-10 mr-2">
                <button
                    className="rounded-2xl bg-gray-300 text-black p-1 text-sm mr-1"
                    onClick={() => completedTodo(index)}
                >
                    Completar
                </button>
                <button
                    className="rounded-2xl bg-red-300 text-black p-1 text-sm"
                    onClick={() => removeTodo(index)}
                >
                    Eliminar
                </button>
            </div>
        </>
    )
}

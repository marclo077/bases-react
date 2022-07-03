import {useState} from "react";

export const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="block w-full rounded-2xl p-2 mb-2"
                autoFocus={true}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

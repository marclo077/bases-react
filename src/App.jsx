import { Counter } from "./Components/Counter";
import { User } from "./Components/User";
import {TodoList} from "./Components/TodoList/TodoList";
import {HarryPotterCharacters} from "./Components/HarryPotter/HarryPotterCharacters";

import './App.css'

function App() {

    const user = {
        name: 'Marcelo Oros',
        nikName: 'luixdev',
        skills: ['JavaScript', 'Vue', 'Angular', 'React', 'Laravel', 'Quasar Framework']
    }

    return (
        <div className="p-10 mt-5">
            <Counter />
            <hr className="mt-5" />
            <User { ...user } />
            <hr className="mt-5" />
            <TodoList />
            <hr className="mt-5" />
            <HarryPotterCharacters />
        </div>
    )
}

export default App

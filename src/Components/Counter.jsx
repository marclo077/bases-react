import {useState} from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1 className="text-2xl mb-3 text-amber-600">Contador</h1>
            <div className="flex flex-row">
                <button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
                    onClick={ () => setCount(count - 1) }
                >
                    Decrementar
                </button>
                <p className="py-1 font-bold text-2xl px-10">{ count }</p>
                <button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
                    onClick={ increment }
                >
                    Incrementar
                </button>
            </div>
        </>
    )
}

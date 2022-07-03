import { useState, useEffect } from "react";
import {HarryPotterCharacter} from "./HarryPotterCharacter";

export const HarryPotterCharacters = () => {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://hp-api.herokuapp.com/api/characters');
            const json =  await response.json();
            setCharacters(json);
            setLoading(false);
        })()
    }, []);

    if(loading) {
        return (
            <div className="mx-auto mt-10 bg-gray-300 p-2">
                <div className="bg-red-700 text-white p-2">
                    Cargando ...
                </div>
            </div>
        )
    }

    return (
        <div className="w-96 mx-auto mt-10 bg-amber-600 p-2">
            <div className="bg-red-700 p-2">
                <h1 className="text-3xl text-white mb-3">
                    Listado de personajes de Harry Potter
                </h1>
                {characters.map((character, index) => (
                    character.image &&
                        <HarryPotterCharacter
                            key={index}
                            {...character}
                        />
                ))}
            </div>
        </div>
    )
}

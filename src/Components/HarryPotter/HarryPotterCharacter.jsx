export const HarryPotterCharacter = ({ name, house, image }) => {
    return (
        <div className="flex mb-1 text-sm py-3 px-2 bg-gray-800 text-white rounded rounded-lg">
            <img src={image} className="w-32 h-32 mr-2" alt={name}/>
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm">{house}</p>
            </div>
        </div>
    )
}

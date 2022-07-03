import PropTypes from 'prop-types';
import logo from '../logo.jpg';

export const User = ({ name, nikName, skills}) => {

    return (

        <div className="mb-5 mt-5 mx-auto">
            <div className="bg-gray-100 p-4 h-auto w-full xl:w-1/2 border rounded">
                <div className="flex flex-row items-center">
                    <img src={logo} alt="" className="h-28 w-28 rounded-full"/>
                    <div className="flex flex-col pl-4">
                        <p className="text-lg">Información del Usuario</p>
                        <p className="text-md font-bold text-gray-900">
                            { name } ({ nikName })
                        </p>
                        <h3 className="text-sm text-amber-600 font-medium">
                            { skills.join(', ') }
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

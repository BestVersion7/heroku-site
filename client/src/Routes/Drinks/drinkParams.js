import React, { useContext } from 'react'
import {DrinkContext} from './Drinks'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import DrinkComments from './drinkComments'

export const DrinkIDContext = React.createContext()
 
const DrinkParams = ({match}) => {
    const drinks = useContext(DrinkContext)
    const filteredParam = drinks.filter(item => item._id === match.params.id)
    return (
        <div className="page-container">
        <br /><br />
            {filteredParam.map((
                {
                    _id, 
                    drink_url_original, 
                    name, 
                    directions, 
                    group,
                    ingredients
                }
            ) => (
                <DrinkIDContext.Provider key={_id} value={filteredParam}>
                    <img className="img-drink" src={drink_url_original} alt={name} />
                    <h3>Name:</h3>
                    <p>{name}</p>
                    <h3>Group:</h3>
                    <p>{group}</p>
                    <h3>Ingredients:</h3>
                    <p>{ingredients}</p>
                    <h3>Directions:</h3>
                    <p>{directions}</p>
                    <h3>Comments:</h3>
                    <DrinkComments />
                </DrinkIDContext.Provider>
            ))}
            <Button color="primary" variant="contained" component={Link} to="/drinks">Back to Drinks</Button>
        </div> 
    )
}

export default DrinkParams
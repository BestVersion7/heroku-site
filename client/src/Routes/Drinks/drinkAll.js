import React, {useContext} from 'react'
import {DrinkContext} from './Drinks'
import {Link} from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import OpenInNew from '@material-ui/icons/OpenInNew'

const DrinkAll = () => {
    const drinks = useContext(DrinkContext)
    return (
        <div className="page-container">
        <p><i>Working on styling ... </i></p>
            {drinks.map(({
                _id,
                name,
                drink_url_original
            }) => (
                <div key={_id}>
                    <p>
                        {name} 
                        <IconButton component={Link} to={`/drinks/${_id}`}>
                            <OpenInNew />       
                        </IconButton>
                    </p>
                    <img className="img-drink" src={drink_url_original} alt={name} /> <br />
                </div>
            ))}
        </div>
    )
}

export default DrinkAll
import React, {useContext} from 'react'
import {DrinkContext} from './Drinks'
import {IconButton} from '@material-ui/core'
import OpenInNew from '@material-ui/icons/OpenInNew'

const DrinkAll = () => {
    const drinks = useContext(DrinkContext)

    const handleClick = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="page-container">
        <h2><i>Working on styling and query search ... </i></h2>
            {drinks.map(({
                _id,
                name,
                drink_url_original
            }) => (
                <div key={_id}>
                    <p>
                        {name} 
                        <IconButton onClick={handleClick} href={`/drinks/${_id}`}>
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
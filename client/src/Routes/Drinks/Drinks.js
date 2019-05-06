import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import DrinkAll from './drinkAll'
import DrinkParams from './drinkParams'

export const DrinkContext = React.createContext()

const Drinks = () => {
    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const {data} = await axios.get(`/api/drinks`)
            setDrinks(data)
        } catch {

        }
    }

    useEffect(() => {fetchDrinks()}, [])

    return (
        <DrinkContext.Provider value={drinks}>
            <Switch>
                <Route path="/drinks" exact component={DrinkAll} />
                <Route path="/drinks/:id" component={DrinkParams} />
            </Switch>
        </DrinkContext.Provider>
    )
}

export default Drinks
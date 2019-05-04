import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {TextField, Button} from '@material-ui/core'

const UploadDrink = () => {
    const [name, setName] = useState('')
    const [imageDrink, setImageDrink] = useState(null)
    const [ingredients, setIngredients] = useState('margarita')
    const [directions, setDirections] = useState('1. Mix bowl ')
    const [popular, setPopular] = useState(false)
    const [group, setGroup] = useState('margarita')

    const handlePostDrink = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('drink', imageDrink)
        formData.append('ingredients', ingredients)
        formData.append('directions', directions)
        formData.append('popular', popular)
        formData.append('group', group)

        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
        try {
            await axios.post('/api/drinks', formData)
            window.location.reload()
        } catch {

        }
    }
    return (
        <div>
            <form onSubmit = {handlePostDrink}>
                <TextField
                    label="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    variant="outlined"
                />
                <input
                    onChange={e => setImageDrink(e.target.files[0])}
                    type="file"
                    name="drink"
                    required
                />
                <TextField
                    label="ingredients"
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="directions"
                    value={directions}
                    onChange={e => setDirections(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    label="popular"
                    value={popular}
                    onChange={e => setPopular(e.target.value)}
                    variant="outlined"
                />
                <Button variant="outlined" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default UploadDrink
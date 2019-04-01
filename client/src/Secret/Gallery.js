import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default () => {
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false)

    const FetchImages = async () => {
        try {
            const {data} = await axios.get('/api/movie')
            setImage(data)
            setLoading(true)
        } catch {
            setLoading(false)
        }
    }

    useEffect(() => {FetchImages()}, [])

    if(!loading) return <div>Loading...</div>
    return (
        <div>
            {image.map(({_id, picture}) => (
                <div key={_id}>
                    <img className="gallery-image" src={picture} alt={_id} />
                </div>
            ))}
        </div>
    )
}
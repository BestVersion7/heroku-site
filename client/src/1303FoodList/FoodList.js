import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export default () => {
    const [food, setFood] = useState([])
    const [addFood, setAddFood] = useState('')
    
    const fetchAllFood = async () => {
        const {data} = await axios.get('/api/food')
        setFood(data)
    }

    //initial map all data
    useEffect(() => {
        fetchAllFood()
    }, [])

    //post data and run the fetch all again (2 requests)
    const handleAddFood = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/food', {
                food: addFood
            }) 
        } catch(err) {
            return alert('Cannot add!')
        }     
        setAddFood('')
        fetchAllFood()
    }

    //deleteData
    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`/api/food/${e.target.value}`) 
        fetchAllFood()
    }

    //hard reset
    const handleReset = async(e) => {
        e.preventDefault()
        await axios.delete('/api/food/reset')
        fetchAllFood()
    }
    
    return (
        <div>
            Leave a message!
            <form onSubmit = {handleAddFood}>
                <textarea
                    placeholder = "Write a message here"
                    value = {addFood}
                    onChange = {e => setAddFood(e.target.value)}
                /> <br />
                <button>Submit</button>
                <button onClick={handleReset}>Reset</button> 
            </form>
            
            <TransitionGroup>
                {food.map(({_id, food}) => (
                    <CSSTransition
                        timeout={300} 
                        key={_id}
                        classNames="zoom"
                    >
                        <div>
                            {food}
                            <button value={_id} onClick = {handleDelete}>X</button>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>    
        </div>
    )
}

// import React, {useState} from 'react'
// import ReactDOM from 'react-dom'
// import uuid from 'uuid'
// import {CSSTransition, TransitionGroup} from 'react-transition-group'

// const staticArray = [
//   {
//     id: uuid(),
//     name: 'flame',
//     location: {
//       city: 'paris',
//       state: 'france'
//     }
//   },
//   {
//     id: uuid(),
//     name: 'wame',
//     location: {
//       city: 'venice',
//       state: 'venezuela'
//     }
//   }
// ]

// export default () => {
//   const [data, setData] = useState(staticArray)
//   const [addData, setAddData] = useState('')
  
//   const handleSubmit = e => {
//     e.preventDefault()
//     const current = [...data, {id: uuid(), name: addData}]
//     setData(current)
//     setAddData('')
//   }

//   const handleDelete = e => {
//     const current = data.filter(item => item.id !== e.target.value )
//     setData(current)
//   }
//   return (
//     <div>
//       <form onSubmit = {handleSubmit}>
//         <input value = {addData} onChange={e => setAddData(e.target.value)}/>
//       </form>
//       <TransitionGroup>
//         {data.map((item, index) => (
//           <CSSTransition
//             key={index}
//             classNames="message"
//             timeout = {1000}
//           >
//             <div>
//             {item.name}
//               <button value={item.id} onClick={handleDelete}> x </button>
//             </div>
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//       <div className="flame">
//       s </div>
//     </div>
//   )
// }


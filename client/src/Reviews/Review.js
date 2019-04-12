import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export default () => {
    const [comments, setComments] = useState([])
    const [addComment, setAddComment] = useState('')
    
    const fetchComments = async () => {
        const {data} = await axios.get('/api/usercomment')
        setComments(data)
    }

    //initial map all data
    useEffect(() => {
        fetchComments()
    }, [])

    //post data and run the fetch all again (2 requests)
    const handleAddComment = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/usercomment', {
                comment: addComment
            }) 
        } catch(err) {
            return alert('Cannot add!')
        }     
        setAddComment('')
        fetchComments()
    }

    //deleteData
    // const handleDelete = async (e) => {
    //     e.preventDefault()
    //     await axios.delete(`/api/usercomment/${e.target.value}`) 
    //     fetchComments()
    // }

    //hard reset
    // const handleReset = async(e) => {
    //     e.preventDefault()
    //     await axios.delete('/api/usercomment')
    //     fetchAllFood()
    // }
    
    return (
        <div>
            Leave a message!
            <form onSubmit = {handleAddComment}>
                <textarea
                    placeholder = "Write a message here"
                    value = {addComment}
                    onChange = {e => setAddComment(e.target.value)}
                /> <br />
                <button className="regular-button">Submit</button>
            </form>
            
            <TransitionGroup>
                {comments.map(({_id, comment, picture_url}) => (
                    <CSSTransition
                        timeout={300} 
                        key={_id}
                        classNames="zoom"
                    >
                        <div>
                            <img src={picture_url} alt="portrait" />
                            {comment}
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


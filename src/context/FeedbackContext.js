import { createContext, useState, useEffect } from "react"
import {v4 as uuid4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children} ) =>{
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackEdit , setFeedbackEdit] = useState({
    item : {},
    edit : false
  })

    const [feedback , setFeedback] = useState([])

    useEffect(() => {
      fetchFeedback()
    }, [])
  
    // Fetch feedback
    const fetchFeedback = async () => {
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }
    
    // Update Feedback Item
    const updateFeedback = async(id , updItem) => {
      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem),
      }) 
      const data = await response.json()
      setFeedback(feedback.map((item) => (item.id === id ? {...item , ...data } : item)))
      setFeedbackEdit({
        item : {},
        edit : false
      })
    }

    // Delete Feedback
    const deleteFeedback = async(id) => {
        if(window.confirm('Are you sure you want to delete ?')){
            await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        console.log('App',id)
    }

    // Add Feedback
    
    const addFeedback = async(newFeedback) => {

        const response = await fetch('http://localhost:5000/feedback' , {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(newFeedback)
        })
        // newFeedback.id = uuid4()
        const data = await response.json()
        setFeedback([data , ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
      console.log({item})
      setFeedbackEdit({
        item,
        edit : true
      })
    }

    return <FeedbackContext.Provider value={{
      feedback ,
      addFeedback ,
      isLoading,
      deleteFeedback ,
      editFeedback,
      feedbackEdit,
      updateFeedback
       }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;
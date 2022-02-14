import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuid4} from 'uuid'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        console.log('App',id)
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid4()
        setFeedback([newFeedback , ...feedback])
    }


    return (
        <>
         <Header bgColor='beige' textColor ='blue'/>
         <div className='container'>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback}
            handleDelete = {deleteFeedback}
            />
         </div>
        </>
       
    )
}
export default App
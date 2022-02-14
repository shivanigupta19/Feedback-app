
import { useState } from "react"
import Card from "./shared/Card"
import Button from './shared/Button'
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [text , setText] = useState('')

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be atleast 10 characters')
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >= 10){
            const newFeedback = {
                text : text, rating : rating
            }
            handleAdd(newFeedback);
            setText('')

        }

    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service to us ?</h2>
                <RatingSelect select={(rating) => setRating(rating)}>
                </RatingSelect>
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' onChange={handleTextChange} value={text}></input>
                    <Button type='submit' isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm

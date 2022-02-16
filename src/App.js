import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import {useState} from 'react'
// import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from './components/FeedbackForm'
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import {BrowserRouter as Router , Route , Routes, NavLink } from 'react-router-dom'
import Card from "./components/shared/Card"
import Post from "./components/Post"
import {FeedbackProvider} from "./context/FeedbackContext"

function App(){
    // const [feedback, setFeedback] = useState(FeedbackData)
    
    return (
        <FeedbackProvider>
            <Router>
         <Header bgColor='beige' textColor ='blue'/>
         <div className='container'>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm/>
                        <FeedbackStats/>
                        <FeedbackList />
                    </>
                }>
                </Route>
            <Route path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink/>
         </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App


// <Route path='/about'  element={<AboutPage/>} />
//             <Route path='/post/:id/:name'  element={<Post/>} /> 
//             <Route path='/post/*'  element={<Post/>} /> 

// <FeedbackStats feedback={feedback}/>
// <Card>
//                 <NavLink to='/' activeClassName='active'>
//                     Home
//                 </NavLink>
//                 <NavLink to='/about' activeClassName='active'>
//                     About
//                 </NavLink>
//             </Card>
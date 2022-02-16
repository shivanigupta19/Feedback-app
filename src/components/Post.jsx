// import {useParams} from 'react-router-dom'
import {Navigate, useNavigate , Route , Routes} from 'react-router-dom'

function Post() {
    const status = 200
    if(status === 404){
        return <Navigate to='/notfound' />
    }
    // const params = useParams()
    // const navigate = useNavigate()
    // const onClick = () => {
    //     navigate('/about')
    // }

    return (
        <div>
           {/* <h1>
                Post {params.id}
           </h1>
           <p>
               Name : {params.name}
           </p> */}
           {/* <h1>Post</h1> */}
           {/* <button onClick={onClick}>Click</button> */}
           {/* <Routes>
               <Route path='/show' element={<h1>Hello World</h1>}>
               </Route>
           </Routes> */}
        </div>
    )
}

export default Post

import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>
                    About this project
                </h1>
                <p>
                    This is a react app to leave feedback for a product for service
                </p>
                <p>
                    Version : 1.0.0
                </p>
                <p>
                <Link to={{
                    pathname : '/',
                    hash : '#hello',
                    search : '?sort=name'
                }}>
                    Back to home
                </Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage

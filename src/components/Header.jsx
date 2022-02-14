import PropType from 'prop-types'

export default function Header({text , bgColor , textColor}) {
    const headerStyles = {
        backgroundColor :bgColor,color : textColor
    }
    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
            
        </header>
    )
}
Header.defaultProps = {
    text : 'Feedback UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6a95'
}
Header.PropType = {
    text : PropType.string,
    bgColor : PropType.string,
    textColor : PropType.string
}


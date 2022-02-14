import PropTypes from 'prop-types'

function Button({children , version , type, isDisabled}) {
    return (
        <div>
            <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool
}

Button.defaultProps ={
    version : 'primary',
    type : 'button',
    disabled : false
}

export default Button

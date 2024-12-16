import PropTypes from 'prop-types'

// Concept of reusable components (can reuse button anywhere with different prop values)
const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

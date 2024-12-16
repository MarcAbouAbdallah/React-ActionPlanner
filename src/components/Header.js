import PropTypes from 'prop-types'
import Button from './Button'

import { useLocation } from 'react-router-dom' // Hook to retrieve path location

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'} //Dynamic value based on prop
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

// Default prop values
Header.defaultProps = {
    title: 'Task Tracker',
}

// Default prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// CSS IN JS (other options care inline styling, using a stylesheet ...)
// const headingStyle = {
//color: 'red',
//backgroundColor: 'black'
//}

export default Header

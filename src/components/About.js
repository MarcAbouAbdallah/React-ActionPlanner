import { Link } from 'react-router-dom' // Instead of <a href> </a> to avoid reloading

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Return to App</Link>
    </div>
  )
}

export default About

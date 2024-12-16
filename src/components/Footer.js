import { Link } from 'react-router-dom' // Instead of <a href> </a> to avoid reloading

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2024</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer

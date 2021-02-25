import { Link } from 'react-router-dom'
import { Navbar } from 'reactstrap'



const Nav = () => {
    return (
        <>
            <Navbar color="light" light expand="md">
                <Link to="/" className="btn btn-outline-dark">Home</Link>
                <Link to="/about" className="btn btn-outline-dark">About</Link>
                <Link to="/CRUD" className="btn btn-outline-dark">CRUD</Link>
            </Navbar>



        </>

    )


}
export default Nav;
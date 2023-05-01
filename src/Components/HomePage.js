//imported hooks
import { Link} from "react-router-dom";

const HomePage =() =>{
    return(
        <>
        <h1>Welcome</h1>
        <Link to={`/Classes`}>
            <button>Start</button>
        </Link>
        </>
    )
}

export default HomePage;
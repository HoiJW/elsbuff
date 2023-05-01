//imported hooks
import { Link} from "react-router-dom";

const HomePage =() =>{
    return(
        <>
        <div className="wrapper">
            <h1>Welcome</h1>
            <Link to={`/Classes`}>
                <button>Start</button>
            </Link>
        </div>
        </>
    )
}

export default HomePage;
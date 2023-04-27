import { Link } from "react-router-dom"
import "./styles/main.css" 

export default function Main() {
    return (
        <div className="main">
            This is the main page!
            <div>
                <Link to="./pages/moffit">Link to Moffit</Link>
            </div>

            example text
        </div>
    )
}
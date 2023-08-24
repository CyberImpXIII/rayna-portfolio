import DownArrow from "./DownArrow"
import '../styles/backArrow.css'
import { useNavigate } from "react-router-dom"

const BackArrow = () => {
    const Navigate = useNavigate();
	const goBack = () => {
		Navigate(-1);
	}
    return(
    <div className="backArrow" onClick={goBack}>
        <DownArrow dropDown={true} />
        TEST
    </div>
    )
}

export default BackArrow
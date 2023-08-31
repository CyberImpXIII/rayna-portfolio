import DownArrow from "./DownArrow"
import '../styles/backArrow.css'
import { useNavigate } from "react-router-dom"

const BackArrow = ({from, setDropDownActive}:{from?:string, setDropDownActive?:Function}) => {
    const Navigate = useNavigate();
	const goBack = () => {
		Navigate(-1);
	}
    return(
    <div className="backArrow" onClick={goBack}>
        <DownArrow setDropDownActive={setDropDownActive} dropDownActive={true} />
        TEST
    </div>
    )
}

export default BackArrow
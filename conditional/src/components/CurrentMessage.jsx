import Weekends from "./Weekends";
import Workdays from "./Workdays";

function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}

export default CurrentMessage;
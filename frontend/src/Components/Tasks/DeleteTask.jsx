import axios from "axios";
import { CardLink } from "reactstrap";
import { TASK_URL } from '..CONSTS.json/';

const DeleteTask = ({ del, trigger }) => {

    const remove = () => {
        axios.delete(`${TASK_URL}/delete/${del}`)
            .then((res) => {
                trigger("Successfully Deleted!")
            })
            .catch((err) => {
                trigger("Error Removing Object");
            })
    }

    return (
        <CardLink className="btn btn-outline-danger" onClick={remove}>X </CardLink>
    )
}
export default DeleteTask; 

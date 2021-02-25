import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

const ListTask = ({ item, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader>{item.name}
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    {item.summary}
                    <hr />
                    <DeleteGoal className="float-right" del={item._id} trigger={trigger} />
                    <EditGoal className="float-right" item={item} trigger={trigger} />

                </ToastBody>
            </Toast>
        </div>

    )
}
export default ListTask; 

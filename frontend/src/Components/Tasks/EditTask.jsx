import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Task_URL } from '../CONSTS.json';
const EditTask = ({ item, trigger }) => {

    // Data from DB
    const { name, summary, priority,deadline,completed } = item;
    const [updateName, setUName] = useState(name);
    const [updateSummary, setUSummary] = useState(summary);
    const [updatePriority, setUPriority] = useState(priority);
    const [updateDeadline, setUDeadline] = useState(deadline);
    const [updateCompleted, setUCompleted] = useState(completed);
    // Modal
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    // function to updateDB
    const updateDatabase = (e) => {
        e.preventDefault();
        axios.patch(`${Task_URL}/update/${item._id}`,
            { name: updateName, summary: updateSummary, priority: updatePriority,deadline:updateDeadline,comleted:updateCompleted })
            .then((res) => {
                trigger(res.data);
                toggle();
            })
            .catch((err)=>{
                trigger(err.data);
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT </CardLink>
            <Modal isOpen={showModal}>
                <ModalHeader>{item.name}</ModalHeader>
                <form>
                    <ModalBody>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={updateName}
                            onChange={({ target }) => setUName(target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Summaryn"
                            value={updateSummary}
                            onChange={({ target }) => setUSummary(target.value)}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Priority"
                            value={updatePriority}
                            onChange={({ target }) => setUPriority(target.value)}
                        />
                        <input
                            type="teaxt"
                            className="form-control"
                            placeholder="Deadline"
                            value={updateDeadline}
                            onChange={({ target }) => setUDeadline(target.value)}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Completed"
                            value={updateCompleted}
                            onChange={({ target }) => setUCompleted(target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={() => toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onSubmit={updateDatabase}type="submit" className="btn btn-outline-success">Update</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );
}
export default EditTask; 
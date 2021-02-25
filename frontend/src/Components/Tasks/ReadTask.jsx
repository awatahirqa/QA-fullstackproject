import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { Task_URL } from '../CONSTS.json';
import ListTask from './ListTask';
const ReadTask = ({ msg , trigger}) => {

    // states
    const [taskList, setTaskList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // useEffect -> triggers a sideEffect
    useEffect(() => {
        axios.get(`${Task_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setTaskList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <div className="row">
                {taskList.map((item) => (
                    <div className="col-md-6">
                        <ListTask key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadTask;
'use strict'
import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import { useState } from "react";
import {Task_URL} from '../CONSTS.json'

const CreateTask  = ({trigger}) => {
   
        // states for form
        const [name, setName] = useState('');
        const [summary, setSummary] = useState('');
        const [priority, setPriority] = useState(0);
        const [deadline, setDeadline] = useState('');
        const [completed, setCompleted] = useState(false);
       
    
        const create = (e) => {
            e.preventDefault(); 
            axios.post(`${Task_URL}/create`, {name,summary,priority,deadline,completed})
                .then((res) => {
                    // console.log(res.data);
                    clearValues();
                    trigger(res.data);
                }).catch((err) => {
                    trigger(err.data);
                })
        }
    
        const clearValues = () => {
            setName('');
            setSummary('');
            setPriority(0);
            setDeadline('');
            setCompleted(false);
        }
    
        return(
            <div className="bg-light border-right" id="sidebar">
                <Card>
                    <CardBody>
                        <CardTitle>Create New Goal</CardTitle>
                        <form onSubmit={create}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Name"
                                value={name}
                                onChange={({target}) => setName(target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Summary"
                                value={summary}
                                onChange={({ target }) => setSummary(target.value)}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Priority"
                                value={priority}
                                onChange={({ target }) => setPriority(target.value)}
                            />
                            <input
                                type="taxt"
                                className="form-control"
                                placeholder="Deadline"
                                value={deadline}
                                onChange={({ target }) => setDeadline(target.value)}
                            />
                            <input
                                type="boolean"
                                className="form-control"
                                placeholder="Comleted"
                                value={completed}
                                onChange={({ target }) => setCompleted(target.value)}
                            />
                            <br/>
                            <button type="submit" className="btn btn-outline-success col-md-12">Add</button>
                        </form>
                    </CardBody>
                </Card>
            </div>     
        )
    }
export default CreateTask
'use strict'

import CreateTask from "../Sidebar/CreateTask"
import ReadTask from "../Tasks/ReadTask"

const Home = ()=>{
    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }
return (

<div className = "row">
    <div className = "col-md-2">
    <CreateTask/>
    </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadTask msg={msg} trigger={trigger}/>
                </div>
    </div>
    </div>
    







)
}

export default Home;
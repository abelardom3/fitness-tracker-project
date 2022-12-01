import React, { useContext } from "react";
import SingleLogs from './singleLogs'
import InputContext from "../Context/InputContext";


const Logs = () => {

    const { logs } = useContext(InputContext)

    return (
        <div>
            <h1 className="log-header">View logs</h1>
            <div className="log-container">
                {logs.length === 0 && <div className="noLogs-text">No Logs Yet </div>}
                {logs.map((log) => (
                    <SingleLogs log={log} key={log.fit_id} />
                ))}
            </div>
        </div>

    )
}

export default Logs

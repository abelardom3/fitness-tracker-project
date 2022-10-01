import React from "react";
import SingleLogs from './singleLogs'



const Logs = ({ logs, updateLogs }) => {
    return (
        <div className="log-container">
            <h1>View logs</h1>
            {logs.map((log) => (
                <SingleLogs log={log} key={log.fit_id} updateLogs={updateLogs} />
            ))}
        </div>
    )
}

export default Logs

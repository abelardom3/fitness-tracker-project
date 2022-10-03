import React from "react";
import SingleLogs from './singleLogs'

const Logs = ({ logs, updateLogs }) => {

    return (
        <div>
            <h1 className="log-header">View logs</h1>
            <div className="log-container">

                {logs.map((log) => (
                    <SingleLogs log={log} key={log.fit_id} updateLogs={updateLogs} />
                ))}
            </div>
        </div>

    )
}

export default Logs

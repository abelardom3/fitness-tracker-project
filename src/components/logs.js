import React from "react";
import SingleLogs from './singleLogs'



const Logs = ({ logs }) => {
    return (
        <>
            <h1>view logs</h1>
            <SingleLogs logs={logs} />
        </>
    )
}

export default Logs

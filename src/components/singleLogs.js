import React, { useContext } from "react";
import { useState } from "react";
import InputContext from "../Context/InputContext";
import EditPortal from "./Portals/editPortal";




const SingleLogs = ({ log }) => {


    const [open, setOpen] = useState(false)



    return (
        <>
            <div id={log.fit_id} className="log-box" onClick={() => setOpen(true)}>
                <p className="log-text">
                    <span className="log-text-display">Workout: </span>{log.workout},
                    <span className="log-text-display"> Duration: </span>{log.duration}
                    <span className="log-text-display"> on </span>{log.to_char}
                </p>

            </div>
            <EditPortal close={() => setOpen(false)} open={open} log={log} />
        </>
    )


}

export default SingleLogs





















































// const SingleLogs = ({ log }) => {

//     const { updateLogs } = useContext(InputContext)
//     const [open, setOpen] = useState(false)

//     const handleDelete = async (id) => {
//         await axios.delete(`http://localhost:8000/api/logs/${id}`)
//         updateLogs()
//     }

//     const handleEdit = (id) => {
//         setOpen(true)
//     }

//     const closePopup = () => {
//         setOpen(false)
//     }

//     if (!open) {
//         return (
//             <div id={log.fit_id} className="log-box">
//                 <p className="log-text">
//                     <span className="log-text-display">Workout: </span>{log.workout},
//                     <span className="log-text-display"> Duration: </span>{log.duration}
//                     <span className="log-text-display"> on </span>{log.to_char}
//                 </p>
//                 <div className="log-btn">
//                     <button className='edit-btn' onClick={() => { handleEdit(log.fit_id) }}><ion-icon name="create"></ion-icon></button>
//                     <button className="delete-btn" onClick={() => { handleDelete(log.fit_id) }}><ion-icon name="trash"></ion-icon></button>
//                 </div>
//             </div>
//         )
//     } else {
//         return < EditPopup close={closePopup} log={log} />
//     }

// }

// export default SingleLogs
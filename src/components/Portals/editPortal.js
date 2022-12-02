import ReactDOM from "react-dom"
import EditPopup from "../editPopup";

const EditPortal = ({ close, open, log }) => {

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="over-lay">
                <div className="module-box">
                    <button className='close-pop' onClick={() => close()}>X</button>
                    <div className="pop-header"><h1 style={{ padding: '5px' }}>Edit</h1></div>
                    <EditPopup log={log} close={close} />

                </div>
            </div>
        </>, document.getElementById('portal')
    )
}

export default EditPortal
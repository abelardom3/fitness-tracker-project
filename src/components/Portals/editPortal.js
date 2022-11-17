import ReactDOM from "react-dom"


const EditPortal = ({ close, open, log }) => {

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="over-lay">
                <div className="module-box">
                    <h1>hello edit page: {log.fit_id}</h1>
                    <button onClick={() => close()}>close</button>
                </div>
            </div>
        </>, document.getElementById('portal')
    )
}

export default EditPortal
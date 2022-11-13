import { useContext } from "react"
import InputContext from "../Context/InputContext"
import Header from "./header"
import InputForm from "./InputLogs/inputForm"
import Logs from "./logs"


const HomePage = () => {

    const { logs, updateLogs } = useContext(InputContext)


    return (
        <div className='container'>
            <Header />
            <div className='main-page'>
                <InputForm />
                <Logs logs={logs} updateLogs={updateLogs} />
            </div>

        </div>
    )
}

export default HomePage
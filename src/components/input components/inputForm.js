import e from "cors";
import React, { useState } from "react";
import InputField from "./inputField";


const InputForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
    }


    return (
        <>
            <form className="input-form" onSubmit={handleSubmit} >
                <h1>Logger</h1>
                <div className="input-box">
                    <InputField />
                </div>
            </form>
        </>
    )
}


export default InputForm

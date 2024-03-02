import React, { useState } from "react";

const Editor = ({ wallet, submitJoke }) => {

    if (!wallet.connected) {
        return null;
    }

    const handleSubmit = (event) => {
        submitJoke()
    }

    return (
        <div className="joke-edit-container">
            <form className="form">
                <button
                    type="button"
                    className="form-button"
                    onClick={handleSubmit}
                >
                    Shoot! 🎙
                </button>
            </form>
        </div>
    )
}

export default Editor;
/* eslint-disable react-hooks/rules-of-hooks */
import Page2 from "./Page2";
import { useState } from "react";

function setup() {
    const [value, setValue] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function handleValues(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <section className="container">
                <div className="logo">
                    {" "}
                    <img src="./images/icon-star.svg" alt="" />
                </div>
                {!isSubmitted ? (
                    <div className="innerContainer">
                        <h2> How did we do?</h2>
                        <p>
                            {" "}
                            Please let us know how we did with your support request. All
                            feedback is appreciated to help us improve our offering!
                        </p>
                        <div className="button">
                            <button className="btn" onClick={handleValues} value="1">
                                1
                            </button>
                            <button className="btn" onClick={handleValues} value="2">
                                2
                            </button>
                            <button className="btn" onClick={handleValues} value="3">
                                3
                            </button>
                            <button className="btn" onClick={handleValues} value="4">
                                4
                            </button>
                            <button className="btn" onClick={handleValues} value="5">
                                5
                            </button>

                        </div>
                        <button className="submit" onClick={onSubmit}>
                            submit{" "}
                        </button>
                    </div>
                ) : (
                    <Page2 value={value} />
                )}
            </section>
        </>
    );
}

export default setup;

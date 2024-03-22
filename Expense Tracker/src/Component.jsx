import React from "react";
import UseContext from "./Contexts/UseContext";
import { useContext } from "react";

const Component = () => {
    const { count, setCount } = useContext(UseContext);
    function submit(){
        
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-full w-1/2 flex flex-col items-center">
                {/* //below div for graph */}
                <div className="border border-red-400 h-[300px] w-full">

                </div>

                {/* //input field for adding the expense */}
                <div className="border border-blue-400 h-20 w-full">
                    <form action="submit">
                        <label htmlFor="date">Choose Date:</label>
                        <input type="date" name="" id="" />
                        <label htmlFor="reason">Reason:</label>
                        <input type="text" placeholder="Enter Reason"/>
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" name="" id="" placeholder="Enter Amount"/>
                        <button onClick={submit()}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Component;

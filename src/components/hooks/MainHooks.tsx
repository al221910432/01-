import React from "react";
import Contador from "../common/Contador";
import ContadorConCustomHook from "../common/ContadorConCustomHook";

const MainHooks = () => {
    return (
        <div>
            <h1>MainHooks</h1>
            <hr />
            <Contador/>
            <ContadorConCustomHook/>
        </div>
    )
}

export default MainHooks
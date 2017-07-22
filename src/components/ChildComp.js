import React from "react";
import ParentComp from "./ParentComp";

export default class ChildComp extends ParentComp {

    render() {
        return (
            <div>
                <ParentComp/>
                Child
            </div>
        );
    }
}

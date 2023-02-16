export { };
Object.defineProperty(exports, "App", {
    enumerable: true,
    get: ()=>App,
    configurable: true
});
exports.App;
import React from "react";
const App = ()=>{
    return React.createElement("main", {
        className: "akari"
    }, "Hello", "swc", "plugin");
};

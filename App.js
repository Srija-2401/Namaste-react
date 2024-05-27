const heading = React.createElement("h1",{},"Hello World");
console.log(heading); //this heading is nothing but an object it generlly creates an object not a h1 tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//right here the object gets rendered into the html and it converts the object into the h1 tag and keeps it there 

//nested elements 

// <div id="parent">
//     <div id="child">
//         <h1>Hey h1 here</h1>
//     </div>
// </div>

const parent = React.createElement("div",{id : "parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"Hey h1 here")
    )
)

root.render(parent);


//siblings

// <div id="parent">
//     <div id="child">
//         <h1>Hey h1 here</h1>
//         <h2>Hey h2 here</h2>
//     </div>
// </div>

const yo = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
       React.createElement("h1",{key:"ye"},"Hey h1 here"),
       React.createElement("h2",{key:"yp"},"Hey h2 here")
    ])
)

root.render(yo);
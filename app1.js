let n = 0;


//React Syntax
function render2() {
    const title = React.createElement('h1', {},
        'Bonjour tout le monde',
        React.createElement("span", {}, n)
    )

    console.log(title);
    ReactDOM.render(title, document.querySelector("#app"));
}

//Old javascript Syntax
function render(){
    document.querySelector("#app").innerHTML = "<h1> Bonjour tout le monde </h1> <span> "+ n+ "</span>"
}

window.setInterval( () => {
    n++
    render();
}, 100)


let n = 0;
const items =[
    "Element 1",
    "Element 2",
    "Element 3"
]

function numberFormat(n){
    return n.toString().padStart(2, '0')
}

//React Syntax
function render() {
    const title = <React.Fragment> <h1 align="center" id={"title"+n}> 
        Hey guys  &#128540;  <span> {numberFormat(n)} </span> 
    </h1>
    <ul>
        {items.map((item,k) => <li key={k}>{item}</li>)}
    </ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector("#app"));
}

//Old javascript Syntax
function render2(){
    document.querySelector("#app").innerHTML = "<h1> Bonjour tout le monde </h1> <span> "+ n+ "</span>"
}

window.setInterval( () => {
    n++
    render();
}, 1000)


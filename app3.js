// function Welcome(props) {
//     return <div>
//         <h2> Hellooo {props.name}</h2>
//         <p> {props.children}</p>
//     </div>
// }

function WelcomeFunc ({ name, children }) {
    return <div>
        <h2> Hellooo {name}</h2>
        <p> {children}</p>
    </div>
}

class Welcome extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return <div>
        <h2> Hellooo {this.props.name}</h2>
        <p> {this.props.children}</p>
    </div>
    }
}

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date: new Date()})
    }

    render(){
        const date = new Date();
        return <div>
            Il est {this.state.date.toLocaleDateString()} :: {this.state.date.toLocaleTimeString()}
        </div>
    }
}


class Incrementer extends React.Component{

    constructor(props){
        super(props)
        this.state = {n : props.start}
        this.timer = null
    }

    componentDidMount(){
        window.setInterval(this.increment.bind(this),1000)
    }

    componenttillUnmount(){
        window.clearInterval(this.timer)
    }

    increment(){
        this.setState((state, props)=> ({n: this.state.n + props.step}))
}


    render(){
         return <div>
            Valeur : {this.state.n}
         </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

const Home =()=>{
    return <div>
        <Welcome name="skious" />
        <Welcome name="Sohaib " />
        <Clock />
        <Incrementer start={10 }/>
        <Incrementer start={100} step= {10}/>
    </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'))
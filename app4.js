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
        this.state = {n : props.start, timer : null}
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount(){
        this.play()
    }

    componenttillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment(){
        this.setState((state, props)=> ({n: this.state.n + props.step}))
    }

    toggle(){
        this.state.timer ? this.pause() : this.play()
    }

    label(){
        return this.state.timer ? "Pause" : "Lecture"
    }

    pause(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer : null
        })

    }

    play(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer : window.setInterval(this.increment.bind(this),1000)
        })
    }

    reset(){  
        this.pause();
        this.play();
        this.setState((state, props)=> ({n: this.props.start}))
   
        
    }
    render(){
         return <div>
            Valeur : {this.state.n}
            
        <button onClick={this.toggle}>{this.label()}</button> 
        <button onClick={this.reset}>Réinitialiser</button> 
         </div>
    }
}
Incrementer.defaultProps = {
    start: 0,
    step: 1
}

class ManualIncrementer extends React.Component{

    constructor(props){
        super(props)
        this.state = {n:0}
    }

    render(){
        return <div>Valeur : {this.state.n}
        <button onClick={this.increment.bind(this)}>Incrémenter</button>
        </div>
    }
    increment(e){
        console.log(e);
        this.setState((state, props)=> ({n: this.state.n + 1}))
}
}

const Home =()=>{
    return <div>
        <Welcome name="skious" />
        <Welcome name="Sohaib " />
        <Incrementer />
    </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'))
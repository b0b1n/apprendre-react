const scaleNames= {
    c : 'Celsius',
    f : 'Fahrenheit'
}

function BoilingVerdict({celsius}){
    if(celsius >= 100){
        return <div className="alert alert-danger ">L'eau bout</div>
    }else if(celsius <= 0 ){
        return <div className="alert alert-primary">L'eau est gelée</div>
    }else
    return <div className="alert alert-info">L'eau est pour le moment liquide</div>
}

function Button({type, children}){
    const className = "btn btn-"+type;
    return <button className={className}>{children}</button>
}

function PrimaryButton({children}){
    return <Button type="primary" >{children}</Button>
}

function SecondaryButton({children}){
    return <Button type="secondary" >{children}</Button>
}

function LightButton({children}){
    return <Button type="light" >{children}</Button>
}

function Column2({left, right}){
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}


class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale];
        return <React.Fragment>
            <div className="form-group m-2">
                <label htmlFor={name} >Température (en {scaleName})  </label>
                <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>
            </div>
        </React.Fragment>
    }
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32 )* 5/9
}

function toFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

function tryConvert(temperature,convert){
    const value = parseFloat(temperature)
    if(Number.isNaN(value)) return ;
    return (Math.round(convert(value)*100) / 100).toString()
}

class Calculator extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            scale : 'c',
            temperature: 99
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature){
        this.setState({
            scale : 'c',
            temperature
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale : 'f',
            temperature
        })
    }

    render(){
        const {temperature, scale } = this.state 
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
        return <div>
{/*             
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
             */}
            <Column2 left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>} 
            right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>} />
            <BoilingVerdict celsius={celsius}/>
            
            {/* <Button type="primary">Envoyer</Button>
            <PrimaryButton>Envoyer</PrimaryButton>
            <SecondaryButton>Envoyer</SecondaryButton>
            <LightButton>Envoyer</LightButton>
         */}
        </div>
    }

}


ReactDOM.render(<Calculator />, document.getElementById('app'))
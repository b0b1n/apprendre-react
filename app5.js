function Field({name, value, onChange, children}){
        return <div className="form-group mt-2 " >
            <label htmlFor={name} className="ps-4 mb-2">{children} :</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
        </div>
}

function Checkbox({name, value, onChange, children}){
    return <div className="form-check mt-4 ms-3" >
            <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input" />
            <label htmlFor={name} className="form-check-label">{children}</label>
        </div>
}


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // nom : ["Demo2", "Demo3"]
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            // nom: Array.from(e.target.selectedOptions).map(o => o.value)
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const data = JSON.stringify(this.state)
        this.setState({
            nom : '',
            prenom : '',
            newsletter : false
        })
    }

    render() {
        return <form className="container mt-3 p-3 pt-4 w-50 rounded-4 bg-light bd-1" onSubmit={this.handleSubmit}>
            <div className="w-100 bg-secondary text-light bg-gradient ps-5 pt-2 pb-2 rounded mb-2">
                <center>Mon formulaire</center>
            </div>
            {/* <input type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/> */}
            {/* <textarea type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}></textarea> */}
            {/* <select value={this.state.nom} onChange={this.handleChange} multiple>
                <option value="Demo1">Demo 1</option>
                <option value="Demo2">Demo 2</option>
                <option value="Demo3">Demo 3</option>
            </select> */}
            {/* <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
            {this.state.checked ? <div>Un message affiché si on coche le checkbox</div> : null } */}
            
            <Field name="nom" value={this.state.nom} onChange={this.handleChange} >Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange} >Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange} >S'abonner à la newsletter</Checkbox>
            <div className="form-group">
                <center>
                <button className="btn btn-primary middle ">Envoyer</button>
                </center>
            </div>
            {/* <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom" />
            </div>  
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom" />
            </div>  
            <div>
                <label htmlFor="newsletter">S'abonner à la newsletter?</label>
                <input type="checkbox" value={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter" />
            </div>
            <input type="text" defaultValue="Coco" />
         */}
         </form>
    }
}

ReactDOM.render(<Home />, document.querySelector('#app'))
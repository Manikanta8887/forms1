import { Component } from "react"
import "./Forms.css"

class LoginForms extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:""
        }
        console.log(this.state)
    }
    handleform=(e)=>{
        e.preventDefault()
    }

    render(){

        return (
            <>
            <h1>Form:</h1>
            <form onSubmit={this.handleform}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  name="name" onChange={(e)=>this.setState({name:e.target.value})}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>this.setState({email:e.target.value})}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>this.setState({password:e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}
export default LoginForms
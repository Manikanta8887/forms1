import { Component } from "react";
import "./Forms.css"

class LoginForms extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            Formdata:[]
        }
    }
        handleSubmit=(e)=>{
            e.preventDefault()
            const{name,email,password}=this.state
            this.setState({Formdata:[...this.state.Formdata,{name,email,password}]})
        }
        handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }
    render(){
        console.log(this.state)
        return(
            <>
            <h1>Login Forms:</h1>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="username" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="email" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="password" onChange={this.handleChange} />
            <button type="submit">Submit</button>
            </form>

            {this.state.Formdata.length ? 
            this.state.Formdata.map((value,index)=>{
                return(
                    <table border={1} cellPadding={5} cellSpacing={5}>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }) : "Loading..."
            }
            </>
        )
    }

}

export default LoginForms
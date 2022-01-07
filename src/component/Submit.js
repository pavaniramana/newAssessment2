import React, { Component } from 'react';
import  './StyleApp.css';

class Submit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             department:"",
             rating:0,
             value:false,
             employees : []
        }
    }
    changeHandler=(event)=>{
        this.setState({ [event.target.name]:event.target.value})
   
    }
    handleSubmit = () =>{
        const tempObj = {
            name : this.state.name,
            dept : this.state.department,
            rating : this.state.rating
        }
        const tempArr = [...this.state.employees];
        tempArr.push(tempObj)
        this.setState({employees:tempArr})
    }

    onCreateEmploy = () => {
        console.log(this.state);

    }
    
    render() {
        return (
            <div className='page'>
                <div>
                    <h1>EMPLOYEE FEEDBACK FORM</h1> 
                    <form>
                        <label className='value'>Name:<input type="text" id='text' name="name" value={this.state.name} onChange={this.changeHandler}></input></label>
                        <br />
                        <label className='value'>Department:<input type="text" id='text' name="department" value={this.state.department} onChange={this.changeHandler}></input></label>
                        <br />
                        <label className='value'>Rating:<input type="number" id='text' name="rating" value={this.state.rating} onChange={this.changeHandler}></input></label>
                        <br />
                    </form>
                    <button onClick={this.handleSubmit} className='btn'>Submit</button>
                </div>
                <br />
                <hr />
                <div className='box'>
                {this.state.employees.map((value,index)=>{
                    return (
                    <div className='innerbox'>
                        <span>name:{value.name} | </span>
                        <span>department:{value.dept} | </span>
                        <span>rating:{value.rating} | </span>
                    </div>
                    )
                })
            
                }
                </div>
        </div>
        )
    }
}
export default Submit;

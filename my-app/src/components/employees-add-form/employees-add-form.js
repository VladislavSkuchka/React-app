import React from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            salery: ''
        }
    }


    onValueChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salery);
        this.setState({
            name: '',
            salery: ''
        })
    }

    render() {
        const{name, salery} = this.state;

        return (
            
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name of employee" 
                        name="name" 
                        value={name}  
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salery in $?" 
                        name="salery" 
                        value={salery}  
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
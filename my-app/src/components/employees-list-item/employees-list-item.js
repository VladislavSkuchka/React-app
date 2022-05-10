import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            color: false,
            star: false
        }
    }

    onToggleIncrease=()=>{
        this.setState(({color})=>({
            color: !color
        }))
    }

    onLikeToggle=()=>{
        this.setState(({star})=>({
            star: !star
        }))
    }

    render(){
        const {name, salary, onDelete}=this.props;
        const {color} = this.state;
        const {star} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if(color){
            classNames +=" increase";
        }

        if(star){
            classNames +=" like"
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                onClick={this.onLikeToggle}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick ={this.onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }


}

export default EmployeesListItem;
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const element = data.map(item=>{
        const {id, ...itemProp} = item;
        return(
            <EmployeesListItem 
                key={id}
                {...itemProp} 
                 onDelete={()=> onDelete(id)}   
                />
        ) 
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;
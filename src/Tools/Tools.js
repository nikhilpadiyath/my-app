import React from 'react';
import './Tools.css';
import AddNew from '../components/AddNew.js';
function Tools(props) {
    console.log("RENDER TOOLS");
    
        const {
            children,
            onAction,
            labelValue,
            onAdd,
            count,
            onRefresh
        } = props;
        
        return (
           
            <div className= "list-tools">
                <div className="list-header">
                    <select value = {labelValue} onChange= {onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non-Active</option>
                    </select>
                    <AddNew onAdd = {onAdd}/>
                    <button className="refresh" onClick= {onRefresh}>  Refresh </button>
                </div>
                {children}
                <div className="list-footer">
                    Total {count} items
                </div>
            </div>
        );
    }


export default Tools;
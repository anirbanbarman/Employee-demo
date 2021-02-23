import React, { Component } from 'react';
import "./employee.css"
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                manager:["Anirban",null,undefined,"Rahul","","Suman","Anirban","Ram","Suman","","Shyam","Titun"],
                lead:["sumu","sumu","sumu","sumu",null,undefined,"Rahul","",undefined,undefined,"Ram","Suman","","Shyam","Titun"],
                associate:["Titun",null,undefined,"Rahul","","Suman","Anirban","Ram","Suman","","Shyam","Titun"]

            }
        }
    }


    render() {
        const removedNullManager=this.state.employee.manager.filter(a=>a);
        const removedNullLead=this.state.employee.lead.filter(a=>a);
        const removedNullAssociate=this.state.employee.associate.filter(a=>a);

        const removeDublicateManager=[...new Set(removedNullManager)];
        const removeDublicateLead=[...new Set(removedNullLead)];
        const removeDublicateAssociate=[...new Set(removedNullAssociate)];



        return ( <div class="wrapper">
        <div >
            <h1>Remove Null Undefined and empty</h1>
            <h3>Manager: </h3>{removedNullManager.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
            <h3>Lead: </h3>{removedNullLead.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
            <h3>Associate: </h3>{removedNullAssociate.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
        </div>
        <div>
            <h1>Remove Dublicate</h1>
            <h3>Manager: </h3>{removeDublicateManager.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
            <h3>Lead: </h3>{removeDublicateLead.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
            <h3>Associate: </h3>{removeDublicateAssociate.map((obj,i)=>{
                return <p>{i+1 }:{obj}</p>
            })}
        </div>
        
        
        </div> );
    }
}

export default Employee;
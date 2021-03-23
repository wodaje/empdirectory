import React from "react";
import API from "./utils/API"
import {Component} from "react"
import Table from "./components/Table"

// setting up class component
class App extends Component {
  
  state = {

    employees : []

  }

// React mounting on states   
  componentDidMount(){
    this.apiEmployee()
    
  }

//Set state with api call 
  apiEmployee = async () =>{

    const apiResponse = await API.getAllEmployees()
    
    this.setState({
      employees : apiResponse.data.results
      
    })
  }

  // sets front end display framework
  render () {
    
    return (
        
  <div>
    <h1>Employee Directory Magic</h1>  

      <Table employees = {this.state.employees}/>

  </div>
    
    )
  }
}

export default App;

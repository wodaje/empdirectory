import React from "react";
import API from "./utils/API"
import {Component} from "react"
import Table from "./components/Table"

class App extends Component {
  
  state = {

    employees : []

  }

  componentDidMount(){
    this.apiEmployee()
    

  }

  apiEmployee = async () =>{

    const apiResponse = await API.getAllEmployees()
    
    this.setState({
      employees : apiResponse.data.results
      
    })
  }

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

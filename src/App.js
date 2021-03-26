import React from "react";
import API from "./utils/API";
import { Component } from "react";
import Table from "./components/Table";

// setting up class component
class App extends Component {
  state = {
    employees: [],
    allEmployees: [],
  };

  // React mounting on states
  componentDidMount() {
    this.apiEmployee();
  }

  //Set state with api call
  apiEmployee = async () => {
    const apiResponse = await API.getAllEmployees();

    this.setState({
      employees: apiResponse.data.results,
      allEmployees: apiResponse.data.results,
    });
  };

  filterEmployee = (e) => {
    const filterList = this.state.allEmployees.filter((employee) => {
      return employee.name.last.includes(e.target.value);
    });

    this.setState((previous) => {
      return { ...previous, employees: filterList };
    });
  };

  sortEmployee = (e) => {
    const sortList = this.state.employees.sort(e.target.value);

    this.setState((previous) => {
      return { ...previous, employees: sortList };
    });
  };


  render() {
    return (
      <div>
        <h1>Employee Directory Muggle</h1>
        <h4>
          <br></br>
        </h4>
        <h4>
        <p>Search:
        <input
          name="lastName"
          onChange={this.filterEmployee}
          type="text"
          placeholder="Last Name"
        />
        </p>
        </h4>
        <h4>
        <br></br>
        <p>Sort: 
        <button onClick={this.sortEmployee}>Last Name</button>
        <button onClick={this.sortEmployee}>First Name</button>
        <button onClick={this.sortEmployee}>Gender</button>
        </p>
        </h4>
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default App;

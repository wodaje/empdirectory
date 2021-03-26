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

  render() {
    return (
      <div>
        <h1>Employee Directory Magic</h1>
        <h2>
          {" "}
          <br></br>{" "}
        </h2>
        <input
          name="lastName"
          onChange={this.filterEmployee}
          type="text"
          placeholder="Last Name"
        />

        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default App;

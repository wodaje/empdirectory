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
    const id = e.target.value;
    let filterList = [];

    switch (id) {
      case "first":
        filterList = this.state.employees.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );

        break;

      case "last":
        filterList = this.state.employees.sort((a, b) =>
          a.name.last > b.name.last ? 1 : -1
        );

        break;
    }
    this.setState((previous) => {
      return { ...previous, employees: filterList };
    });
  };

  render() {
    return (
      <div>
        <h1>The Matrix Slave Directory</h1>
        <h4>
          <br></br>
        </h4>
        <h4>
          <p>
            Search *
            <input
              name="lastName"
              onChange={this.filterEmployee}
              type="text"
              placeholder="Last Name"
            />
            *{" "}
          </p>
        </h4>
        <h4>
          <br></br>
          <p>
            Sort -
            <button
              value="last"
              onClick={this.sortEmployee}
              className="btn btn-success"
            >
              Last Name
            </button>
            <button
              value="first"
              onClick={this.sortEmployee}
              className="btn btn-warning"
            >
              First Name
            </button>
          </p>
        </h4>
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default App;

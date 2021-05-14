import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      courses: [],
      searchUser: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/alexandru-pit/repoJson/employee')
      .then(response => response.json())
      .then(employeesServ => this.setState({ employees: employeesServ }));
  }

  onSearchChange = event => {
    this.setState({ searchUser: event.target.value });
  };

  render() {
    const { employees, searchUser } = this.state;
    const filteredEmployeesList = employees.filter(employee =>
      (employee.prenume.toLowerCase() + " " + employee.nume.toLowerCase()).startsWith(searchUser.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>The evolution of the employees' knowledge</h1> 

        <SearchBox onSearchChange={this.onSearchChange}/>

        <CardList filteredEmployees={filteredEmployeesList} />
            
      
      </div>
    );
  }
}

export default App;


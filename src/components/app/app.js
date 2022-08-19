import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Rob', salary: 200, increase: true, liked: false, id: 1},
        {name: 'Bob', salary: 300, increase: false, liked: false, id: 2},
        {name: 'Matt', salary: 500, increase: true, liked: false, id: 3}
      ]
    }
  }

  deleteItem = (id) =>{
    console.log('inside')
    this.setState(({data})=>{
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data = {this.state.data}
          onDelete = {this.deleteItem} />
          <EmployeesAddForm />
      </div>
    )
  }
}

export default App;

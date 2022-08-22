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
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = (id) =>{
    this.setState(({data})=>{
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) =>{
    let newItem = {
      name: name,
      salary: salary,
      increase: false,
      liked: false,
      id: this.maxId++
    }
    this.setState(({data})=>{
      let newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  onToggleIncrease = (id) =>{

    this.setState(({data})=>({
      data: data.map(item=>{
        if(item.id === id){
          return {...item, increase: !item.increase}
        }
        return item
      })
    }))
  }

  onToggleRise = (id) =>{
    this.setState(({data})=>({
      data: data.map(item=>{
        if(item.id === id){
          return {...item, liked: !item.liked}
        }
        return item
      })
    }))
  }

  serchEmp = (items, term) => {
    if (term.length === 0){
      return items
    }

    return items.filter(item =>{
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) =>{
    this.setState({term})
  }

  filterPost = (items, filter) =>{
    switch (filter){
      case 'rise':
        return items.filter(item => item.rise)
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000)
        default:
          return items
    }
  }

  onFilterSelect = (filter) =>{
    this.setState({filter})
  }

  render(){

    const {data, term, filter} = this.state
    const emplCounter = this.state.data.length
    const emplIncr = this.state.data.filter(item=> item.increase).length
    const visibleData = this.filterPost(this.serchEmp(data, term), filter)

    return (
      <div className="app">
          <AppInfo 
          emplCounter = {emplCounter}
          emplIncr = {emplIncr}
          />
          <div className="search-panel">
              <SearchPanel
              onUpdateSearch = {this.onUpdateSearch}/>
              <AppFilter
              filter = {filter}
              onFilterSelect = {this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
          data = {visibleData}
          onDelete = {this.deleteItem}
          onToggleIncrease = {this.onToggleIncrease}
          onToggleRise = {this.onToggleRise} />
          <EmployeesAddForm 
          onAdd = {this.addItem}/>
      </div>
    )
  }
}

export default App;

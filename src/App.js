import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Search from './components/Search';
import axios from 'axios';

class App extends Component {
  state = { 
    
   }
  constructor(){
    super();
    this.state = {
      city:"Pune",
      temp: undefined,
      max: undefined,
      min: undefined,
      description:""
    };
  }

  updateWeatherData(city){
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67cc74cb53c23e2a0ffbdb4a3a82d610`
      )
      .then((response) => {
        let data = response.data;
        this.setState({
          city: data.name,
          temp: Math.floor(data.main.temp - 273.15),
          max: Math.floor(data.main.temp_max - 273.15),
          min: Math.floor(data.main.temp_min - 273.15),
          description: data.weather[0].description,
          iconId: data.weather[0].icon,
        });
        console.log(this.state);
      })
      .catch((error) => console.log(error))
      .finally();

  }

  componentDidMount(){
    this.updateWeatherData("Pune");
      
  }


  onCityChange(city){
    this.setState({city:city});
    this.updateWeatherData(city);
  }

  render() { 
    return (
      <div className="App">
        <Search></Search>
        <Card
          state={this.state}
          handleCityChange={(city) => {
            this.onCityChange(city);
          }}
        ></Card>
      </div>
    );
  }
}
 
export default App;
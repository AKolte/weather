import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import {  FormControl, Button, Form, Row } from "react-bootstrap";

class Card extends Component {
    
    constructor(){
        super();
        this.state = { 
        city:"",
     }
    }
    
    setCityText=(evt)=>{
        this.setState({city:evt.target.value})
    }

    render() { 
        return (
          <Jumbotron>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <Form
                  inline
                  onSubmit={() => this.props.handleCityChange(this.state.city)}
                >
                  <FormControl
                    type="input"
                    placeholder="Search for a city"
                    onChange={this.setCityText}
                    value={this.state.city}
                  />

                  <Button
                    bsStyle="primary"
                    onClick={() => {
                     this.props.handleCityChange(this.state.city);
                     this.setState({city:""});
                    }}
                  >
                    Search
                  </Button>
                </Form>
              </div>
            </Row>

            <h2>{this.props.state.city}</h2>

            <img
              src={`http://openweathermap.org/img/wn/${this.props.state.iconId}@2x.png`}
              alt={this.state.description}
            ></img>
            <h1>{this.props.state.temp}&deg;C </h1>
            <h4>
              Max. {this.props.state.max}&deg;C <b>|</b> Min{" "}
              {this.props.state.min}&deg;C
            </h4>
            <h4 style={{ textTransform: "capitalize" }}>
              {this.props.state.description}
            </h4>
          </Jumbotron>
        );
    }
}
 
export default Card;
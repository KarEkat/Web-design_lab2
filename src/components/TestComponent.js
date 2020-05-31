import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { DICTIONARY } from '../shared/dictionary';
import { Media } from 'reactstrap';
import {
  Breadcrumb, BreadcrumbItem,
  Button, Form, FormGroup, Input, Col
} from 'reactstrap';


class Test extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }
  render() {
    return (
      <div className="container">
        <h4>你 好</h4>
        <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="hello"
              checked={this.state.selectedOption === "hello"}
              onChange={this.onValueChange}
            />
            hello
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="thank you"
              checked={this.state.selectedOption === "thank you"}
              onChange={this.onValueChange}
            />
            thank you
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="cat"
              checked={this.state.selectedOption === "cat"}
              onChange={this.onValueChange}
            />
            cat
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      <h4>谢谢</h4>
        <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="hello"
              checked={this.state.selectedOption === "hello"}
              onChange={this.onValueChange}
            />
            hello
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="thank you"
              checked={this.state.selectedOption === "thank you"}
              onChange={this.onValueChange}
            />
            thank you
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="cat"
              checked={this.state.selectedOption === "cat"}
              onChange={this.onValueChange}
            />
            cat
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      <h4>恐龙</h4>
        <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="cat"
              checked={this.state.selectedOption === "cat"}
              onChange={this.onValueChange}
            />
            cat
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="bird"
              checked={this.state.selectedOption === "bird"}
              onChange={this.onValueChange}
            />
            bird
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="dinosaur"
              checked={this.state.selectedOption === "dinosaur"}
              onChange={this.onValueChange}
            />
            dinosaur
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Test;   
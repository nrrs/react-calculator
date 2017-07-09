import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.power = this.power.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? e.target.value : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? e.target.value : "";
    this.setState({ num2 });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0});
  }

  add(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({ result });
  }

  power(e) {
    e.preventDefault();
    const result = parseInt(this.state.num1) ** parseInt(this.state.num2);
    this.setState({ result });
  }

  render() {
    return (
      <div id="calculator-container">
        <h2>num1: {this.state.num1}</h2>
        <h2>num2: {this.state.num2}</h2>
        <h2>Result: {this.state.result}</h2>

        <div className="row">
          <input onChange={this.setNum1} value={this.state.num1} />
          <input onChange={this.setNum2} value={this.state.num2} />
        </div>

        <div className="row">
          <button onClick={this.clear}>clear</button>
          <button onClick={this.add}><span>+</span></button>
          <button onClick={this.subtract}><span>-</span></button>
          <button onClick={this.multiply}><span>*</span></button>
          <button onClick={this.divide}><span>/</span></button>
          <button onClick={this.power}><span>**</span></button>
        </div>
      </div>
    );
  }
}

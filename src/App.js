import React from 'react';
import './App.css';
import logo from "./Me.jpg";

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      text1: "",
      count: 0,
      inp: "",
      width: 300,
      range: 0,
      display: "block",
      countDipslay: 0

    }

  }

  clickTask1() {

    console.log("work");

  }

  clickTask1 = () => {

    if (this.state.text1)
      this.setState({

        text1: "button work"

      });

  }

  countEvent = () => {

    this.setState({

      count: this.state.count + 1

    });

  }

  countReset = () => {

    this.setState({

      count: 0

    });

  }

  mouseMove() {

    console.log("move");

  }

  clickAtr = (event) => {

    console.log(event.target.getAttribute("data"));

  }

  myInput = (event) => {

    if (event.target.value.length < 6) {

      this.setState({

        inp: "Меньше 6 символов"

      });

    } else {

      this.setState({

        inp: event.target.value

      });


    }

  }

  onCheck = (event) => {

    console.log(event.target.checked);

  }

  myChange = (event) => {

    console.log(event.target.value);

  }

  myChange1 = (event) => {

    console.log(event.target.options[event.target.options.selectedIndex].value);

  }

  widthChange = () => {

    this.setState({

      width: this.state.width + 3

    });

  }

  widthReset = () => {

    this.setState({

      width: 300

    });

  }

  rangeChange = (event) => {

    this.setState({

      range: event.target.value

    });

  }

  onclickNone = () => {

    if (this.state.countDipslay % 2 === 0) {

      this.setState({

        display: "none"

      });

    } else {

      this.setState({

        display: "block"

      });

    }

    this.setState({ countDipslay: this.state.countDipslay + 1 });


  }


  render() {

    const style = {
      width: "300px",
      height: "300px",
      backgroundColor: "green"

    }
    return (

      <div className="App">

        <button onClick={this.clickTask}>Task 1</button>
        <hr />
        <button onClick={this.clickTask1}>Task 2</button>
        <p>{this.state.text1}</p>
        <hr />
        <button onClick={this.countEvent}>Count</button>
        <p>{this.state.count}</p>
        <hr />
        <button onClick={this.countReset}>Reset</button>
        <hr />
        <div onMouseMove={this.mouseMove} style={style}></div>
        <hr />
        <button onClick={this.clickAtr} data="atr-1">Atr1</button>
        <button onClick={this.clickAtr} data="atr-2">Atr2</button>
        <hr />
        <input type="text" onInput={this.myInput} />
        <p>{this.state.inp}</p>
        <hr />
        <input type="checkbox" onChange={this.onCheck} />
        <hr />
        <input name="n1" value="1" type="radio" onChange={this.myChange} />
        <input name="n1" value="2" type="radio" onChange={this.myChange} />
        <input name="n1" value="3" type="radio" onChange={this.myChange} />
        <hr />
        <select onChange={this.myChange1}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <hr />
        <div style={{ border: "2px solid black", width: this.state.width.toString() + "px", height: "300px" }}></div>
        <button onClick={this.widthChange}>Width Change</button>
        <button onClick={this.widthReset}>Reset Change</button>
        <hr />
        <input onInput={this.rangeChange} type="range" min="0" max="100" defaultValue={this.state.range.toString()} />
        <p>{this.state.range}</p>
        <hr />
        <button onClick={this.onclickNone}>Push</button>
        <div style={{ display: this.state.display }}>
          <img src={logo} alt="1" />

        </div>
      </div >

    );

  }

}

export default App;

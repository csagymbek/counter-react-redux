import React, { Component } from "react";
import { connect } from "react-redux";
import { add, subtract } from "./counter";
import { updateInput } from "./input";

class App extends Component {
  render() {
    console.log(this.props);
    const { counter, add, subtract, inputValue, updateInput } = this.props;
    console.log(inputValue);

    return (
      <div className="app">
        <div className="app__counter">
          <div className="app__state">
            <h1>{counter}</h1>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => updateInput(e.target.value)}
            />
          </div>
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter, inputValue }) => ({ counter, inputValue });

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract()),
  updateInput: (inputValue) => dispatch(updateInput(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

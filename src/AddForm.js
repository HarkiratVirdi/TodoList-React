import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  onChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Add new Todo</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default AddForm;

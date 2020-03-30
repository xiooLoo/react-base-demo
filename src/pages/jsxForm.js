import { render } from 'react-dom'
import React from 'react'
import './OojsxClass.css'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const {isGoing, numberOfGuests} = {...this.state}
    alert('提交表单:\n' + isGoing + '\n' + numberOfGuests);
    event.preventDefault();
  }

  render() {
    return (
      <form className="jsx-form" onSubmit={this.handleSubmit}>
        <label>
          <span>是否参与:</span>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          参加人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="提交(submit)" />
      </form>
    );
  }
}

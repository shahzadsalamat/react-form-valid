import React, { Component } from 'react';

const emailValidation = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

const formValidation = ({ errorMessages, ...rest }) => {
  let valid = true;
  //check if any input is invalid
  const aray = Object.values(errorMessages);
  aray.forEach(val => {
    val.length > 0 && (valid = false);
  });
  //check if any input is empty
  const array = Object.values(rest);
  array.forEach(val => {
    val.length === 0 && (valid = false);
  });
  return valid;
};

class Userform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errorMessages: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    }
    this.initialState = this.state;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(this.state)) {
      alert('Form is Valid');
      //change state back to initial state
      this.setState(this.initialState);
    }
    else {
      alert('Form is not valid');
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    let errorMessages = this.state.errorMessages;
    switch (name) {
      case 'firstName':
        errorMessages.firstName = value.length < 3 && value.length > 0
          ? 'minimum 3 letters required'
          : ''
        break;
      case 'lastName':
        errorMessages.lastName = value.length < 3 && value.length > 0
          ? 'minimum 3 letters required'
          : ''
        break;
      case 'email':
        errorMessages.email = emailValidation.test(value)
          ? ''
          : 'email is invalid'
        break;
      case 'password':
        errorMessages.password = value.length < 6 && value.length > 0
          ? 'minimum 6 letters required'
          : ''
        break;
      default:
        break;
    }
    this.setState({
      errorMessages,
      [name]: value
    });
  };
  render() {
    const { errorMessages } = this.state;
    return (
      <div>
        <form className='form-wrapper' onSubmit={this.handleSubmit}>
          <div className='firstname'>
            <label>Firstname</label>
            <input
              className={errorMessages.firstName.length > 0 ? 'errorMessage-highlight' : ''}
              type='text'
              placeholder='firstname'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{errorMessages.firstName}</span>
          </div>
          <div className='lastname'>
            <label>Lastname</label>
            <input
              className={errorMessages.lastName.length > 0 ? 'errorMessage-highlight' : ''}
              type='text'
              placeholder='lastname'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{errorMessages.lastName}</span>

          </div>
          <div className='email'>
            <label>Email</label>
            <input
              className={errorMessages.email.length > 0 ? 'errorMessage-highlight' : ''}
              type='email'
              placeholder='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{errorMessages.email}</span>

          </div>
          <div className='password'>
            <label>password</label>
            <input
              className={errorMessages.password.length > 0 ? 'errorMessage-highlight' : ''}
              type='password'
              placeholder='firstname'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{errorMessages.password}</span>
          </div>
          <div className='button'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Userform;
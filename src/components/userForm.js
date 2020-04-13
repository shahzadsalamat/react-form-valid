import React, { Component } from 'react';

const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formValidation = ({errorMessages, ...rest}) => {
      let valid = true;
     const aray = Object.values(errorMessages);
      aray.forEach(val => {
        val.length > 0 &&  (valid = false);
      });

      const array = Object.values(rest);
      array.forEach(val => {
        val.length === 0 &&  (valid = false);
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(this.state)) {
      console.log('form is valid');
    }
    else {
      console.log('form is invalid');

    }
  }

  handleChange = (e) => {
    e.preventDefault();
   
    const {name, value} = e.target
    let errorMessages = this.state.errorMessages;
    switch (name) {
      case 'firstName':
        errorMessages.firstName = value.length < 3 && value.length > 0
          ? 'first name must be more than 3 letters'
          : ''
        break;
      case 'lastName':
        errorMessages.lastName = value.length < 3 && value.length > 0
          ? 'last name must be more than 3 letters'
          : ''
        break;
      case 'email':
        errorMessages.email = emailValidation.test(value)
          ? ''
          : 'email is invalid'
        break;
      case 'password':
          errorMessages.password = value.length < 6 && value.length > 0
            ? 'Enter minimum 6 letters'
            : ''
          break;
          default:
            break;
    }
    this.setState({
      [e.target.name]: e.target.value,
      errorMessages
    });
  };
  render() {

    return (
      <div>
        <form className='form-wrapper' onSubmit={this.handleSubmit}>
          <div className='firstname'>
            <label>Firstname</label>
            <input
              type='text'
              placeholder='firstname'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{this.state.errorMessages.firstName}</span>
          </div>
          <div className='lastname'>
            <label>Lastname</label>
            <input
              type='text'
              placeholder='lastname'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{this.state.errorMessages.lastName}</span>

          </div>
          <div className='email'>
            <label>Email</label>
            <input
              type='email'
              placeholder='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{this.state.errorMessages.email}</span>

          </div>
          <div className='password'>
            <label>password</label>
            <input
              type='password'
              placeholder='firstname'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span className='errorMessage'>{this.state.errorMessages.password}</span>
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
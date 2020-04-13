import React, { Component } from 'react';

class Userform extends Component {
  render() {
    return (
      <div>
        <form className='form-wrapper'>
          <div className='firstname'>
            <label>Firstname</label>
            <input
              type='text'
              placeholder='firstname'
            />
          </div>
          <div className='lastname'>
            <label>Lastname</label>
            <input
              type='text'
              placeholder='lastname'
            />
          </div>
          <div className='email'>
            <label>Email</label>
            <input
              type='email'
              placeholder='email'
            />
          </div>
          <div className='password'>
            <label>password</label>
            <input
              type='password'
              placeholder='firstname'
            />
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
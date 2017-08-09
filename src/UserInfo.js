import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class UserInfo extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      errors: {},
      mobile: '',
      email: ''
    };
  }

  userInfoIsValid = () => {
    let isFormValid = true;
    let errors = {};

    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobileReg = /^(\+91-|\+91|0)?\d{10}$/;

    if (!emailReg.test(this.state.email)) {
      errors.email = "Email is not valid";
      isFormValid = false;
    }

    if (!mobileReg.test(this.state.mobile)) {
      errors.mobile = "Mobile number is not valid";
      isFormValid = false;
    }

    this.setState({errors: errors});
    return isFormValid;
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('this is form', this);
    if (!this.userInfoIsValid()) {
      return;
    }
    const { mobile, email } = this.state;
    this.props.onChange({mobile, email})
    this.props.onNext();
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log('e', e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { mobile, email, errors } = this.state;
    const { onChange, onBack } = this.props;
    console.log('state in UserInfo', this.state);
    return (
      <div>
        <h2 className="place-title">STEP 2</h2>
        <form>
          <TextInput 
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <TextInput 
            name="mobile"
            label="Mobile"
            value={mobile}
            onChange={this.handleChange}
            error={errors.mobile}
          />

          <button 
            className="btn btn-primary"
            onClick={onBack}
          >
            Back
          </button>

          <input 
            style={{float: 'right'}}
            type="submit"
            value="Next"
            className="btn btn-primary"
            onClick={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

UserInfo.propTypes = {
	onChange: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default UserInfo;

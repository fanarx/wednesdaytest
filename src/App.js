import React, { Component } from 'react';
import PlaceInput from './PlaceInput';
import UserInfo from './UserInfo';
import ConfirmPage from './ConfirmPage';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      step: 1,
      userDetails: {
        location: '',
        email: '',
        mobile: ''
      }
    }
  }

  handleLocation = (location) => {
    console.log('handleLocation', location);
    this.setState({
      step: 2,
      userDetails: {
        ...this.state.userDetails,
        location,
      }
    });
  }

  updateUserDetails = (datails) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        ...datails
      }
    })
  }

  handleStep = (stepNum) => {
    this.setState({
      step: stepNum
    })
  }


  render() {
    console.log('state in App', this.state);
    const { step } = this.state;

    return (
      <div className="place-box">
        {step === 1 &&
          <div className="place-container">
            <h2 className="place-title">STEP 1</h2>
            <PlaceInput
             onNext={this.handleLocation}
            />         
          </div>
        }
        {step === 2 &&
          <UserInfo
           onChange={this.updateUserDetails} 
           onBack={() => this.handleStep(1)}
           onNext={() => this.handleStep(3)}
          />
        }
        {step === 3 &&
          <ConfirmPage 
            onBack={() => this.handleStep(2)}
            details={this.state.userDetails}
          />
        }
      </div>
    );
  }
}

export default App;

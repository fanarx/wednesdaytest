import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class PlaceInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('handle form submit');

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .then(() => this.props.onNext(this.state.address))
      .catch(error => console.error('Error', error))
  }

  render() {
   // const {onNext, onLocationSelect} = this.props;

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    console.log('this.state',this.state);
    return (
      <form className="place-form" onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button
         className="place-button"
         disabled={!this.state.address}
         >
         Next
        </button>
      </form>
    )
  }
}

PlaceInput.propTypes = {
	onNext: PropTypes.func.isRequired,
};

export default PlaceInput;
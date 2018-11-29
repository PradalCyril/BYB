import React, { Component } from 'react';
import './SearchBox.css';
import { NavLink } from 'react-router-dom'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';



class SearchBox extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        address: '',
      latLng : {} };
    }
  
    handleChange = address => {
      this.setState({ address });
    };
  
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.setState({ address: address, latLng: latLng }))
    };
    
    
  
    render() {
      return (
        <div className = "search_box_placing flex_content">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input 
                {...getInputProps({
                  placeholder: 'I choose a good place ...',
                  className: 'location-search-input custom_input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
        </PlacesAutocomplete>

        <NavLink onClick={() => this.props.callback(this.state.latLng)} className="bouton_go button" to="/addresspage">Go</NavLink>
        </div>
      );
    }
  }


export default SearchBox;
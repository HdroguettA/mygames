import React, { Component }  from 'react';
import './Search.css';
import AutosizeInput from 'react-input-autosize';

class Search extends Component {
  constructor (props) {
		super();
		this.state = {
			searchValue: '',
		};
	}
	updateInputValue = (input, event) => {
		const newState = {};
		newState[input] = event.target.value;
    this.setState(newState);
    document.getElementById("caret").style.margin = 0;
    document.getElementById("caret").style.animation = 0;
  };
  render () {
  return (
    <div className="search-main-content">
      <AutosizeInput
          
					autoFocus
					value={this.state.searchValue}
          onChange={this.updateInputValue.bind(this, 'searchValue')}
          className="search-input"
				/>
        <span id="caret" className="caret">|</span>
    </div>
  );
}
}
export default Search;
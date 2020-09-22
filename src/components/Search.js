import React, { Component }  from 'react';
import './Search.css';
import AutosizeInput from 'react-input-autosize';
import autocomplete from 'autocompleter';



class Search extends Component {
  
  constructor (props) {
		super();
		this.state = {
			searchValue: '',
    };
    
  }
  componentDidMount () {
    let countries = [
      { label: 'United Kingdom', value: 'UK' },
      { label: 'United States', value: 'US' }
    ];
    let input = document.getElementById("games");
    autocomplete({
      input: input,
      fetch: function(text, update) {
          text = text.toLowerCase();
          // you can also use AJAX requests instead of preloaded data
          var suggestions = countries.filter(n => n.label.toLowerCase().startsWith(text))
          update(suggestions);
      },
      onSelect: function(item) {
          input.value = item.label;
      }
  })
  }
  //<span id="caret" className="caret">|</span>
  render () {
  return (
    <div className="search-main-content">
      <input id="games" type="text" spellcheck="false" className="search-input"></input>

    </div>
  );
}
}
export default Search;
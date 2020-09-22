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
      { label: 'Pong', value: 'UK' },
      { label: 'Asteroids', value: 'US' },
      { label: 'Asteroidsasd', value: 'US' },
      { label: 'Asteroidsaa', value: 'US' }
    ];
    let input = document.getElementById("games");
    autocomplete({
      input: input,
      fetch: function(text, update) {
          text = text.toLowerCase();
          // you can also use AJAX requests instead of preloaded data
          var suggestions = countries.filter(n => n.label.toLowerCase().startsWith(text))
          update(suggestions);
          console.log(suggestions[0]);
          try {
            document.getElementById("games").value = suggestions[0].label;
          } catch (e) {
            console.log("No more suggestions")
          }
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
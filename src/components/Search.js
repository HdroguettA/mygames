import React, { Component }  from 'react';
import './Search.css';
import { Link } from "react-router-dom";
import AutosizeInput from 'react-input-autosize';
import autocomplete from 'autocompleter';
import history from './../history';

const AsteroidsPage = () => <Link to='/Asteroids'>{console.log("asteroids")}</Link>;

function setCaretPosition(elemId, caretPos) {
  var elem = document.getElementById(elemId);

  if(elem != null) {
      if(elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
      }
      else {
          if(elem.selectionStart) {
              elem.focus();
              elem.setSelectionRange(caretPos, caretPos);
          }
          else
              elem.focus();
      }
  }
}

class Search extends Component {
  
  constructor (props) {
		super();
		this.state = {
			searchValue: '',
    };
    
  }

  componentDidMount () {
    let games = [
      { label: 'Pong', value: 'UK' },
      { label: 'Asteroids', value: 'US' },
    ];
    let input = document.getElementById("games");
    autocomplete({
      input: input,
      fetch: function(text, update) {
          text = text.toLowerCase();
          // you can also use AJAX requests instead of preloaded data
          var suggestions = games.filter(n => n.label.toLowerCase().startsWith(text))
          update(suggestions);
          console.log(suggestions[0]);
          try {
            var tempValue = document.getElementById("games").value;
            document.getElementById("games").value = suggestions[0].label;
            setCaretPosition("games", tempValue.length);
          } catch (e) {
            console.log("No more suggestions")
          }
      },
      onSelect: function(item) {
          input.value = item.label;
          if (input.value == 'Asteroids') {
            console.log("Hi " + input.value)
            history.push('/Asteroids#/');
          }
      }
  })
  }
  //<span id="caret" className="caret">|</span>
  render () {
  return (
    <div className="search-main-content">
      <input id="games" type="text" spellCheck="false" className="search-input" />

    </div>
  );
}
}
export default Search;
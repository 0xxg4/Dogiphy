import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import request from 'superagent';
import GifList from './GifList';
import SearchBar from './SearchBar';
import * as serviceWorker from './serviceWorker';

class App extends React.Component { 

  constructor() {
    super();

    this.state = {
      gifs: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const giphyAPI = 'df4Kip5xanlPR49BrFPbDYar6kFWW1LT'
    const giphyURL = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${giphyAPI}`;

    request.get(giphyURL,(err, res) => {
      this.setState({gifs: res.body.data});
    }); 
  } 

  render() {
    return(
      <>
      <div className="App">
	<header className="App-header">
        <h1>Dogiphy 🐶</h1>
        <h2>the best dog gifs you have ever seen!</h2>
      </header>
     </div>
      <SearchBar onTermChange={this.handleTermChange}/>
      <GifList gifs={this.state.gifs}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

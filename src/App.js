import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data:null,
  }
  render(){
    const {data} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
              Hello&nbsp;
              {data && data.user && (<span>{data.user}</span>)}
          </p>
        </header>
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/user').then(resp => resp.json().then(data => {
      this.setState({data});
    }))
  }
}

export default App;
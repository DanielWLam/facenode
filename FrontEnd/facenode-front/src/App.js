import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="search-bar">搜索</div>
          <div className="new-topic"></div>
        </div>
        <p className="App-content">
          
        </p>
        <div className="App-footer">
          <span>首页</span>
          <span>我的</span>
        </div>
      </div>
    );
  }
}

export default App;

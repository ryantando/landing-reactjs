import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './screen/home';
import PayLendScreen from './screen/pay';
import Header from './screen/header';
import FooterScreen from './screen/footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  addData = (val) => {
    this.setState(prevState => ({
      data: [...prevState.data, val]
    }))
    console.log(this.state.data)
  }

  render() {
    return (
      <Router props={this.state.data}>
        <div className="App">
            <Header/>
              <Switch>
                <Route path="/" exact component={() => <HomeScreen addData={this.addData} data={this.state.data}/>} />
                <Route path="/pay/" component={() => <PayLendScreen  data={this.state.data}/>} />
                <Route component={HomeScreen} />
              </Switch>
            <FooterScreen/>
        </div>
      </Router>
    );
  }
}

export default App;

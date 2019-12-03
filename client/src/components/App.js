import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/survey/new" component={SurveyNew} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     //
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     //
//   }
// }
export default connect(null, actions)(App);

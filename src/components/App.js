import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {connect} from "react-redux";
import * as actionCreators from "../actions/postActions";
import ParentComp from "./ParentComp";
import ChildComp from "./ChildComp";

/*function mapStateToProps(state) {
 return { posts: state };
 }

 function mapDispatchToProps(dispatch) {
 return { actions: bindActionCreators(actionCreators, dispatch) };
 }*/

class App extends Component {
    componentWillMount() {
        let {dispatch} = this.props;
        dispatch(actionCreators.fetchPost());
    }

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <ParentComp/>
                <ChildComp/>
                <h1>{this.props.posts.posts.title}</h1>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default connect(
    state => ({posts: state.posts})
)(App)
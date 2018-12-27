import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SidePanel extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleMenuVisibility = () => {
    this.props.actions.showOrHideSideMenu();
  };

  render() {
    console.log(this.props.actions);
    let { sideMenuVisible } = this.props.examples;

    if(sideMenuVisible) {
      return (
        <div className="examples-side-panel">
          <button onClick={() => this.handleMenuVisibility()}>Hide</button>
          <div style={{ display: sideMenuVisible ? 'block' : 'none' }}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/examples">Welcome</Link>
              </li>
              <li>
                <Link to="/examples/counter">Counter Demo</Link>
              </li>
              <li>
                <Link to="/examples/reddit">Reddit API Demo</Link>
              </li>

              <li>
                <Link to="/customer">Customers</Link>
              </li>
            </ul>
            <div className="memo">
              This is a Rekit feature that contains some examples for you to quick learn how Rekit
              works. To remove it just delete the feature.
            </div>
          </div>
        </div>
        )
      } else {
        return (
          <button onClick={() => this.handleMenuVisibility()}>Hide</button>
        )
      }
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    examples: state.examples,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidePanel);

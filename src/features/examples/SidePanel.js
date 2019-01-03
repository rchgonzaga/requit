import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Nav, NavItem, NavLink } from 'reactstrap';

export class SidePanel extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleMenuVisibility = () => {
    this.props.actions.showOrHideSideMenu();
  };

  render() {
    let { sideMenuVisible } = this.props.examples;

    if(sideMenuVisible) {
      return (
        <div className="examples-side-panel">
          <button onClick={() => this.handleMenuVisibility()}>Hide</button>
          <div style={{ display: sideMenuVisible ? 'block' : 'none' }}>
            <Nav vertical>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/examples">Welcome</Link>
              </NavItem>
              <NavItem>
                <Link to="/examples/counter">Counter</Link>
              </NavItem>
              <NavItem>
                <Link to="/examples/reddit">Reddit API Demo</Link>
              </NavItem>
              <NavItem>
                <Link to="/customer">Customers</Link>
              </NavItem>
              <NavItem>
                <Link to="/sales">Sales</Link>
              </NavItem>
              <NavItem>
                <Link to="/sales/sales-form">Add Sale</Link>
              </NavItem>
            </Nav>
            <hr />
            <p>Link based</p>
            <Nav vertical>
              <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
            </Nav>
          </div>
        </div>
        )
      } else {
        return (
          ''
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

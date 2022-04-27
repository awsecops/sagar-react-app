import React from 'react';

import { withRouter } from 'react-router'
import StoreTest from './StoreTest';
import StoreReflatedTest from './StoredReflatedTest';
import { connect } from 'react-redux';
import { saveUser } from 'store-app/store';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
      // user:store.getState().user.userDetail
    };

    //bind event handler
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
    this.updateUserClick = this.updateUserClick.bind(this);
  }

  updateUserClick() {

    //dispatch event
    this.props.onUpdateUserClick({ name: "jignesh patel" });

  }

  handleClick(ev) {
    console.log(ev);

    this.setState({
      dialogVisible: true,
    });
  }

  handleSwitchVisible(visible) {
    localStorage.setItem("username", "value123");
    const { history } = this.props;
    history.push("/welcome");

    this.setState({
      dialogVisible: visible,
    });
  }


  render() {
    return (
      <div>        <h1>Open Dev Tool And Focus On Network,checkout resources details</h1>
        {/* <p>
          react、react-dom js files hosted on <strong>lib-app</strong>
        </p>
        <p>
          components hosted on <strong>component-app</strong>
        </p>
        <h4>Buttons:</h4>
        <Button type="primary" />
        <Button type="warning" />
        <h4>Dialog:</h4>
        <button onClick={this.handleClick}>click me to open Dialog</button>
        <Dialog switchVisible={this.handleSwitchVisible} visible={this.state.dialogVisible} />
        <h4>hover me please!</h4>

        <ToolTip content="hover me please" message="Hello,world!" /> */}

        <div><h1>Class componet Store example</h1></div>
        <div>Name 1 : {this.props.user?.name}</div>

        <button onClick={this.updateUserClick}>class component updation</button>
        <StoreTest></StoreTest>      
      </div>

    );
  }
}

//map properties with store
const mapStateToProps = function (state) {
  return {
    user: state.user.userDetail

  }
}

//dispatch prop to store for update event
const mapDispatchToProps = dispatch => {
  return {
    onUpdateUserClick: (user) => { // handles onTodoClick prop's call here
      dispatch(saveUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppComponent));
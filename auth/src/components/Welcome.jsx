import React from 'react';

//Sample welcome page component
export class Welcome extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

        //display username 
        username: "",
        
      };
      
    }

    componentDidMount(){
      //get user name from local storage
        const userName=localStorage.getItem('username');
        if(userName){
          this.setState({username:userName});
        }
    }
    
    render() {
        if(this.state.username){
          
            return (
        <div>
          <h1> Hello </h1> {this.state.username}
        </div>

      );}else {return null}

    }
  }
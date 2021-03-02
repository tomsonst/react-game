import React from  'react';

export default class WinPlayer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.winMessage){
      return (
        <div className="win">Your win</div>
      )
    }
    return null;
  }
}
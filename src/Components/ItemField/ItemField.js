import React from 'react';

export default class ItemField extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  
  render(){
    const {index, elem, addValueElement} = this.props;
    return (
      <div className = "item" 
          id = {index} 
          key = {`k${index}`} 
          onClick = {() => addValueElement(elem, index)}>{elem}</div>
    )
  }
}
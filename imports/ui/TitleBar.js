import React from 'react';
export default class TitleBar extends React.Component{
  render(){
    // this.props.title
    return (
      <div className="title-bar">
        <div className ="wrapper">
        <h1>{this.props.title}</h1>
        <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
        </div>

      </div>
    );
  }
}

import { Component } from "react";

export default class Home extends  Component{
   constructor(props){
    super(props);
    this.state = {
      name: "Smit"
    }
   }

  render(){
    return <>
    Welcome in React js
    Name: {this.state.name}
    </>
  }
}
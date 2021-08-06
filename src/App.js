import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import beastData from './data.json';
import SelectedBeast from './components/SelectedBeast';
 class App extends Component {
  constructor(props){
         super(props);
         this.state={
           hornsData:beastData,
          show:false,
         modalData:{},
         }
    
       }
      handleShow=(data)=>{
        this.setState({
            show:true,
            modalData:data,
           }) 
       }
       handleClose=()=>{
        this.setState({
            show:false,
           }) 
          }
  render() {
    return (
      <div>
        <Header/>
        <Main selectedModal={this.handleShow} data={this.state.hornsData}/> 
        <SelectedBeast handleExit={this.handleClose} showData={this.state.show} modalData={this.props.modalData}/>
        <Footer/>     
         </div>
    )
  }
}

export default App;

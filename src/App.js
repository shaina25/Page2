import React from 'react';
import './App.css';
import Chart from './Chart.js';
import ReactDOM from "react-dom";


class App extends React.Component{

  

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
    
  }
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    
    this.setState({
      chartData:{
        labels: ['January', 'Feb', 'March', 'April', 'May', 'June','July','Aug','Sept','Nov','Dec'],
        datasets:[
          {
            label:'Contribution',
            data:[
              20,
              15,
              8,
              4,
              4,
              10,
              3,
              8,
              9,
              2,
              1,
              5


            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
     render(){
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} style={{height:"100%",width:"100%", marginLeft:"0px"}} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview </div>);
      }
      return (
        <div>  
      <div>
        <ul>
        
        <li><a id="Projects">Projects</a></li>
         <li><a id="Stars" >Stars</a></li>
        <li><a id="Following">Following</a></li>
        <li><a id=" Repositories">Repositories</a></li>
        <li><a id=" Overview">Overview</a></li>
       
        </ul>
        </div>
       <m>" WORDS are inexhaustible source of magic. "</m> 
       
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}> </form>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
            
          
        <div className="imgPreview">
          {$imagePreview} 
          
        </div>
       
        
        <div>
          <button4 className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image </button4> </div>
      
      <h1>YOUR REPOSITORIES [ Recently opened ]</h1>
       <div class="row">
        
       
        <div class="column">
        <img src={process.env.PUBLIC_URL+"book2.jpg"}  style={{width:350}}/>
        </div>
       <div class="column">
         <img src={process.env.PUBLIC_URL+"book2.jpg"}  style={{width:350}}/>
       </div>
       <button2><b id="OPEN2">OPEN </b></button2>
       <button3><b id="OPEN1">OPEN </b></button3>
     
      
      </div>
      <div class="chart-container">
          <canvas id="myCanvas"></canvas>
          <Chart chartData={this.state.chartData} contribution="2020" legendPosition="bottom"/>
      </div>
      
      </div>
      </div>
    )
      }}



export default App;
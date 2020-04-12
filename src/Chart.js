import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    year:'2020'
  }

  render(){
    return (
      <div className="chart">
        

        <Line
        options={{responsive: true}}
        options={{ maintainAspectRatio: false }}
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'CONTRIBUTION  IN  '+this.props.year,
              fontSize:25
              
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
            
          }}
        />

        
      </div>
    )
  }
}

export default Chart;
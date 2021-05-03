import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


export class Getc19data extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }

    componentDidMount() {
        axios.get("http://192.168.29.140:5000/getdata")
            .then (response => {
                // console.log(response)
                this.setState({items: response.data})
                // console.log("Items: " + this.items)
        })
        .catch(error => {
            console.log("Error: " + error)
        })
    }     
    render(){
        const { items } = this.state;
        console.log("Weeks: " + items.week)
        console.log("Recoverd: " + items.reco)
        console.log("Deaths: " + items.deaths)
        console.log("Deaths: " + items.totCases)
         const totalCase = {
            labels: items.deaths,
            datasets: [
              {
                label: 'Total Cases',
                pointRadius: 0.5,
                fill: false,
                lineTension: 0.5,
                borderColor: '#FF0000',
                borderWidth: 2,
                data: items.totCases
              }
          ]
        };

        const NewCase = {
            labels: items.days,
            datasets: [
              {
                label: 'Daily Cases',
                pointRadius: 0.5,
                fill: false,
                lineTension: 0.5,
                borderColor: '#FFA500',
                borderWidth: 2,
                data: items.dailyConf
              }
          ]
        };

        const DaliyReco = {
            labels: items.days,
            datasets: [{
                label: 'Daily Recovered',
                pointRadius: 0.5,
                fill: false,
                lineTension: 0.5,
                borderColor: '#008000',
                borderWidth: 2,
                data: items.dailyReco       
            }]
        }
        
/*         const options = {
            title: "Total Cases vs Deaths",
        };

        const data = [
            [items.deaths, items.totCases],
        ] */
        
        const totalRec = items.totalRec;
        const totalConf = items.totalInf;
        const totalDeath = items.totalDeath;
        const newCase = items.dailyConf;
        const days = items.days;
        const lastChange = items.lastChange;
        const dailyReco = items.dailyReco

        console.log("TotalRec", totalRec);
        console.log("TotalConf", totalConf);
        console.log("TotalDeath", totalDeath);
        console.log("NewCase: ", newCase);
        console.log("Days: ", days);
        console.log("Last Change: ", lastChange);
       // console.log("datstate: ", datstate)
        return (
            <div class="App">
                <div class="App-header">
                    <h1>Covid-19 Tracker India</h1>
                    <p class="datas">
                        <table>
                            <tr>
                                <th>Total Cases: </th>
                                <th><p class="red">{totalConf}</p></th>
                            </tr>
                            <tr>
                                <th>Total Deaths: </th>
                                <th><p class="blue">{totalDeath}</p></th>
                            </tr>
                            <tr>
                                <th>Total Recoverd: </th>
                                <th><p class="green">{totalRec}</p></th>
                            </tr>
                            <tr>
                                <th>Daily Change: </th>
                                <th><p class="orange">{lastChange}</p></th>
                            </tr>                                                         
                        </table>
                    </p>
                    <div>
                        <Line class="graph"
                            data={totalCase}
                            options={{
                                    title:{
                                    display:true,
                                    text:'Covid-19 India Total Cases vs Deaths',
                                    fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'right'
                                    }
                            }}
                        />
                        <hr class="white-divide" />
                        <Line class="graph"
                            data={NewCase}
                            options={{
                                    title:{
                                    display:true,
                                    text:'Covid-19 India Daily Change',
                                    fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'right'
                                    }
                            }}
                        />    
                        <Line class="graph"
                            data={DaliyReco}
                            options={{
                                    title:{
                                    display:true,
                                    text:'Covid-19 India recovered',
                                    fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'right'
                                    }
                            }}
                        />                                                                  
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default Getc19data;
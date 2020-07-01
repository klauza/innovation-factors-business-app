import React from 'react';
import styled from 'styled-components';
import {Doughnut, Line} from 'react-chartjs-2';

import List from '../List';

// CSS
const Wrapper = styled.div`
width: 100%;
padding: 5px;
  h1{
    font-size: 3em;
    color: ${props => props.theme.colors.primary};
  }

  .content-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5px;
    @media(max-width: 998px){
      grid-template-columns: 1fr;
    }
    &__left{
      display: grid;
      grid-template-rows: 1fr 1fr;
      border: 1px solid lightgrey;
      border-radius: 2px;

   
      .top-part{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        .innovation-capacity{
          padding: 2.5px;
          &>div{
            width: 100%;
            height: 25px;
            background: black;
            position: relative;
            .dataInnovationCapacity{
              position: absolute;
              width: ${props => props.dataInnovationCapacity}%;
              height: 100%;
              background: red;
            }
          }
          span{
            text-align: center;
            display: block;
            font-size: 1.5em;
          }
        }

        .participation{
          text-align: center;
          display: block;
          span, div{
            font-size: 1.5em;
          }
        }
      }
      .bottom-part{

        span{
          text-align: center;
          display: block;
          font-size: 1.5em;
          color: ${props => props.theme.colors.primary};
        }
        &-flex{
          display: flex;
          flex-direction: column;

          .doughnut-desc{
            display: flex; flex-direction: row;
            justify-content: space-between;
            span{
              text-align: center;
              display: block;
            }
          }
        }
      }
    }
    &__right{
      border: 1px solid lightgrey;
      border-radius: 2px;
    }
  }



  h1:nth-of-type(2), span{
    display: inline-block;
  }
  span{
    color: ${props => props.theme.colors.primary};
  }
`;


const data = {
	datasets: [{
		data: [50, 25, 25],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}],
	labels: [
		'Promoter',
		'Passive',
		'Detractor'
	],
};

const dataa = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: "Innovation Capacity Over time",
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const dataInnovationCapacity = 75;

const dataParticipation = 80;

const InnovationCapacity = () => {
  return (
    <Wrapper 
      dataParticipation={dataParticipation}
      dataInnovationCapacity={dataInnovationCapacity}
    >
      <h1>Overview</h1>
      <div className="content-grid">
        <div className="content-grid__left">

          <div className="top-part">
            <div className="innovation-capacity">
              <span>INNOVATION CAPACITY</span>
              <div><div className="dataInnovationCapacity" /></div>
              <span>{dataInnovationCapacity/10}</span>
            </div>
            <div className="participation">
              <span>PARTICIPATION</span>
              <div>{dataParticipation}%</div>
            </div>
          </div>

          <div className="bottom-part">
            <span>NPS</span>
            <div className="bottom-part-flex">
              <Doughnut data={data} />
              <div className="doughnut-desc">
                <div>
                  <span>50%</span>
                  <span>Promoter</span>
                </div>
                <div>
                  <span>25%</span>
                  <span>Passive</span>
                </div>
                <div>
                  <span>25%</span>
                  <span>Defractor</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="content-grid__right">
          <div> <Line data={dataa} /></div>
        </div>
      </div>

      <h1 style={{marginTop: "100px"}}>Spotlight</h1><span>ON LOWEST SCORES</span>
      <p>To improve your innovation capacity focus on these:</p>
      <h2>Stage</h2>
      <List />
      <h2>Groupset</h2>
      <List />
    </Wrapper>
  )
}

export default InnovationCapacity

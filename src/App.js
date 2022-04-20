import React from 'react';
import './App.css';

export class App extends React.Component {
  render() {
    const afpList = [
      {
        name: 'CAPITAL',
        profitabilityMonth: -1.16,
        profitabilityAcc: -11.81,
        profitabilityYear: -5.00,
        profitabilityYearPeriod: 5.82
      },
      {
        name: 'CUPRUM',
        profitabilityMonth: -1.45,
        profitabilityAcc: -12.13,
        profitabilityYear: -4.75,
        profitabilityYearPeriod: 5.80
      },
      {
        name: 'HABITAT',
        profitabilityMonth: -1.34,
        profitabilityAcc: -11.95,
        profitabilityYear: -5.00,
        profitabilityYearPeriod: 5.91
      },
      {
        name: 'MODELO',
        profitabilityMonth: -1.44,
        profitabilityAcc: -12.44,
        profitabilityYear: -5.69,
        profitabilityYearPeriod: null
      },
      {
        name: 'PLANVITAL',
        profitabilityMonth: -1.22,
        profitabilityAcc: -11.78,
        profitabilityYear: -4.47,
        profitabilityYearPeriod: 5.49
      },
      {
        name: 'PROVIDA',
        profitabilityMonth: -1.41,
        profitabilityAcc: -12.32,
        profitabilityYear: -5.86,
        profitabilityYearPeriod: 5.81
      },
      {
        name: 'UNO',
        profitabilityMonth: -1.66,
        profitabilityAcc: -12.55,
        profitabilityYear: -6.29,
        profitabilityYearPeriod: null
      },
      {
        name: 'SISTEMA',
        profitabilityMonth: -1.35,
        profitabilityAcc: -12.06,
        profitabilityYear: -5.12,
        profitabilityYearPeriod: 5.83
      }
    ];

    return(
      <div className='container'>
        <div className='title'>
          <h1>Rentabilidad Real de los Fondos de Penciones</h1>
        </div>
        <div className='content'>
            <div className='card'>
              <div className='card-title'>
                <p>RENTABILIDAD REAL DE LOS FONDOS DE PENSIONES</p>
                <p>Marzo de 2022</p>
              </div>
              <div className='card-body'>
                <select>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
                <select>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
                <button type='button' className='btn.sreach'>Buscar</button>
              </div>
            </div>
            <div className='card'>
              <div className='card-title'>
                <div className='col'>
                  <p>RENTABILIDAD REAL DEL FONDO TIPO A DEFLACTADA POR LA UF (1)</p>
                  <p>Marzo de 2022 - En porcentaje</p>
                  </div>
                <div className='row'>
                  <div className='col'>
                    <p>A.F.P.</p>
                  </div>
                  <div className='col'>
                    <p>Del Príodo</p>
                    <div className='row'>
                      <div className='col'>
                        <p>Mar 2022</p>
                      </div>
                      <div className='col'>
                        <p>Acumulado Ene 2022-Mar 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <p>Anual</p>
                    <div className='row'>
                      <div className='col'>
                        <p>Últimos 12 meses</p>
                        <p>Abr 2021-Mar 2022</p>
                      </div>
                      <div className='col'>
                        <p>Promedio Anual Período</p>
                        <p>27 Sep 2002 - Mar 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

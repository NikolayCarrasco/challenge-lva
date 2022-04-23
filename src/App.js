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

    function ifNull(value) {
      if (value != null) {
        return '%';
      }
      return '';
    }
    
    console.log(afpList);

    return(
      <div className='container'>
        <h1 className='title'>Rentabilidad Real de los Fondos de Penciones</h1>
        <div className='content'>
          <div className='tables'>
            <div className='card mb-2'>
              <div className='card-title text-center'>
                <p className='bold'>RENTABILIDAD REAL DE LOS FONDOS DE PENSIONES</p>
                <p className='bold'>Marzo de 2022</p>
              </div>
              <div className='card-body search text-center'>
                <select className='slc-year'>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
                <select className='slc-month'>
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
                <button type='button' className='btn-search'>Buscar</button>
              </div>
            </div>

            {/* start desktop version */}

            <div className='card desktop'>
              <div className='card-title'>
                <div className='col bb pb-1'>
                  <p className='text-center bold'>RENTABILIDAD REAL DEL FONDO TIPO A DEFLACTADA POR LA UF (1)</p>
                  <p className='text-center bold'>Marzo de 2022 - En porcentaje</p>
                  </div>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col border-right'>
                    <p className='text-center bold'>Del Período</p>
                    <div className='row'>
                      <div className='col border-right border-top'>
                        <p className='text-center bold'>Mar 2022</p>
                      </div>
                      <div className='col border-top'>
                        <p className='text-center bold'>Acumulado</p>
                        <p className='text-center bold'>Ene 2022-Mar 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <p className='text-center bold'>Anual</p>
                    <div className='row'>
                      <div className='col border-right border-top'>
                        <p className='text-center bold'>Últimos 12 meses</p>
                        <p className='text-center bold'>Abr 2021-Mar 2022</p>
                      </div>
                      <div className='col border-top'>
                        <p className='text-center bold'>Promedio Anual Período</p>
                        <p className='text-center bold'>27 Sep 2002 - Mar 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>
            </div>

            {/* end desktop version */}

            {/* start movile 800px version */}

            <div className='card movile-800 mb-2'>
              <div className='card-title'>
                <div className='col bb pb-1'>
                  <p className='text-center bold'>RENTABILIDAD REAL DEL FONDO TIPO A DEFLACTADA POR LA UF (1)</p>
                  <p className='text-center bold'>Marzo de 2022 - En porcentaje</p>
                  </div>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col'>
                    <p className='text-center bold'>Del Período</p>
                    <div className='row'>
                      <div className='col border-right border-top'>
                        <p className='text-center bold'>Mar 2022</p>
                      </div>
                      <div className='col border-top'>
                        <p className='text-center bold'>Acumulado</p>
                        <p className='text-center bold'>Ene 2022-Mar 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>
              <div className='card-title'>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col'>
                    <p className='text-center bold'>Anual</p>
                    <div className='row'>
                      <div className='col border-right border-top'>
                        <p className='text-center bold'>Últimos 12 meses</p>
                        <p className='text-center bold'>Abr 2021-Mar 2022</p>
                      </div>
                      <div className='col border-top'>
                        <p className='text-center bold'>Promedio Anual Período</p>
                        <p className='text-center bold'>27 Sep 2002 - Mar 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>
            </div>

            {/* end movile 800px version */}

            {/* start movile 450px version */}

            <div className='card movile-450'>
              <div className='card-title'>
                <div className='col bb pb-1'>
                  <p className='text-center bold'>RENTABILIDAD REAL DEL FONDO TIPO A DEFLACTADA POR LA UF (1)</p>
                  <p className='text-center bold'>Marzo de 2022 - En porcentaje</p>
                  </div>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col'>
                    <p className='text-center bold'>Del Período</p>
                      <div className='col border-top'>
                        <p className='text-center bold'>Mar 2022</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityMonth}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>
              
              <div className='card-title'>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col border-top'>
                    <div className='col'>
                      <p className='text-center bold'>Del Período</p>
                    </div>
                    <div className='col border-top'>
                      <p className='text-center bold'>Acumulado</p>
                      <p className='text-center bold'>Ene 2022-Mar 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityAcc}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>

              <div className='card-title'>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col border-top'>
                    <div className='col'>
                      <p className='text-center bold'>Anual</p>
                    </div>
                    <div className='col border-top'>
                      <p className='text-center bold'>Últimos 12 meses</p>
                      <p className='text-center bold'>Abr 2021-Mar 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYear}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>

              <div className='card-title'>
                <div className='row'>
                  <div className='col afp border-right'>
                    <p className='text-center bold'>A.F.P.</p>
                  </div>
                  <div className='col border-top'>
                    <div className='col'>
                      <p className='text-center bold'>Anual</p>
                    </div>
                    <div className='col border-top'>
                      <p className='text-center bold'>Promedio Anual Período</p>
                      <p className='text-center bold'>27 Sep 2002 - Mar 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                {
                  afpList.map((afp, index) => {
                    return(
                      <div>
                        {index % 2 !== 0 ? (
                          <div className='row' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        ) : (
                          <div className='row grey' key={index}>
                            <div className='col afp'>
                              <p className='afp-name'>{afp.name}</p>
                            </div>
                            <div className='col'>
                              <p className='value-end'>{afp.profitabilityYearPeriod}{ifNull(afp.profitabilityAcc)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                }
              </div>
                
            </div>

            {/* end movile 450px version */}

          </div>
        </div>
      </div>
    );
  }
}

export default App;

import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts/ng2-highcharts';

@Component({
  selector: 'app-selector-dashboard',
  moduleId: module.id,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  directives: [Ng2Highcharts, Ng2Highmaps, Ng2Highstocks]
})
export class DashboardComponent implements OnInit {
  windowSize = ['590px', '590px', '590px'];
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Security Events'
    },
    xAxis: {
      categories: ['Low', 'Medium', 'High']
    },
    yAxis: {
      title: {
        text: 'Security Events'
      }
    },
    series: [{
      name: 'KEV-U1000',
      data: [1, 0, 4]
    }, {
        name: 'KEA-U800',
        data: [5, 7, 3]
      }]
  };
  chartBar = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Recent System Usage Check'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    yAxis: {
      floor: 0,
      ceiling: 100,
      title: {
        text: 'Percentage (%)'
      }
    },
    series: [
      {
        name: 'CPU',
        data: [26, 32, 15, 34, 33, 12, 22, 56, 98, 53, 40]
      }, {
        name: 'Memory',
        data: [45, 67, 30, 64, 67, 25, 36, 93, 99, 87, 68]
      }, {
        name: 'Disk Space',
        data: [14, 15, 15, 17, 19, 19, 20, 31, 45, 50, 52]
      }
    ]
  };
  chartMap = {};
  mapData = [
    {
      'code': 'DE.SH',
      'value': 728
    },
    {
      'code': 'DE.BE',
      'value': 710
    },
    {
      'code': 'DE.MV',
      'value': 963
    },
    {
      'code': 'DE.HB',
      'value': 541
    },
    {
      'code': 'DE.HH',
      'value': 622
    },
    {
      'code': 'DE.RP',
      'value': 866
    },
    {
      'code': 'DE.SL',
      'value': 398
    },
    {
      'code': 'DE.BY',
      'value': 785
    },
    {
      'code': 'DE.SN',
      'value': 223
    },
    {
      'code': 'DE.ST',
      'value': 605
    },
    {
      'code': 'DE.',
      'value': 361
    },
    {
      'code': 'DE.NW',
      'value': 237
    },
    {
      'code': 'DE.BW',
      'value': 157
    },
    {
      'code': 'DE.HE',
      'value': 134
    },
    {
      'code': 'DE.NI',
      'value': 136
    },
    {
      'code': 'DE.TH',
      'value': 704
    }
  ];
  chartStock = {};

  constructor(private http: Http) { }


  ngOnInit(): any {
    setInterval(() => {
      this.chartOptions = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Security Events'
        },
        xAxis: {
          categories: ['Low', 'Medium', 'High']
        },
        yAxis: {
          title: {
            text: 'Security Events Count'
          }
        },
        series: [{
          name: 'KEV-U1000',
          data: [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)]
        }, {
            name: 'KEA-U800',
            data: [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)]
          }]
      };
    }, 2000);

    //Stock
    this.http.get('./assets/aapl-c.json').subscribe(
      aaplc => {
        this.chartStock = {
          rangeSelector: {
            selected: 1
          },
          title: {
            text: 'AAPL Stock Price'
          },
          series: [{
            name: 'AAPL',
            data: aaplc.json(),
            tooltip: {
              valueDecimals: 2
            }
          }]
        };
      },
      err => {
        console.error('Somethin went wrong', err);
      }
    );

    //Map
    this.http.get('./assets/geojson.json').subscribe(
      geojson => {
        this.chartMap = {
          title: {
            text: 'GeoJSON in Highmaps'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          colorAxis: {
          },
          series: [{
            data: this.mapData,
            mapData: geojson.json(),
            joinBy: ['code_hasc', 'code'],
            name: 'Random data',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.properties.postal}'
            }
          }]
        };
      },
      err => {
        console.error('Somethin went wrong', err);
      }
    );
  }

  changeToMainSize(str: string) {
    switch (str) {
      case 'chartOptions':
        this.windowSize = ['900px', '350px', '350px'];
        this.chartOptions = {
          chart: {
            type: 'line'
          },
          title: {
            text: 'Security Events'
          },
          xAxis: {
            categories: ['Low', 'Medium', 'High']
          },
          yAxis: {
            title: {
              text: 'Security Events'
            }
          },
          series: [{
            name: 'KEV-U1000',
            data: [1, 0, 4]
          }, {
              name: 'KEA-U800',
              data: [5, 7, 3]
            }]
        };
        break;
      case 'chartBar':
        this.windowSize = ['350px', '900px', '350px'];
        this.chartBar = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Recent System Usage Check'
          },
          xAxis: {
            categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          },
          yAxis: {
            floor: 0,
            ceiling: 100,
            title: {
              text: 'Percentage (%)'
            }
          },
          series: [
            {
              name: 'CPU',
              data: [26, 32, 15, 34, 33, 12, 22, 56, 98, 53, 40]
            }, {
              name: 'Memory',
              data: [45, 67, 30, 64, 67, 25, 36, 93, 99, 87, 68]
            }, {
              name: 'Disk Space',
              data: [14, 15, 15, 17, 19, 19, 20, 31, 45, 50, 52]
            }
          ]
        };
        break;
      case 'chartMap':
        this.windowSize = ['350px', '350px', '900px'];
        break;
    }
  }
}

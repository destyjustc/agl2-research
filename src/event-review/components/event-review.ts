import {Component} from 'angular2/core';
import {Ng2Highcharts} from 'ng2-highcharts/ng2-highcharts';

@Component({
	selector: 'event-review',
  	templateUrl: './event-review.html',
	moduleId: module.id,
	styleUrls: ['./event-review.css'],
	directives: [Ng2Highcharts]

})
export class EventReviewComponent {
	chartBar = {
		chart: {
			type: 'column'
		},
		title: {
			text: 'Event Review'
		},
		xAxis: {
			categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		},
		yAxis: {
			title: {
				text: 'Event Count'
			}
		},
	    colors: [
	        '#159F5C',
	        '#F8C840',
	        '#E2756C'
	    ],
		series: [
			{
				name: 'Low',
				data: [26, 62, 15, 34, 123, 12, 22, 56, 28, 53, 170]
			}, {
				name: 'Medium',
				data: [45, 67, 50, 64, 67, 25, 36, 33, 59, 127, 68]
			}, {
				name: 'High',
				data: [14, 15, 15, 17, 19, 19, 20, 11, 25, 20, 32]
			}
		]
	};
	tableData = [];
	allData = this.tableData;
	lazyLoad = true;

	loadMore() {
		if(this.lazyLoad) {
			for (var index: number = 0; index < 500; index++) {
				this.tableData.push({
					name: 'test'+index,
					time: '2016-2-11 10:42:35',
					ip: '10.0.50.88',
					info: Math.trunc(Math.random() * 100).toString()
				});
			}
			this.allData = this.tableData;
		}
	}

	localSearch(str:string) {
		if(str&&str.length) {
			this.tableData = this.allData.filter(function(data:any) {
				return data.info === str;
			});
		}else {
			this.tableData = this.allData;
		}
	}

	stopLazyLoad(str:string) {
		this.lazyLoad = !(str&&str.length);
	}
	onScroll(event) {
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			this.loadMore();
	    }
	}
	constructor() {
		this.loadMore();
	}
}

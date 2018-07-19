import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { isIOS } from 'platform';

@Component({
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    chartResult: any[] = [];
    showLabelProperty: boolean = false;
    isIOs = isIOS;
    outubro: any[] = [];
    novembro: any[] = [];
    dezembro: any[] = [];

    ngOnInit() {
        let data = [{"start":"2017-12-19T12:59:31.007Z","end":"2017-12-19T13:05:58.304Z","value":"346 count"},{"start":"2017-12-19T12:50:57.321Z","end":"2017-12-19T12:59:31.007Z","value":"260 count"},{"start":"2017-12-19T12:40:12.130Z","end":"2017-12-19T12:41:07.690Z","value":"55 count"},{"start":"2017-12-19T12:30:12.283Z","end":"2017-12-19T12:40:12.130Z","value":"60 count"},{"start":"2017-12-19T12:12:38.579Z","end":"2017-12-19T12:15:47.882Z","value":"27 count"},{"start":"2017-12-19T12:03:16.669Z","end":"2017-12-19T12:12:38.579Z","value":"152 count"},{"start":"2017-12-19T09:02:17.723Z","end":"2017-12-19T09:04:11.171Z","value":"42 count"},{"start":"2017-12-19T08:53:00.599Z","end":"2017-12-19T09:02:17.723Z","value":"432 count"},{"start":"2017-12-19T08:44:06.142Z","end":"2017-12-19T08:53:00.599Z","value":"211 count"},{"start":"2017-12-19T08:31:34.791Z","end":"2017-12-19T08:37:27.763Z","value":"183 count"},{"start":"2017-12-19T08:24:56.284Z","end":"2017-12-19T08:31:34.791Z","value":"23 count"},{"start":"2017-12-19T08:16:45.160Z","end":"2017-12-19T08:24:56.284Z","value":"239 count"},{"start":"2017-12-19T07:56:05.983Z","end":"2017-12-19T08:02:30.153Z","value":"743 count"},{"start":"2017-12-19T07:46:08.378Z","end":"2017-12-19T07:56:05.983Z","value":"455 count"}];

        let val1 = [
            { Country: "1", Amount: 250, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "2", Amount: 450, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "3", Amount: 240, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "4", Amount: 1150, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "5", Amount: 1830, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];

        let val2 = [
            { Country: "1", Amount: 4200, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "2", Amount: 4400, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "3", Amount: 2340, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "4", Amount: 1210, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "5", Amount: 1180, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];

        let val3 = [
            { Country: "1", Amount: 2000, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "2", Amount: 4000, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "3", Amount: 2400, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "4", Amount: 1100, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "5", Amount: 1800, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];

        this.outubro  = _.orderBy(val1, ['Country'], ['asc']);
        this.novembro = val2;
        this.dezembro = val3;

        const getHour = date => new Date(date).getUTCHours();
        const onlyNumbers = el => el.replace(/[a-zA-Z+]/g, '');

        const flatten = (acc, el) => {
            const hour = getHour(el.start);
            const value = Number(onlyNumbers(el.value));
            const find = acc.find(f => f.hour === hour);

            find
                ? (find.value += value)
                : acc.push({
                    hour: hour,
                    value: value,
                });

            return acc
        };

        this.chartResult = _.orderBy(data.reduce(flatten, []), ['hour'], ['desc']);

        console.log('Chart : ' + JSON.stringify(this.chartResult));

    }

    onPointSelected(args) {
        let index = args.pointIndex;
        console.log('index selected: ' + index);
        this.showLabelProperty = true;
    }

    onPointDeselected(args){
        let index = args.pointIndex;
        console.log('index deselected: ' + index);
        this.showLabelProperty = false;
    }
}
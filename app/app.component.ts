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

    scatter: any[] = [];

    imcT: any[] = [
        { data: '2018-07-01T14:52:00', Altura: '50', Peso: '70', IMC: '19,4' },
        { data: '2018-07-01T14:52:00', Altura: '50', Peso: '70', IMC: '30,4' },
        { data: '2018-07-01T14:52:00', Altura: '50', Peso: '70', IMC: '60,4' },
        { data: '2018-07-01T14:52:00', Altura: '50', Peso: '70', IMC: '80,4' },
        { data: '2018-07-01T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },

        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '5,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '20,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '40,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '60,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '85,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '130,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-02T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '2018-07-03T14:52:00', Altura: '50', Peso: '70', IMC: '11,4' },
        { data: '2018-07-03T14:52:00', Altura: '50', Peso: '70', IMC: '21,4' },
        { data: '2018-07-03T14:52:00', Altura: '50', Peso: '70', IMC: '31,4' },
        { data: '2018-07-03T14:52:00', Altura: '50', Peso: '70', IMC: '41,4' },

        { data: '2018-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '5,4' },
        { data: '2018-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '10,4' },
        { data: '2018-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '15,4' },

        { data: '2018-07-05T14:52:00', Altura: '50', Peso: '70', IMC: '15,4' },
        { data: '2018-07-05T14:52:00', Altura: '50', Peso: '70', IMC: '30,4' },

        { data: '2018-07-06T14:52:00', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '2018-07-06T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-06T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-06T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-06T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '2018-07-07T14:52:00', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '2018-07-07T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-07T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-07T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-07T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '2018-07-08T14:52:00', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '2018-07-08T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-08T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-08T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-08T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '2018-07-09T14:52:00', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '2018-07-09T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-09T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-09T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-09T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '2018-07-10T14:52:00', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '2018-07-10T14:52:00', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '2018-07-10T14:52:00', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '2018-07-10T14:52:00', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '2018-07-10T14:52:00', Altura: '50', Peso: '70', IMC: '250,4' },

        //Dados de outras datas
        { data: '2017-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '5,4' },
        { data: '2016-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '10,4' },
        { data: '2016-07-04T14:52:00', Altura: '50', Peso: '70', IMC: '15,4' },

        { data: '2016-07-05T14:52:00', Altura: '50', Peso: '70', IMC: '15,4' },
        { data: '2018-06-05T14:52:00', Altura: '50', Peso: '70', IMC: '30,4' },
        { data: '2018-06-04T14:52:00', Altura: '50', Peso: '70', IMC: '30,4' },
        { data: '2018-06-03T14:52:00', Altura: '50', Peso: '70', IMC: '30,4' },
        {"data":"2099-06-12T15:19:00","Altura":"50,1","Peso":"30,1","IMC":"119,9"},{"data":"2099-06-12T15:19:00","Altura":"50,1","Peso":"30,1","IMC":"119,9"},{"data":"2021-04-23T16:00:00","Peso":"165","Altura":"1183","IMC":"1,2"},{"data":"2021-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2020-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2020-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2020-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2020-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2019-05-23T16:00:00","Peso":"60","Altura":"60","IMC":"166,7"},{"data":"2019-05-23T16:00:00","Peso":"60","Altura":"60","IMC":"166,7"},{"data":"2019-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2019-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2019-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2019-04-23T16:00:00","Peso":"65","Altura":"183","IMC":"19,4"},{"data":"2018-06-11T14:49:00","Altura":"50","Peso":"2","IMC":"8"},
        {"data":"2018-05-18T03:41:00","Altura":"60","Peso":"60","IMC":"166,7"},{"data":"2018-05-10T18:33:00","Altura":"80","Peso":"100","IMC":"156,2"},{"data":"2018-05-10T16:31:00","Altura":"120","Peso":"120","IMC":"83,3"},{"data":"2018-05-10T14:10:00","Altura":"60","Peso":"120","IMC":"333,3"},{"data":"2018-05-10T11:40:00","Altura":"60","Peso":"120","IMC":"333,3"},{"data":"2018-05-10T00:00:00","Altura":"50","Peso":"2","IMC":"8"},
        {"data":"2018-05-10T00:00:00","Altura":"150","Peso":"50","IMC":"22,2"},{"data":"2018-05-10T00:00:00","Altura":"150","Peso":"50","IMC":"22,2"},{"data":"2018-05-10T00:00:00","Altura":"50","Peso":"60","IMC":"240"},
        {"data":"2018-01-01T00:00:00","Peso":"27,68","IMC":"+Infinito"},
        {"data":"2018-01-01T00:00:00","Peso":"27,68","IMC":"+Infinito"},
        {"data":"2018-01-01T00:00:00","Peso":"27,68","IMC":"+Infinito"},
        {"data":"2018-01-01T00:00:00","Peso":"27,68","IMC":"+Infinito"},
        {"data":"2018-01-01T00:00:00","Peso":"27,68","IMC":"+Infinito"},
        {"data":"2017-11-21T16:45:00","Altura":"200","Peso":"22","IMC":"5,5"},
        {"data":"2017-11-21T16:44:00","Altura":"200","Peso":"120","IMC":"30"},
        {"data":"2016-11-17T14:27:00","Altura":"100","Peso":"10","IMC":"10"},
        {"data":"2016-07-08T16:03:00","Altura":"200","Peso":"288","IMC":"72"},
        {"data":"2016-05-03T17:21:00","Altura":"183","Peso":"65","IMC":"19,4"},{"data":"2016-05-03T14:24:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-03T14:21:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-03T14:20:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-03T09:57:00","Altura":"180","Peso":"111","IMC":"34,3"},{"data":"2016-05-03T09:56:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-03T09:54:00","Altura":"200","Peso":"67","IMC":"16,8"},{"data":"2016-05-03T09:19:00","Altura":"198","Peso":"76","IMC":"19,4"},{"data":"2016-05-03T09:14:00","Altura":"183","Peso":"65","IMC":"19,4"},{"data":"2016-05-02T11:00:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-02T10:59:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-05-02T10:58:00","Altura":"184","Peso":"65","IMC":"19,2"},{"data":"2016-05-02T10:47:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-04-30T11:00:00","Altura":"180","Peso":"70","IMC":"21,6"},{"data":"2016-04-29T14:13:00","Altura":"183","Peso":"65","IMC":"19,4"},{"data":"2016-04-29T14:12:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-04-29T14:11:00","Altura":"183","Peso":"65","IMC":"19,4"},{"data":"2016-04-29T11:00:00","Altura":"180","Peso":"65","IMC":"20,1"},{"data":"2016-04-27T10:58:00","Altura":"183","Peso":"65","IMC":"19,4"},{"data":"2016-04-26T09:57:00","Altura":"156","Peso":"111","IMC":"45,6"},{"data":"2016-04-26T09:12:00","Altura":"185","Peso":"76","IMC":"22,2"},{"data":"2016-01-13T14:52:00","Altura":"182","Peso":"65","IMC":"19,6"}];

    ngOnInit() {

        this.scatter = [
            { Age: 20, Salary: 15300, Spendings: 4500, Savings: 5500, Impact: 1 },
            { Age: 25, Salary: 12300, Spendings: 6500, Savings: 5200, Impact: 7 },
            { Age: 30, Salary: 14000, Spendings: 8500, Savings: 5500, Impact: 10 },
            { Age: 35, Salary: 18000, Spendings: 9500, Savings: 7500, Impact: 6 },
            { Age: 40, Salary: 19520, Spendings: 15540, Savings: 3800,Impact: 4 },
            { Age: 45, Salary: 20000, Spendings: 15500, Savings: 4500, Impact: 2 },
            { Age: 50, Salary: 24200, Spendings: 20500, Savings: 3700, Impact: 11 },
            { Age: 55, Salary: 24000, Spendings: 22500, Savings: 1500, Impact: 8 },
            { Age: 60, Salary: 22000, Spendings: 22500, Savings: 500,  Impact: 1 },
            { Age: 65, Salary: 20000, Spendings: 20500, Savings: 10,  Impact: 9 }
        ];

       /*
       this.scatter = [
            { Age: 20, Salary: 15300, Spendings: 4500, Savings: 5500, Teste: 8500 , Tes: 20500, Impact: 1 },
            { Age: 25, Salary: 12300, Spendings: 6500, Savings: 5200, Teste: 8500 , Tes: 20500, Impact: 7 },
            { Age: 30, Salary: 14000, Spendings: 8500, Savings: 5500, Teste: 8500 , Tes: 20500, Impact: 10 },
            { Age: 35, Salary: 18000, Spendings: 9500, Savings: 7500, Teste: 8500 , Tes: 20500, Impact: 6 },
            { Age: 40, Salary: 19520, Spendings: 15540, Savings: 3800,Teste: 8500 , Tes: 20500, Impact: 4 },
            { Age: 45, Salary: 20000, Spendings: 15500, Savings: 4500,Teste: 8500 , Tes: 20500, Impact: 2 },
            { Age: 50, Salary: 24200, Spendings: 20500, Savings: 3700,Teste: 8500 , Tes: 20500, Impact: 11 },
            { Age: 55, Salary: 24000, Spendings: 22500, Savings: 1500,Teste: 8500 , Tes: 20500, Impact: 8 },
            { Age: 60, Salary: 22000, Spendings: 22500, Savings: 500, Teste: 8500 , Tes: 20500, Impact: 1 },
            { Age: 65, Salary: 20000, Spendings: 20500, Savings: 10,  Teste: 8500 , Tes: 20500, Impact: 9 }
        ];

       this.scatter = [
           {dia: 0, imc0: 0, imc1: 0,  imc2: 0,  imc3: 0,  imc4: 0},
           {dia: 1, imc0: 19.4, imc1: 30.4,  imc2: 60.4,  imc3: 80.4,  imc4: 100.4},
           {dia: 2, imc0: 5.4,  imc1: 20.4,  imc2: 40.4,  imc3: 60.4,  imc4: 85.4},
           {dia: 3, imc0: 11.4, imc1: 21.4,  imc2: 21.4,  imc3: 41.4,  imc4: 0},
           {dia: 4, imc0: 5.4,  imc1: 10.4,  imc2: 15.4,  imc3: 0,     imc4: 0},
           {dia: 5, imc0: 15.4, imc1: 30.4,  imc2: 0,     imc3: 0,     imc4: 0},
           {dia: 6, imc0: 50.4, imc1: 100.4, imc2: 150.4, imc3: 200.4, imc4: 250.4}
       ];*/

        /*this.scatter = [
            {dia: 1, imc0: 19.4},
            {dia: 2, imc0: 5.4},
            {dia: 3, imc0: 11.4},
            {dia: 4, imc0: 5.4},
            {dia: 5, imc0: 15.4},
            {dia: 6, imc0: 50.4},
        ];*/

        //this.scatter = this.flatten1(this.orderJson(this.imcT));

    }

    flatten1 = list => {

        const digest = list.reduce((acc, {data, Altura, Peso, IMC}) => {
            const current = new Date(data);
            const day = current.getDate();
            const month = current.getMonth();
            const year = current.getFullYear();

            if(month === new Date().getMonth() && year === new Date().getFullYear()){
                if (acc.has(day)) {
                    acc.get(day).imc.push(parseInt(IMC));
                } else {
                    acc.set(day, {dia: day, imc: [parseInt(IMC)]});
                }
            }
            return acc
        }, new Map());

        let newArray = [];

        digest.forEach(el => {
            let data = {dia: 0, imc0: 0, imc1: 0, imc2: 0, imc3: 0, imc4: 0, imc5: 0, imc6: 0, imc7: 0, imc8: 0, imc9: 0};
            for(let i=0; i < el.imc.length; i++){
                data.dia  = el.dia;
                data.imc0 = el.imc[0] !== undefined ? el.imc[0] : 0;
                data.imc1 = el.imc[1] !== undefined ? el.imc[1] : 0;
                data.imc2 = el.imc[2] !== undefined ? el.imc[2] : 0;
                data.imc3 = el.imc[3] !== undefined ? el.imc[3] : 0;
                data.imc4 = el.imc[4] !== undefined ? el.imc[4] : 0;
                data.imc5 = el.imc[5] !== undefined ? el.imc[5] : 0;
                data.imc6 = el.imc[6] !== undefined ? el.imc[6] : 0;
                data.imc7 = el.imc[7] !== undefined ? el.imc[7] : 0;
                data.imc8 = el.imc[8] !== undefined ? el.imc[8] : 0;
                data.imc9 = el.imc[9] !== undefined ? el.imc[9] : 0;
            }

            newArray.push(data);
        });
        newArray.unshift({dia: 0, imc0: 0, imc1: 0, imc2: 0, imc3: 0, imc4: 0, imc5: 0, imc6: 0, imc7: 0, imc8: 0, imc9: 0});
        return newArray;
    };

    orderJson(json){
        let newJson = [];
        json.forEach(el => {
            if( el.hasOwnProperty('data') && el.hasOwnProperty('Altura') &&
                el.hasOwnProperty('Peso') && el.hasOwnProperty('IMC')){
                newJson.push({data: el.data, Altura: el.Altura, Peso: el.Peso, IMC: el.IMC});
            }
        });

        return newJson;
    }


}
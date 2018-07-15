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

    scatter: any[] = [];
    imc: any[] = [{
        'Result': [
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '50,1',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '30,1',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '119,9',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 223671,
                'Source': 'Área do Cidadão',
                'Date': '2099-06-12T15:19:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '50,1',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '30,1',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '119,9',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 223670,
                'Source': 'Área do Cidadão',
                'Date': '2099-06-12T15:19:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '1',
                    'idProfessional': '1',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '165',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '1183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '1,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 85,
                'Source': 'ANF',
                'Date': '2021-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '1',
                    'idProfessional': '1',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 87,
                'Source': 'ANF',
                'Date': '2021-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 152,
                'Source': 'ANF',
                'Date': '2020-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 51,
                'Source': 'ANF',
                'Date': '2020-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 92,
                'Source': 'ANF',
                'Date': '2020-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 93,
                'Source': 'ANF',
                'Date': '2020-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '1',
                    'idProfessional': '1',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '166,7',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 21,
                'Source': 'ANF',
                'Date': '2019-05-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '1',
                    'idProfessional': '1',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '166,7',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 19,
                'Source': 'ANF',
                'Date': '2019-05-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 153,
                'Source': 'ANF',
                'Date': '2019-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 47,
                'Source': 'ANF',
                'Date': '2019-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 48,
                'Source': 'ANF',
                'Date': '2019-04-23T16:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '1',
                    'idProfessional': '1',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 17,
                'Source': 'ANF',
                'Date': '2019-04-23T16:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '50',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '2',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '8',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 223668,
                'Source': 'Área do Cidadão',
                'Date': '2018-06-11T14:49:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '166,7',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222687,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-18T03:41:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '80',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '100',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '156,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222685,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T18:33:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '120',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '120',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '83,3',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222684,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T16:31:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '120',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '333,3',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222683,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T14:10:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '120',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '333,3',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222682,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T11:40:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '50',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '2',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '8',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222679,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T00:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '150',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '50',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '22,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222680,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T00:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '150',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '50',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '22,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222681,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T00:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '50',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '60',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '240',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 222678,
                'Source': 'Área do Cidadão',
                'Date': '2018-05-10T00:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '27,68',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '+Infinito',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 238,
                'Source': 'ANF',
                'Date': '2018-01-01T00:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '27,68',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '+Infinito',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 240,
                'Source': 'ANF',
                'Date': '2018-01-01T00:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '27,68',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '+Infinito',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 236,
                'Source': 'ANF',
                'Date': '2018-01-01T00:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '27,68',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '+Infinito',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 234,
                'Source': 'ANF',
                'Date': '2018-01-01T00:00:00'
            },
            {
                'ExternalSource': {
                    'idInstitution': '99999',
                    'idProfessional': '99999',
                    'nameInstitution': 'Name Inst',
                    'nameProfessional': 'Name Prof',
                    'healthCareNumber': 185649603
                },
                'MeasurementValues': [
                    {
                        'Type': 'Peso',
                        'Value': '27,68',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '+Infinito',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 243,
                'Source': 'ANF',
                'Date': '2018-01-01T00:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '200',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '22',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '5,5',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41650,
                'Source': 'Área do Cidadão',
                'Date': '2017-11-21T16:45:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '200',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '120',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '30',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41649,
                'Source': 'Área do Cidadão',
                'Date': '2017-11-21T16:44:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '100',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '10',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '10',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41641,
                'Source': 'Área do Cidadão',
                'Date': '2016-11-17T14:27:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '200',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '288',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '72',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41640,
                'Source': 'Área do Cidadão',
                'Date': '2016-07-08T16:03:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41639,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T17:21:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41638,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T14:24:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41637,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T14:21:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41636,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T14:20:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '111',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '34,3',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41635,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T09:57:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41634,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T09:56:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '200',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '67',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '16,8',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41633,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T09:54:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '198',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '76',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41632,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T09:19:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41631,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-03T09:14:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41630,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-02T11:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41629,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-02T10:59:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '184',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41628,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-02T10:58:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41627,
                'Source': 'Área do Cidadão',
                'Date': '2016-05-02T10:47:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '70',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '21,6',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41626,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-30T11:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41624,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-29T14:13:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41623,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-29T14:12:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41622,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-29T14:11:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '180',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '20,1',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41621,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-29T11:00:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '183',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,4',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41620,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-27T10:58:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '156',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '111',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '45,6',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41619,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-26T09:57:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '185',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '76',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '22,2',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41618,
                'Source': 'Área do Cidadão',
                'Date': '2016-04-26T09:12:00'
            },
            {
                'ExternalSource': null,
                'MeasurementValues': [
                    {
                        'Type': 'Altura',
                        'Value': '182',
                        'Placeholders': null
                    },
                    {
                        'Type': 'Peso',
                        'Value': '65',
                        'Placeholders': null
                    },
                    {
                        'Type': 'IMC',
                        'Value': '19,6',
                        'Placeholders': null
                    }
                ],
                'Type': 'IMC',
                'ID': 41616,
                'Source': 'Área do Cidadão',
                'Date': '2016-01-13T14:52:00'
            }
        ],
        'Error': null,
        'Status': 0
    }];
    imcTratados: any[] = [
        { data: '12/06/2099', Altura: '50,1', Peso: '30,1', IMC: '119,9' },
        { data: '12/06/2099', Altura: '50,1', Peso: '30,1', IMC: '119,9' },
        { data: '23/04/2021', Peso: '165', Altura: '1183', IMC: '1,2' },
        { data: '23/04/2021', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2020', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2020', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2020', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2020', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/05/2019', Peso: '60', Altura: '60', IMC: '166,7' },
        { data: '23/05/2019', Peso: '60', Altura: '60', IMC: '166,7' },
        { data: '23/04/2019', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2019', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2019', Peso: '65', Altura: '183', IMC: '19,4' },
        { data: '23/04/2019', Peso: '65', Altura: '183', IMC: '19,4' },

        { data: '01/07/2018', Altura: '50', Peso: '70', IMC: '19,4' },
        { data: '01/07/2018', Altura: '50', Peso: '70', IMC: '30,4' },
        { data: '01/07/2018', Altura: '50', Peso: '70', IMC: '60,4' },
        { data: '01/07/2018', Altura: '50', Peso: '70', IMC: '80,4' },
        { data: '01/07/2018', Altura: '50', Peso: '70', IMC: '100,4' },

        { data: '02/07/2018', Altura: '50', Peso: '70', IMC: '5,4' },
        { data: '02/07/2018', Altura: '50', Peso: '70', IMC: '20,4' },
        { data: '02/07/2018', Altura: '50', Peso: '70', IMC: '40,4' },
        { data: '02/07/2018', Altura: '50', Peso: '70', IMC: '60,4' },
        { data: '02/07/2018', Altura: '50', Peso: '70', IMC: '85,4' },

        { data: '03/07/2018', Altura: '50', Peso: '70', IMC: '11,4' },
        { data: '03/07/2018', Altura: '50', Peso: '70', IMC: '21,4' },
        { data: '03/07/2018', Altura: '50', Peso: '70', IMC: '31,4' },
        { data: '03/07/2018', Altura: '50', Peso: '70', IMC: '41,4' },
        { data: '03/07/2018', Altura: '50', Peso: '70', IMC: '51,4' },

        { data: '04/07/2018', Altura: '50', Peso: '70', IMC: '5,4' },
        { data: '04/07/2018', Altura: '50', Peso: '70', IMC: '10,4' },
        { data: '04/07/2018', Altura: '50', Peso: '70', IMC: '15,4' },
        { data: '04/07/2018', Altura: '50', Peso: '70', IMC: '20,4' },
        { data: '04/07/2018', Altura: '50', Peso: '70', IMC: '25,4' },

        { data: '05/07/2018', Altura: '50', Peso: '70', IMC: '15,4' },
        { data: '05/07/2018', Altura: '50', Peso: '70', IMC: '30,4' },
        { data: '05/07/2018', Altura: '50', Peso: '70', IMC: '45,4' },
        { data: '05/07/2018', Altura: '50', Peso: '70', IMC: '60,4' },
        { data: '05/07/2018', Altura: '50', Peso: '70', IMC: '75,4' },

        { data: '06/07/2018', Altura: '50', Peso: '70', IMC: '50,4' },
        { data: '06/07/2018', Altura: '50', Peso: '70', IMC: '100,4' },
        { data: '06/07/2018', Altura: '50', Peso: '70', IMC: '150,4' },
        { data: '06/07/2018', Altura: '50', Peso: '70', IMC: '200,4' },
        { data: '06/07/2018', Altura: '50', Peso: '70', IMC: '250,4' },

        { data: '11/06/2018', Altura: '50', Peso: '2', IMC: '8' },
        { data: '18/05/2018', Altura: '60', Peso: '60', IMC: '166,7' },
        { data: '10/05/2018', Altura: '80', Peso: '100', IMC: '156,2' },
        { data: '10/05/2018', Altura: '120', Peso: '120', IMC: '83,3' },
        { data: '10/05/2018', Altura: '60', Peso: '120', IMC: '333,3' },
        { data: '10/05/2018', Altura: '60', Peso: '120', IMC: '333,3' },
        { data: '10/05/2018', Altura: '50', Peso: '2', IMC: '8' },
        { data: '10/05/2018', Altura: '150', Peso: '50', IMC: '22,2' },
        { data: '10/05/2018', Altura: '150', Peso: '50', IMC: '22,2' },
        { data: '10/05/2018', Altura: '50', Peso: '60', IMC: '240' },
        { data: '01/01/2018', Peso: '27,68', IMC: '+Infinito' },
        { data: '01/01/2018', Peso: '27,68', IMC: '+Infinito' },
        { data: '01/01/2018', Peso: '27,68', IMC: '+Infinito' },
        { data: '01/01/2018', Peso: '27,68', IMC: '+Infinito' },
        { data: '01/01/2018', Peso: '27,68', IMC: '+Infinito' },
        { data: '21/11/2017', Altura: '200', Peso: '22', IMC: '5,5' },
        { data: '21/11/2017', Altura: '200', Peso: '120', IMC: '30' },
        { data: '17/11/2016', Altura: '100', Peso: '10', IMC: '10' },
        { data: '08/07/2016', Altura: '200', Peso: '288', IMC: '72' },
        { data: '03/05/2016', Altura: '183', Peso: '65', IMC: '19,4' },
        { data: '03/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '03/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '03/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '03/05/2016', Altura: '180', Peso: '111', IMC: '34,3' },
        { data: '03/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '03/05/2016', Altura: '200', Peso: '67', IMC: '16,8' },
        { data: '03/05/2016', Altura: '198', Peso: '76', IMC: '19,4' },
        { data: '03/05/2016', Altura: '183', Peso: '65', IMC: '19,4' },
        { data: '02/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '02/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '02/05/2016', Altura: '184', Peso: '65', IMC: '19,2' },
        { data: '02/05/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '30/04/2016', Altura: '180', Peso: '70', IMC: '21,6' },
        { data: '29/04/2016', Altura: '183', Peso: '65', IMC: '19,4' },
        { data: '29/04/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '29/04/2016', Altura: '183', Peso: '65', IMC: '19,4' },
        { data: '29/04/2016', Altura: '180', Peso: '65', IMC: '20,1' },
        { data: '27/04/2016', Altura: '183', Peso: '65', IMC: '19,4' },
        { data: '26/04/2016', Altura: '156', Peso: '111', IMC: '45,6' },
        { data: '26/04/2016', Altura: '185', Peso: '76', IMC: '22,2' },
        { data: '13/01/2016', Altura: '182', Peso: '65', IMC: '19,6' } ];

    ngOnInit() {


       this.scatter = [
           {dia: 1, imc0: 19.4, imc1: 30.4,  imc2: 60.4,  imc3: 80.4,  imc4: 100.4},
           {dia: 2, imc0: 5.4,  imc1: 20.4,  imc2: 40.4,  imc3: 60.4,  imc4: 85.4},
           {dia: 3, imc0: 11.4, imc1: 21.4,  imc2: 21.4,  imc3: 41.4,  imc4: 0},
           {dia: 4, imc0: 5.4,  imc1: 10.4,  imc2: 15.4,  imc3: 0,     imc4: 0},
           {dia: 5, imc0: 15.4, imc1: 30.4,  imc2: 0,     imc3: 0,     imc4: 0},
           {dia: 6, imc0: 50.4, imc1: 100.4, imc2: 150.4, imc3: 200.4, imc4: 250.4}
       ];



    }
}
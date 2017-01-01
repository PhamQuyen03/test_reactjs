import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './App.css';

const data = [
{
    "code": "AAA.AX",
    "company": "AAA",
    "Volume":1000000,
    "price": 0.9292,
    "values":  "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "BBB.AX",
    "company": "BBB",
    "Volume":1000000,
    "price": 1.0770,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "CCC.AX",
    "company": "CCC",
    "Volume":1000000,
    "price": 1.6292,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "DDD.AX",
    "company": "DDD",
    "Volume":1000000,
    "price": 1.4292,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "EEE.AX",
    "company": "EEE",
    "Volume":1000000,
    "price": 0.9292,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "FFF.AX",
    "company": "FFF",
    "Volume":1000000,
    "price": 0.8292,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "GGG.AX",
    "company": "GGG",
    "Volume":1000000,
    "price": 117.7292,
    "values": "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  },
  {
    "code": "HHH.AX",
    "company": "HHH",
    "Volume":1000000,
    "price": 60.7292,
    "values":  "919000.00",
    "change_value": "0.00",
    "percent": "0.00",
  }

]
;
var TopLoser = [];
function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
  return fieldValue < 0 ? 'td-column-function-negative' : 'td-column-function-positive';
}
function tick() {

  for (var i=0; i<data.length; i++) {
    var change_value = Math.floor(Math.random() * (50 - (-50) + 1) + (-50)) / 1000;
    data[i].percent = change_value;
    data[i].change_value = parseFloat(data[i].price)*data[i].percent;
    data[i].change_value = data[i].change_value.toFixed(2);
    data[i].price = parseFloat(data[i].change_value)+ parseFloat(data[i].price);
    data[i].price = data[i].price.toFixed(3);
    data[i].values = data[i].price * data[i].Volume;
    data[i].values = data[i].values.toFixed(2);
  }
  data.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);

});

  for (var i=0; i<5; i++) {
    TopLoser[i] = data[i];
  }

}

setInterval(tick, 1000);

class Finance extends Component {
  render() {
    return (
        <BootstrapTable data={ TopLoser } >
            <TableHeaderColumn dataField='code' columnClassName='code' dataAlign="center" isKey>Code</TableHeaderColumn>
            <TableHeaderColumn dataField='company' columnClassName='company' dataAlign="center">Company</TableHeaderColumn>
            <TableHeaderColumn dataField='price' columnClassName='price' dataAlign="center">Price</TableHeaderColumn>
            <TableHeaderColumn dataField='values' columnClassName='value' dataAlign="center" >values</TableHeaderColumn>
            <TableHeaderColumn dataField='change_value' dataAlign="center" columnClassName={ columnClassNameFormat }>change_value</TableHeaderColumn>
            <TableHeaderColumn dataField='percent' dataAlign="center" columnClassName={ columnClassNameFormat } >percent</TableHeaderColumn>
          </BootstrapTable>
    );
  }
}

export default Finance;
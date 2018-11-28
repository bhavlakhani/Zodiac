import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['movieId', 'movieName','movieDescription','view','edit','delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kal Ho Na Ho', weight: 1.0079, symbol: 'Awesome Movie'},
  {position: 2, name: 'Kabhi Khushi Kabhi Gum', weight: 4.0026, symbol: 'Nice Movie'},
  {position: 3, name: 'Tere Name', weight: 6.941, symbol: 'Awesome Movie'},
  {position: 4, name: 'Hate Story', weight: 9.0122, symbol: 'Nice Movie'},
  {position: 5, name: 'Jannat', weight: 10.811, symbol: 'Awesome Movie'},
  {position: 6, name: 'Dhoom', weight: 12.0107, symbol: 'Nice Movie'},
  {position: 7, name: 'Padhamvati', weight: 14.0067, symbol: 'Awesome Movie'},
  {position: 8, name: 'Veer Zara', weight: 15.9994, symbol: 'Nice Movie'},
  {position: 9, name: 'Spider Man', weight: 18.9984, symbol: 'Nice Movie'},
  {position: 10, name: 'Pink', weight: 20.1797, symbol: 'Awesome Movie'},
  {position: 11, name: 'Bagban', weight: 22.9897, symbol: 'Awesome Movie'},
  {position: 12, name: 'Bajrangi Bhai jaan', weight: 24.305, symbol: 'Nice Movie'},
  {position: 13, name: 'Jay Ho', weight: 26.9815, symbol: 'Awesome Movie'},
  {position: 14, name: 'Muskan', weight: 28.0855, symbol: 'Nice Movie'},
  {position: 15, name: 'Love Story', weight: 30.9738, symbol: 'Nice Movie'},
  {position: 16, name: 'Prem Rog', weight: 32.065, symbol: 'Awesome Movie'},
  {position: 17, name: 'Prem Granth', weight: 35.453, symbol: 'Awesome Movie'},
  {position: 18, name: 'Prem', weight: 39.948, symbol: 'Awesome Movie'},
  {position: 19, name: 'Premika', weight: 39.0983, symbol: 'Awesome Movie'},
  {position: 20, name: 'Premi', weight: 40.078, symbol: 'Awesome Movie'},
];
import {Component, OnInit} from '@angular/core';
import {StatusInfoServiceService} from '../status-info-service.service';
import {StatusInfo} from '../data-model/status-info';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.css']
})
export class StatusReportComponent implements OnInit {

  filter: FilterCriteria = new FilterCriteria;


  constructor(private statusInfoService: StatusInfoServiceService) {
  }


  displayedColumns: string[] =
    ['LocDate',
      'DevId',
      'UnitNum',
      'AltUnitNum',
      'SOG',
      'COG',
      'Lat',
      'Lon',
      'DryOn',
      'LiqOn',
      'PWOn',
      'TempVal',
      'AirTemp',
      'SurfTemp',
      'Plow',
      'Wing',
      'Tow',
      'spType',
      'DryRate',
      'WetRate',
      'RateMode',
      'ioStat',
      'VehType'
    ];


  completeStatusInfo: MatTableDataSource<StatusInfo>;
  filteredStatusInfo: MatTableDataSource<StatusInfo>;


  ngOnInit() {
    this.getData();
  }

  private getData() {
    const dataHolder: StatusInfo[] = [];
    this.statusInfoService.getStatusInfo().subscribe(i => {
      // convert LocDate from string to Date
      // programming in a dynamic language is a pain
      for (let j = 0; j < i.length; j++) {
        i[j].LocDate = new Date(i[j].LocDate);
      }

      this.completeStatusInfo = new MatTableDataSource<StatusInfo>(i);
      this.filteredStatusInfo = this.completeStatusInfo;
    });
  }

  private wordSearch(keyword: string) {
    this.filteredStatusInfo.filter = keyword;
  }

  private startDateFilter(startDate: Date) {
    const filteredElements: StatusInfo[] = [];
    for (let i = 0; i < this.completeStatusInfo.data.length; i++) {
      if (this.completeStatusInfo.data[i].LocDate > startDate) {
        filteredElements.push(this.completeStatusInfo.data[i]);
      }
    }
    this.filteredStatusInfo = new MatTableDataSource<StatusInfo>(filteredElements);
  }

  private endDateFilter(endDate: Date) {
    const filteredElements: StatusInfo[] = [] as StatusInfo[];
    for (let i = 0; i < this.completeStatusInfo.data.length; i++) {
      if (this.completeStatusInfo.data[i].LocDate < endDate) {
        filteredElements.push(this.completeStatusInfo.data[i]);
      }
    }
    this.filteredStatusInfo = new MatTableDataSource<StatusInfo>(filteredElements);
  }

  private updateFilteredList() {
  }





}


class FilterCriteria {
  stringFilter: string;
  startDate: Date;
  endDate: Date;
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// import {StatusReportRoutingModule} from './status-report-routing.module';
import {StatusReportComponent} from './status-report/status-report.component';
import {HttpClientModule} from '@angular/common/http';
import {StatusReportRoutingModule} from './status-report-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StatusReportComponent],
  imports: [
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StatusReportRoutingModule
  ],
  exports: [StatusReportComponent]
})
export class StatusReportModule {
}

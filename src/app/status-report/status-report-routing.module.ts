import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatusReportComponent} from './status-report/status-report.component';
import {StatusReportModule} from './status-report.module';


const routes: Routes = [
  {path: 'status-report', component: StatusReportComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatusReportRoutingModule {
}

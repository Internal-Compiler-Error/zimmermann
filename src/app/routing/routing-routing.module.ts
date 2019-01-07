import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatusReportModule} from '../status-report/status-report.module';

const routes: Routes = [{
  path: '**', pathMatch: 'full', redirectTo: ''
}];

@NgModule({
  imports: [
    StatusReportModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}

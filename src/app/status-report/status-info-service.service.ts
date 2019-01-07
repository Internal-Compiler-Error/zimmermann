import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StatusInfo} from './data-model/status-info';


const apiUrl = 'https://yorkapitest.roada.ca/api/StatusInfo';

/**
 * Used for Authorization header for Http (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
 *
 * The following hardcoded credential is bill:B1llt3s+ in base64. Please consult Randy Bolton for more info once I am gone.
 *
 */
const credential = 'YmlsbDpCMWxsdDNzKw==';
const headers = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + credential
  })
};

@Injectable({
  providedIn: 'root'
})
export class StatusInfoServiceService {


  constructor(private http: HttpClient) {
  }

  public getStatusInfo(): Observable<StatusInfo[]> {
    return this.http.get<StatusInfo[]>(apiUrl, headers);
  }

  private cSharpDateTimeToJavaScriptDate(cSharpDateTime: string): Date {
    // const rawDate = cSharpDateTime;
    // const year = rawDate.slice(0, 3);
    // const month = rawDate.slice(5, 6);
    // const day = rawDate.slice(9, 10);
    //
    // const hour = rawDate.slice(11, 12);
    // const minute = rawDate.slice(14, 15);
    // const second = rawDate.slice(16, 17);

    return new Date(cSharpDateTime);
  }

}

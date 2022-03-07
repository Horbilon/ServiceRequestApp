import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  readonly requestAPIUrl = "https://localhost:7192/api"

  constructor(private http:HttpClient) { }
  //GET, POST, PUT, DELETE for service requests
  getRequestList(): Observable<any[]> {
    return this.http.get<any>(this.requestAPIUrl + '/requests');
  }

  addRequest(data:any) {
    return this.http.post(this.requestAPIUrl + '/requests', data);
  }

  updateRequest(id: number|string, data:any) {
    return this.http.put(this.requestAPIUrl + `/requests/${id}`, data);
  }

  deleteRequest(id: number|string) {
    return this.http.delete(this.requestAPIUrl + `/requests/${id}`);
  }

  //GET, POST, PUT, DELETE for issue types
  getIssueList(): Observable<any[]> {
    return this.http.get<any>(this.requestAPIUrl + '/IssueTypes');
  }

  addIssue(data:any) {
    return this.http.post(this.requestAPIUrl + '/IssueTypes', data);
  }

  updateIssue(id: number|string, data:any) {
    return this.http.put(this.requestAPIUrl + `/IssueTypes/${id}`, data);
  }

  deleteIssue(id: number|string) {
    return this.http.delete(this.requestAPIUrl + `/IssueTypes/${id}`);
  }


}

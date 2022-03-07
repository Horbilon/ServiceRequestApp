import { Component,Input, OnInit } from '@angular/core';
import { isEmpty, Observable } from 'rxjs';
import { RequestApiService } from 'src/app/request-api.service';

@Component({
  selector: 'app-add-edit-request',
  templateUrl: './add-edit-request.component.html',
  styleUrls: ['./add-edit-request.component.css']
})
export class AddEditRequestComponent implements OnInit {

  requestList$!: Observable<any[]>;
  issueList$!: Observable<any[]>;

  constructor(private service:RequestApiService) { }

  
  @Input() request:any;
  id:number = 0;
  requestType:string = "";
  requestIssue:string = "";
  notes:string = "";
  requestSerialNumber:number|string = "";
  requestDate:Date = new Date;
  requestName:string = "";
  requestEmail:string = "";
  requestPhotoPathFile:string = ""

  ngOnInit(): void {
    this.id = this.request.id;
    this.requestType = this.request.requestType;
    this.requestIssue = this.request.requestIssue;
    this.notes = this.request.notes;
    this.requestSerialNumber = this.request.requestSerialNumber;
    this.requestDate = this.request.requestDate;
    this.requestName = this.request.requestName;
    this.requestEmail = this.request.requestEmail;
    this.requestPhotoPathFile = this.request.requestPhotoPathFile;
    this.issueList$ = this.service.getIssueList();
    this.requestList$ = this.service.getRequestList();
  }

 

  AddRequest() {
    var request = {
      requestType: this.requestType,
      requestIssue: this.requestIssue,
      notes: this.notes,
      requestSerialNumber: this.requestSerialNumber,
      requestDate: this.requestDate,
      requestName: this.requestName,
      requestEmail: this.requestEmail,
      requestPhotoPathFile: this.requestPhotoPathFile    
    }
    if(request.requestPhotoPathFile==null){
      request.requestPhotoPathFile="null";
    }
    this.service.addRequest(request).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSucess = document.getElementById('add-sucess-alert');
      if(showAddSucess) {
        showAddSucess.style.display = "block";
      }
      setTimeout( function () {
        if(showAddSucess) {
          showAddSucess.style.display = "none"
        }
      }, 4000);
    })
  }

  UpdateRequest() {
    var request = {
      id: this.id,
      requestType: this.requestType,
      requestIssue: this.requestIssue,
      notes: this.notes,
      requestSerialNumber: this.requestSerialNumber,
      requestDate: this.requestDate,
      requestName: this.requestName,
      requestEmail: this.requestEmail,
      requestPhotoPathFile: this.requestPhotoPathFile    
    }
    var id:number = this.id;
    if(request.requestPhotoPathFile==null){
      request.requestPhotoPathFile="null";
    }
    this.service.updateRequest(id, request).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSucess = document.getElementById('update-sucess-alert');
      if(showUpdateSucess) {
        showUpdateSucess.style.display = "block";
      }
      setTimeout( function () {
        if(showUpdateSucess) {
          showUpdateSucess.style.display = "none"
        }
      }, 4000);
    })
  }



}

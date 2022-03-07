import { Component,Input, OnInit } from '@angular/core';
import { isEmpty, Observable } from 'rxjs';
import { RequestApiService } from 'src/app/request-api.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

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
    this.issueList$ = this.service.getIssueList();
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
    if(document.getElementById("requestPhotoPathFile")==null){
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

      window.location.reload(); 
      setTimeout( function () {
        if(showAddSucess) {
          showAddSucess.style.display = "none"
        }
      }, 4000);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestApiService } from 'src/app/request-api.service';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  requestList$!: Observable<any[]>;
  issueList$!: Observable<any[]>;

  constructor(private service:RequestApiService) { }

  ngOnInit(): void {
    this.requestList$ = this.service.getRequestList();    
  }

  modalTitle:string = '';
  activateAddEditInspectionComponent:boolean = false;
  request:any;

  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.requestList$ = this.service.getRequestList();
  }

  modalAdd() {
    this.request = {
      id: 0,
      requestType:null,
      requestIssue:null,
      notes:null,
      requestSerialNumber:null,
      requestDate: null,
      requestName: null,
      requestEmail: null,
      requestPhotoPathFile: null
    }
    this.modalTitle = 'Add Request';
    this.activateAddEditInspectionComponent = true;
  }

  modalEdit(item:any) {
    this.request = item;
    this.modalTitle = "Edit Request";
    this.activateAddEditInspectionComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete this service request? \n ID: ${item.id}`)) {
      this.service.deleteRequest(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSucess = document.getElementById('delete-sucess-alert');
        if(showDeleteSucess) {
          showDeleteSucess.style.display = "block";
        }
        setTimeout( function () {
          if(showDeleteSucess) {
            showDeleteSucess.style.display = "none"
          }
        }, 4000);
        this.requestList$=this.service.getRequestList();
      })
    }
  }

  search() {
    var filter, table, tr, td, i, txtValue, column=1, inputArea='';
    var type = <HTMLInputElement>document.getElementById("searchType"); 
    var typeSearch = parseInt(type.value);
    if(typeSearch===1){
      column=1;
    } else if (typeSearch===2){
      column=2;
    }  
    var input = <HTMLInputElement>document.getElementById("search");    
    filter = input.value.toUpperCase();
    table = <HTMLInputElement>document.getElementById("requestTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[column];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  } 

  searchDate(){
    var startDate = <HTMLInputElement>document.getElementById("startDate"); 
    
    var date = new Date(startDate.value); 
    console.log(date)
    var table = <HTMLInputElement>document.getElementById("requestTable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[5];
      
      if (td) {
        var txtValue = new Date(td.innerText);
        console.log(txtValue);
         
        if (txtValue.getDate()>=date.getDate()) {
          console.log("if")
          tr[i].style.display = "";
        } else {
          console.log("else")
          tr[i].style.display = "none";
        }
        
      }       
    }
  }

}

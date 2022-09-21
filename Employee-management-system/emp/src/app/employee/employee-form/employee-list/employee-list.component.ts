import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public fetchdata: any;
  @Input() userlist: any;
  @Output() displaydata: EventEmitter<any> =new EventEmitter();

  public editdata:any;
  constructor(
    private route:Router,
    private activateroute: ActivatedRoute

  ) { 
    // this.userdata = new EventEmitter<any>;
  }

  ngOnInit(): void {
  }

  onDetails()
  {
    console.log(this.activateroute);
    
  }
  onEdit(i){
    this.fetchdata= i;
   console.log(this.fetchdata);
    this.displaydata.emit(this.fetchdata);
  }
 onDelete(j){

    this.userlist.splice(j,1);
  }
 }

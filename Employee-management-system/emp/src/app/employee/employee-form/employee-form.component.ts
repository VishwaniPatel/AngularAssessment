import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public userform: FormGroup;
  public isSubmitted: boolean = false;
  public userdata: any;
  public fetchdata: any;

  constructor(
    private formbuilder:FormBuilder
  ) { 
    this.userdata =[];
    this.userform = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      gender: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
    
    }

    ngOnInit(): void {
    }

    onSubmit(){
    this.userdata.push({
      Name: this.userform.controls['name'].value,
      Gender: this.userform.controls['gender'].value,
      DOB: this.userform.controls['dob'].value,
      Salary: this.userform.controls['salary'].value
  }
  );
      console.log(this.userdata);
      
    }

    onReset(){
      this.userform.reset();
    }

    displaydata(i : any)
    {
      
      // this.fetchdata =i;
      console.log("Fetch",i);
      this.userform.patchValue(i);
    }


  }

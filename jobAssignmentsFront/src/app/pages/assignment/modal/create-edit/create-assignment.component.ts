import { getLocaleDateFormat } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
//import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS =  {
  parse:{
    dateInput:['YYYY-MM-DD']
  },
  display:{
    dateInput:'YYYY-MM-DD',
    monthYearLabel:'YYYY',
    dateA11yLabel:'LL',
    monthYearA11yLabel:'YYYY',
  }
}

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css'],
  providers:[
  //  {provide:DateAdapter, useClass:MomentDateAdapter,deps:[MAT_DATE_LOCALE]},
    {provide:MAT_DATE_FORMATS, useValue:MY_FORMATS}
  ]
})
export class CreateAssignmentComponent implements OnInit {
  title:string;
  typeModal:String="";
  assignmentForm:FormGroup;
  date:any;
  filteredUserNameArray:string[];
  constructor(private fb:FormBuilder,
    private dialogRef:MatDialogRef<CreateAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.title=this.data.title;
  }

  loadForm(){
    this.assignmentForm=this.fb.group({
      description:[''],
      completionDate:[''],

    });
  }


  saveAssignment(){
    this.date=this.assignmentForm.get('completionDate').value;
    console.log(this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+this.date.getUTCDate());
  }
  onCancel(){

  }
}

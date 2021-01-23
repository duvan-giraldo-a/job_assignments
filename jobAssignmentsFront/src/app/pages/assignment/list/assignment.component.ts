import { CreateAssignmentComponent } from './../modal/create-edit/create-assignment.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns:Array<string>;
  filterAssignmentForm:FormGroup;
  filteredUserName:ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  public userNameControl:FormControl=new FormControl();


  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
  constructor(private fb:FormBuilder, private dialog:MatDialog) {
    this.displayedColumns=['id','description','assignmentDate','assignmentHour','estimatedCompletionDate', 'assignedAssesor', 'actions'];
    this.createRegister();
  }
  createRegister(){
    const data=[
      {
        a_id:1,
        a_description:"Hola esto es una asignacion, en la que se deben hacer las siguientes cosas",
        a_assignment_date:"12/12/2020",
        a_assignment_hour:"12:12",
        a_estimated_completion_date:"15/12/2020",
        a_assessor_name:"Jaime Antonio Velázquez Martinez"
      },
      {
        a_id:2,
        a_description:"Hola esto es una asignacion, en la que se deben hacer las siguientes cosas",
        a_assignment_date:"12/12/2020",
        a_assignment_hour:"12:12",
        a_estimated_completion_date:"15/12/2020",
        a_assessor_name:"Jaime Antonio Velázquez Martinez"
      }
    ];
    this.dataSource = new MatTableDataSource(data);
    console.log(this.dataSource.data.length);
  }
  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.filterAssignmentForm = this.fb.group(
      {
        nameUser:['']
      }
    )
  }
  createEdit(item,title){
    const dialogRef = this.dialog.open(CreateAssignmentComponent,{
      data:{
        item,
        title
      },
      height:'400px',
      width:'600px',
      disableClose:true,
      autoFocus:true
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result==='acept'){
        this.ngOnInit();
      }
    });
  }

  show(data:any){

  }
  deleteAssignment(a_id:number){

  }
  searchData(){

  }
  onReset(){

  }

}

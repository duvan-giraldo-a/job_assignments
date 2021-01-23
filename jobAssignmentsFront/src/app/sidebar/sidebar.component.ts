import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  shouldRun=true;
  toggled:boolean;
  wrapperId:any;
  constructor() {
  }

  ngOnInit(): void {
    this.toggled=false;
    this.wrapperId=document.getElementById("wrapper");
  }

  toggleSidebar(){
    console.log(1);
    if(this.toggled){
      this.toggled=false;
      this.wrapperId.className="";
      console.log(this.toggled);
    }
    else{
      this.toggled=true;
      this.wrapperId.className="toggled";
      console.log(this.toggled);
    }
  }

  ngOnDestroy(): void {
  }

}

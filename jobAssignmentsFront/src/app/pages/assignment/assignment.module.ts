import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './list/assignment.component';
import { NgModule } from "@angular/core";
import { AssignmentRoutes } from './assignment.routing';

@NgModule({
  declarations:[

  ],
  imports:[
    CommonModule,
    RouterModule.forChild(AssignmentRoutes)
  ],
  exports:[]
})
export class AssignmentModule{}

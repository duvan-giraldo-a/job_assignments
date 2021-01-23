import { CreateAssignmentComponent } from './assignment/modal/create-edit/create-assignment.component';
import { PagesRoutes } from './pages.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AssignmentModule } from './assignment/assignment.module';

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    AssignmentModule
  ],
  declarations:[],
  providers:[]
})

export class PagesModule{}

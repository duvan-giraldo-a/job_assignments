import { CreateAssignmentComponent } from './modal/create-edit/create-assignment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './list/assignment.component';

export const AssignmentRoutes: Routes = [
  {
    path: 'assignment',
    children: [
      {
        path: 'list',
        component: AssignmentComponent
      },
      {
        path: 'create',
        component: CreateAssignmentComponent
      }
    ]
  }
];



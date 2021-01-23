import {Routes} from '@angular/router';
import { AssignmentComponent } from './pages/assignment/list/assignment.component';

export const AppRoutes:Routes=[
  {
    path:'',
    children:[
      {
        path:'',
        loadChildren:'./pages/pages.module#PagesModule'
      }
    ]
  }
]

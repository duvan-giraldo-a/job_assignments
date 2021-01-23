import {Routes} from '@angular/router';

export const PagesRoutes:Routes=[
  {
    path:'',
    children:[
      {
        path:'assignment',
        loadChildren:'./assignment/assignment.module#AssignmentModule'
      },
    ]
  }
]

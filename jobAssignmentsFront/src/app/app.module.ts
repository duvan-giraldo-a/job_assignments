import { CommonModule } from '@angular/common';
import { CreateAssignmentComponent } from './pages/assignment/modal/create-edit/create-assignment.component';
import { AppRoutes } from './app.routing';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

/*
  Material modules
*/
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';




import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AssignmentComponent } from './pages/assignment/list/assignment.component';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AssignmentComponent,
    CreateAssignmentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,

    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,

    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

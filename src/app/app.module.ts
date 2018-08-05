import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { CourseListModule } from 'src/app/course-list/course-list.module';
import { SearchComponent } from './search/search.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item';
import { CourseService} from '../course.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: CourseListItem[] = []

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourseItems();
  }

  onCourseDeleted(course){
    console.log(course.Id + ' is deleted')
  }

  onLoadMoreClick() {
    console.log("load more clicked");
  }

}

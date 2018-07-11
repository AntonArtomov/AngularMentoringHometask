import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item';

@Component({
  selector: 'course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;

  @Output() courseDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteCourse() {
    this.courseDeleted.emit();
  }
}

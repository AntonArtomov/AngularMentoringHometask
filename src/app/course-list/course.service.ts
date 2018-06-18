import { Injectable } from '@angular/core';
import { CourseListItem } from 'src/app/course-list/course-list-item';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourseItems(): CourseListItem[] {
    return [
      {
        Id:1,
        Title: "Video Course 1",
        CreationDate: new Date("Jan 1,2018"),
        Duration: 88,
        Description: "something very interesting, part 1. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla"
      },
      {
        Id:2,
        Title: "Video Course 2",
        CreationDate: new Date("Jun 8,2018"),
        Duration: 98,
        Description: "something very interesting, part 1. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla"
      },
      {
        Id:3,
        Title: "Video Course 3",
        CreationDate: new Date("Aug 22,2018"),
        Duration: 58,
        Description: "something very interesting, part 1. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla"
      },
      {
        Id:4,
        Title: "Video Course 4",
        CreationDate: new Date("Sep 3,2018"),
        Duration: 128,
        Description: "something very interesting, part 1. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla. Bla-bla-bla"
      }     
    ]
  }
}

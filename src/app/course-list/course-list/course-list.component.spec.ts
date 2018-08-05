import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseListItem } from '../course-list-item';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseItem: CourseListItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseListItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseItem = new CourseListItem(666,"sixsixsix",new Date(),666,"desc");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onCourseDeleted', ()=> {
    it('should log id', () => {
      console.log = jasmine.createSpy('log');
      component.onCourseDeleted(this.courseItem.Id);  
      expect(console.log).toHaveBeenCalledWith('666 is deleted');
    })
  })

  describe('#onLoadMoreClick', ()=> {
    it('should load more button should log msg', () => {
      console.log = jasmine.createSpy('log');
      component.onLoadMoreClick();  
      expect(console.log).toHaveBeenCalledWith('load more clicked');
    })
  })
});

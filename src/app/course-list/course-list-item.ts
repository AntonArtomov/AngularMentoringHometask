export interface ICourseListItem {
    Id: number,
    Title: string,
    CreationDate: Date,
    Duration: number,
    Description: string
}

export class CourseListItem implements ICourseListItem {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: number;
    Description: string;
    
    constructor(id: number, title: string, creationDate: Date, duration: number, description: string) {
        this.Id = id;
        this.Title = title;
        this.CreationDate = creationDate;
        this.Duration = duration;
        this.Description = description
    }
}
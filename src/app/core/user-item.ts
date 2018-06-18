export interface IUserItem {
    Id: number,
    FirstName: string,
    LastName: string 
}

export class UserItem implements IUserItem {
    Id: number;
    FirstName: string;
    LastName: string; 
    
    constructor(id: number, firstName: string, lastName: string) {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}
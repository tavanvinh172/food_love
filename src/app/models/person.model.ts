import { Bill } from "./bill.model";

export class Person {
    
    person_id?: number;
    username?: string;
    password?: string;
    role?: number;
    name?: string;
    phoneNumber?: string;
    birthday?: Date;
    urlImg?:string;
    token?: string;
    createDate?: Date;
    bills?: Bill[];

    constructor() {
        
    }
}
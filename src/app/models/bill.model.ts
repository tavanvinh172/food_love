import { FoodBill } from "./food-bill.model";
import { Person } from "./person.model";

export class Bill {

    bill_id?: number;

    totalPrice?: number;

    createdDate?: Date;

    payment_method?: string;

    creator?: Person;

    foodBills?: FoodBill;

    constructor() {
        
    }
}
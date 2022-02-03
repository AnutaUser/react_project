// const func = (str:string): number | null | string=> {
// return "gbn";
// }
// func("TC")

// import {IUser} from "./interface/user.interface";
//
// const user: IUser = {age: 19, name: "Vova", status: false, username: "Vov@n"};
//
// // const userCounter = (user:IUser): IUser => {
// // return user
// // }
// // console.log(userCounter({username: "Vovan", age: 25, name: "fooooo"}))
//
// const userCounter = (user:Partial<IUser>): Partial<IUser> => {
//     return user
// }
// console.log(userCounter({username: "Vovan", age: 25, name: "fooooo"}))
//
// import {userService} from "./services/user.service";
//
// userService.getAll().then(value => value.data).then(users => {
//     for (const user of users) {
//         console.log(user, user.website)
//     }
// })

// class User {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean;
//     constructor(id: number, name: string, age: number, status: boolean) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }
//
// const user = new User(1, "Vova", 25, true);
// console.log(user.name);

// class User {
//     constructor(private id: number, private name: string, private age: number, private status: boolean) {
//     }
//
//     getName():string {
//         return this.name
//     }
// }
//
// const user = new User(1, "Vova", 25, true);
// console.log(user.getName());
//
// class UserChild extends User {
//     constructor(id: number, name: string, age: number, status: boolean) {
//         super(id, name, age, status);
//     }
//     parentGetName():string {
//         return this.getName()
//     }
//     protected getName():string {
//         return super.getName()
//     }
//
// }
//
// const newUserChild = new UserChild(1.1, "kokos", 5, false);
//
// console.log(newUserChild.parentGetName())

// class User {
//     constructor(name: string, age: number, status: boolean){
//
//     }
// }
//
// const userObj:User = {name:"Kety", age:21, status: false}
// console.log(userObj)

// import {IShapesActions} from "./services/shapesActions.interface";
//
// class Rectangle implements IShapesActions {
//     constructor(private a: number, private b:number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return 2*this.a*this.b;
//     }
// }
//
// class Triangle implements IShapesActions{
//     constructor(private a: number, private b:number, private c: number, private h: number) {
//     }
//
//     area(): number {
//         return 0.5*this.a*this.h;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }
//
// const shapes: IShapesActions [] = [new Rectangle(1, 2), new Triangle(2, 2, 3, 4), new Rectangle(5,6)];
// console.log(shapes)
//
// for (const shape of shapes) {
//     console.log(shape.constructor["name"], "Area = ", shape.area());
//     console.log(shape.constructor["name"], "Perimeter = ", shape.perimeter());
// }

import {Enum} from "./enum";

console.log(Enum)
// 1) создать интерфейс на основе этого объекта:
//
import {IMission} from "./interface/IMission.interface";

const mission:IMission = {
    "mission_name": "Starlink-15 (v1.0)",
    "launch_date_local": "2020-10-24T11:31:00-04:00",
    "launch_site": {
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
},
    "links": {
    "article_link": null,
        "video_link": "https://youtu.be/J442-ti-Dhg"
},
    "rocket": {
    "rocket_name": "Falcon 9",
        "first_stage": {
        "cores": [
            {
                "flight": 7,
                "core": {
                    "reuse_count": 6,
                    "status": "unknown"
                }
            }
        ]
    },
    "second_stage": {
        "payloads": [
            {
                "payload_type": "Satellite",
                "payload_mass_kg": 15400,
                "payload_mass_lbs": 33951.2
            }
        ]
    }
}
}

// -----------------------------------------------------------------------------------------------

// import {IMission} from "./interface/mission.interface";
//
// const mission:Partial<IMission> = {
//     mission_name: "mission_name",
//     launch_date_local: "launch_date_local",
//     launch_site: {site_name_long:'site_name_long'}
// }

console.log(mission)

// ---------------------------------------------------------------------------—————————
// 2) протипизировать функции:
//
// import {IUser} from "./interface/IUser.interface";
// import {IShapes} from "./interface/IShapesInterface";
//
// const user: IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// };
//
// // function sum(a,b){
// //     return a+b
// // }
//
// class sum implements IShapes {
//     add(): number {
//         return this.a + this.b;
//     }
//     constructor(private a: number, private b: number) {
//     }
// }
//
// class showSum implements IShapes {
//     add(): number {
//         return this.a + this.b;
//     }
//     constructor(private a: number, private b: number) {
//     }
// }
// // function showSum(a,b){
// //     console.log(a + b);
// // }
//
// class incAge implements IShapes {
//     add(): number {
//         return user.age += this.inc;
//     }
//
//     constructor(private user: IUser, private inc: number) {
//
//     }
// }
//
// // function incAge(someUser, inc){
// //     someUser.age+=inc
// //     return someUser
// // }
//
// // console.log(new sum(1, 2));
// // console.log(new showSum(2,3));
// // console.log(new incAge(user, 2));
//
// const shapes: IShapes [] = [
//     new sum(1,2),
//     new showSum(2,3),
//     new incAge(user,2)
// ];
//
// console.log(shapes);
//
// for (const shape of shapes) {
//     console.log(shape.constructor["name"], shape.add());
// }
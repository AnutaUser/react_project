// export interface IMission {
//     mission_name: string;
//     launch_date_local: string;
//     launch_site: {
//         site_name_long: string;
//         };
//     links: {
//         article_link: null;
//         video_link: string;
//         };
//     rocket: {
//         rocket_name: string;
//         first_stage: {
//             cores: [
//                 {
//                     flight: number;
//                     core: {
//                         reuse_count: number;
//                         status: string;
//                         }
//                 }
//             ]
//         };
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: string;
//                     payload_mass_kg: number;
//                     payload_mass_lbs: number;
//                 }
//             ]
//         }
//     }
// }

// export interface IMission {
//     mission_name: string;
//     launch_date_local: string;
//     launch_site: ILaunch_site;
//     links: ILinks;
//     rocket: IRocket;
// }
//
// export interface ILaunch_site {
//     site_name_long: string;
// }
//
// export interface ILinks {
//     article_link: null;
//     video_link: string;
// }
//
// export interface IRocket {
//     rocket_name: string;
//     first_stage: IFirst_stage;
//     second_stage: ISecond_stage;
// }
//
// export interface IFirst_stage {
//     cores: ICores[];
// }
//
// export interface ICores {
//     flight: number,
//     core: ICore;
// }
//
// export interface ICore {
//     reuse_count: number;
//     status: string;
// }
//
// export interface ISecond_stage {
//     payloads: IPayloads[];
// }
//
// export interface IPayloads {
//     payload_type: string;
//     payload_mass_kg: number;
//     payload_mass_lbs: number;
//
// }

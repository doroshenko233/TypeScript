import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly formatVideo: string,
        readonly originalName: string,
        readonly yearOfIssue: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly viewingTime: number | string,
        readonly price: number,
    ) { }
}
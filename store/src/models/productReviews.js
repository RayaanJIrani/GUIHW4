//Model for reviews
export class Review {
    constructor(userName, rating, comment, date) {
        this.userName = userName;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}
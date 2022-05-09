export class movieData {
    constructor(element) {
        this.movieData = {
            ID: element.id,
            Name: element.title,
            Poster: element.poster_path,
            Release: element.release_date,
            Overview: element.overview,
            Rating: element.vote_average,
            Genrers: element.genre_ids
        }
    }
}
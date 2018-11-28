export class FavouriteMovie {

    favouriteId: number;
    movieId: number;
    userId: String;
    movieName: String;
    moviePosterUrl: String;
    movieReleaseDate: String;
    movieDescription: String;
    constructor(
        favouriteId: number,
        movieId: number,
        userId: String,
        movieName: String,
        moviePosterUrl: String,
        movieReleaseDate: String,
        movieDescription: String) {
    this.favouriteId = favouriteId;
    this.movieId = movieId;
    this.userId = userId;
    this.movieName = movieName;
    this.moviePosterUrl = moviePosterUrl;
    this.movieReleaseDate = movieReleaseDate;
    this.movieDescription = movieDescription;
    }
}

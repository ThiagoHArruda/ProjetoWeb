export class movieView {
    static template(element) {
        return `<div class="carrocel__filme" style= "background-image: url(https://image.tmdb.org/t/p/original${element.Poster});"></div>
      `
    }

}
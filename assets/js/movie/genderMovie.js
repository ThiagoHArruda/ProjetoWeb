import { movieData } from "./movieData.js"
import { movieView } from "./movieView.js"

export class genrerMovie {
    constructor() {
        this.genrer = "https://api.themoviedb.org/3//genre/movie/list?api_key=650034e9709e515cc4452e2a99095e59"
        this.genrerList = new Array()
        this.moviesGenrer = new Array()
    }
    get GenrerList() {
        return fetch(this.genrer)
            .then((resp) => resp.json())
            .then((data) => {
                data.genres.forEach((element) => {
                    this.genrerList.push(element)
                })
                console.log(this.genrerList);
                for (let index = 0; index < 3; index++) {
                    let pos = Math.floor(Math.random() * 20)
                    const id = this.genrerList[pos].id
                    const name = this.genrerList[pos].name
                    console.log(id);
                    this.GenrerMovieList(id, name, index)
                }



            }).catch((err) => console.log(err))
    }

    async GenrerMovieList(id, name, ind) {
        const genrerMovie = `http://api.themoviedb.org/3/genre/${id}/movies?api_key=650034e9709e515cc4452e2a99095e59&language=en-US`
        const resp = await fetch(genrerMovie)
        const data = await resp.json()

        let carrocel = document.querySelectorAll('.catalogo__carrocel-lista')
        let h1 = document.querySelectorAll("h1")


        data.results.forEach((element) => {
            let test = new movieData(element)
            let li = document.createElement('li')
            h1[ind].innerHTML = name
            li.classList.add('carrocel')
            carrocel[ind].appendChild(li)
            li.innerHTML = movieView.template(test.movieData)

            //carrocel[0].appendChild(movieView.template(test.movieData))
            this.moviesGenrer.push(test.movieData)
        })



    }
}
import { theMovieDb } from './json/themoviedb.js'
import { genrerMovie } from './movie/genderMovie.js'
let users_ul = document.querySelector('.users')
let button = document.querySelector('button')
const usersRandom = 'https://reqres.in/api/users?page=2'
const usersRandom1 = 'https://randomuser.me/api'


let genrer = new genrerMovie()
genrer.GenrerList
const render_user = (data) => {


    let li = document.createElement('li'),

        first_name = data['first_name'],
        last_name = data['last_name'],
        email = data['email'],
        avatar = data['avatar'];

    li.innerHTML = `<li>Nome:${first_name} ${last_name}</li>
                    <li>Email:${email}</li>
                    <li>Picture: <img src="${avatar}"/></li>
                    </ul>`
    users_ul.appendChild(li)

}


const getJSON = (url, callback) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true)
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let data = JSON.parse(xmlhttp.responseText)
            console.log(data);
            data['data'].forEach(datas => {
                console.log(datas);
                render_user(datas)
            });
        }
    }
    xmlhttp.send();
}

const data = null;

const movie = "https://api.themoviedb.org/3/movie/33?api_key=650034e9709e515cc4452e2a99095e59"
const genderMovie = "http://api.themoviedb.org/3/genre/16/movies?api_key=650034e9709e515cc4452e2a99095e59&language=en-US"
const gender = "https://api.themoviedb.org/3//genre/movie/list?api_key=650034e9709e515cc4452e2a99095e59"



function successCB(data) {
    console.log(data);
};

function errorCB(data) {
    console.log("Error callback: " + data);
};
// theMovieDb.collections.getDetails({ "id": 12 }, successCB, errorCB);




let imgDiv = document.getElementById("img_div")
fetch(gender)
    .then((resp) => resp.json())
    .then((data) => {

        console.log(data);

        //pegando nomes e imagem de generos
        // let filmes = data.results
        // let filmesNome = new Array()
        // console.log(filmes);
        // filmes.forEach((element) => {
        //     filmesNome.push(element.original_title)
        //     let poster = element.poster_path
        //     let linkPoster = `https://image.tmdb.org/t/p/original${poster}`
        //     let imgPoster = document.createElement('img')
        //     imgPoster.style.height = "200px"
        //     imgPoster.src = linkPoster
        //     imgDiv.appendChild(imgPoster)
        // })

        //pegando o nome do filme
        // let name = data.original_title
        // console.log(name);

        // //pegando a imagem
        // let poster = data.poster_path
        // let linkPoster = `https://image.tmdb.org/t/p/original${poster}`
        // let imgPoster = document.createElement('img')
        // imgPoster.src = linkPoster
        // imgDiv.appendChild(imgPoster)
    })
    .catch((err) => console.log(err))


button.addEventListener("click", () => {
    getJSON(usersRandom)
    loginAPI()
})
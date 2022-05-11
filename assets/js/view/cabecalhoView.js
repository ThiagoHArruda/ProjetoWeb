export class cabecalhoView {
    static template(nome) {
        return `
        <div alt="Logo Prime Video" class="cabecalho__logo"></div>

        <nav class="cabecalho__menu">
      <ul class="cabecalho__menu-ul">
          <li class="cabecalho__menu-lista"><a href="#" class="cabecalho__menu-texto">Início</a></li>
          <li class="cabecalho__menu-lista"><a href="usuarios.html" class="cabecalho__menu-texto">Loja</a>
          </li>
          <li class="cabecalho__menu-lista"><a href="#" class="cabecalho__menu-texto">Canais</a></li>
          <li class="cabecalho__menu-lista" id="categorias">
              <span class="cabecalho__menu-listaSpan">
                  <a href="#" class="cabecalho__menu-texto">Categorias
                  </a>
              </span>
              <div id="categoria__extendida" class="categoria__extendida">
                  <div class="categoria__extendida-principal">
                      <h3 class="categoria__extendida--titulo">Principais Categorias</h3>
                      <ul class="categoria__extendida-principal--lista">
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Incluido no Prime</a>
                          </li>
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Amazon Original e
                                  Exclusivo</a></li>
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Filmes</a></li>
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Séries</a></li>
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Infantis</a></li>
                          <li class="extendida__principal-listaTopico">
                              <a href="#" class="extendida__principal-listaTexto">Esportes</a></li>
                      </ul>
                  </div>
                  <div class="categoria__extendida-divisao"></div>
                  <div class="categorias__extendida-generos">
                      <div class="categorias__extendida-Pgeneros">
                          <h3 class="categoria__extendida--titulo">Gêneros</h3>
                          <ul class="extendida__Pgeneros">
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Ação e Aventuda</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Comédia</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Drama</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Documentários</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Para crianças e toda
                                      família</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Fantasia</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Terror</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Romance</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Ficção científica</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Suspense</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Anime</a>
                              </li>
                              <li class="extendida__Pgeneros-generos">
                                  <a href="" class="extendida_Pgeneros-link">Militar e Guerra</a>
                              </li>
                              <li class="extendida__Pgeneros-generos"><a href="" class="extendida_Pgeneros-link">Policial</a>
                              </li>
                          </ul>
                      </div>
                      <div class="categorias__extendida-Sgeneros"></div>
                  </div>
              </div>
          </li>
          <li class="cabecalho__menu-lista"><a href="test.html" class="cabecalho__menu-texto">Minha Área</a>
          </li>
          <li id="cabecalho__menu-explorar" class="cabecalho__menu-lista"><a href="#" class="cabecalho__menu-texto">Explorar</a></li>
      </ul>
  </nav>
  <input class="cabecalho__pesquisa-input" type="text">
  <div class="cabecalho__profile">
      <img src="assets/img/icons/perfil.png" alt="Foto Perfil" class="cabecalho__profile-img">
      <span class="cabecalho__profileSpan">
          <a class="cabecalho__profile-usuario" href="#" alt="Nome do Usuario">${nome}</a>
      </span>
  </div>`
    }
}
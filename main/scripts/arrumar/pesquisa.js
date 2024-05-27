function buscar() {
  var pesquisa = document.getElementById('pesquisaInput').value;
  var elemento = document.getElementsByClassName('resultado_busca')[0];
  var treilento = document.getElementsByClassName('botao_fechar')[0];

  elemento.style.display = "flex";
  treilento.style.display = "flex";

  fetch('/main/back/search/pesquisar.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'pesquisa=' + encodeURIComponent(pesquisa),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao buscar dados');
      }
      return response.json();
  })
  .then(resultados => {
      exibirResultados(resultados);
  })
  .catch(error => {
      console.error('Erro:', error);
  });
}

function exibirResultados(resultados) {
    var resultadoContainer = document.getElementById('resultado');
  
    resultadoContainer.innerHTML = '';
  
    if (resultados.length > 0) {
        resultados.forEach(postagem => {
              var cardAgendamento = document.createElement('section');
              cardAgendamento.classList.add('cardPostagem');
  
              cardAgendamento.innerHTML = `
              <section class="todoCartao">
              <div class="ladoEsquerdo">
                  <div class="imgUsuario">
                      <div class="cirUsuario">
                          <img class="arqUsuario" src="${postagem.link_imagem}" alt="">
                      </div>
                  </div>
                  <div class="infConteudo">
                      <div class="caiConteudo">
                          <img class="tamImagem" src="${postagem.imagem_url}" alt="">
                          <div class="notConteudo">
                              <h4 class="valNota">${postagem.nota_spoiler}</h4>
                              <legend class="legNota">Mangas</legend>
                          </div>
                          <legend class="datConteudo">${postagem.data_envio_formatada}</legend>
                      </div>
                  </div>
                  <div class="ondeEncontrar">
                      <button class="btnOnde">Onde<br>achar?</button>
                  </div>
              </div>
              <div class="ladoDireito">
                  <div class="titConteudo">
                      <h2 class="titPrincipal">${postagem.titulo_spoiler}</h2>
                  </div>
                  <div class="texConteudo">
                      <p class="texPrincipal">${postagem.informacao_spoiler}</p>
                  </div>
                  <div class="intConteudo">
                      <button class="btnConteudo" id="darLike" data-id-postagem="${postagem.id_spoiler}" data-id-usuario="${postagem.id_usuario}"><img class="btnImagem" src="/main/images/system/mango.svg" alt=""></button>
                      <button class="btnConteudo"><img class="btnImagem" src="/main/images/system/chat.svg" alt=""></button>
                      <button class="btnConteudo"><img class="btnImagem" src="/main/images/system/share.svg" alt=""></button>
                  </div>
              </div>
          </section>
            `;
  
            resultadoContainer.appendChild(cardAgendamento);
        });
    } else {
        resultadoContainer.textContent = 'Nenhum resultado encontrado.';
    }
  }
  
function fecharBusca(){
    let resultado = document.getElementsByClassName('resultado_busca')[0];
    let botaoF = document.getElementsByClassName('botao_fechar')[0];

    resultado.style.display = "none";
    botaoF.style.display = "none";
}
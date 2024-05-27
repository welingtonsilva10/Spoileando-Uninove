function atualizarLista2() {
    var lista1 = document.getElementById("typeContent");
    var lista2 = document.getElementById("platform");
    var selectedValue = lista1.value;
    lista2.innerHTML = "";
  
    switch (selectedValue) {
      case "filme":
        lista2.appendChild(new Option("Netflix", "Netflix"));
        lista2.appendChild(new Option("Amazon Prime Video", "AmazonPrime"));
        lista2.appendChild(new Option("Hulu", "Hulu"));
        lista2.appendChild(new Option("Disney+", "DisneyPlus"));
        lista2.appendChild(new Option("HBO Max", "HBO"));
        lista2.appendChild(new Option("Apple TV+", "AppleTV"));
        lista2.appendChild(new Option("Google Play Filmes", "GooglePlay"));
        lista2.appendChild(new Option("Peacock", "Peacock"));
        lista2.appendChild(new Option("Crunchyroll", "Crunchyroll"));
        lista2.appendChild(new Option("Funimation", "Funimation"));
        lista2.appendChild(new Option("Vudu", "Vudu"));
        lista2.appendChild(new Option("Paramount+", "ParamountPlus"));
        lista2.appendChild(new Option("YouTube Premium", "YouTube"));
        lista2.appendChild(new Option("Twitch", "Twitch"));
        lista2.appendChild(new Option("CuriosityStream", "CuriosityStream"));
        lista2.appendChild(new Option("Shudder", "Shudder"));
        lista2.appendChild(new Option("DC Universe", "DCUniverse"));
        lista2.appendChild(new Option("Mubi", "Mubi"));
        lista2.appendChild(new Option("Noggin", "Noggin"));
        lista2.appendChild(new Option("Kanopy", "Kanopy"));
        lista2.appendChild(new Option("Rooster Teeth", "RoosterTeeth"));
        lista2.appendChild(new Option("Quibi", "Quibi"));
        lista2.appendChild(new Option("Hayu", "Hayu"));
        lista2.appendChild(new Option("Sling TV", "SlingTV"));
        lista2.appendChild(new Option("FuboTV", "FuboTV"));
        lista2.appendChild(new Option("CBS All Access", "CBSAllAccess"));
        lista2.appendChild(new Option("Piratex", "Piratex"));
        break;
      case "jogo":
        lista2.appendChild(new Option("PlayStation", "PlayStation"));
        lista2.appendChild(new Option("Xbox", "Xbox"));
        lista2.appendChild(new Option("Nintendo Switch", "NintendoSwitch"));
        lista2.appendChild(new Option("PC", "PC"));
        lista2.appendChild(new Option("Mobile", "Mobile"));
        lista2.appendChild(new Option("Google Stadia", "GoogleStadia"));
        lista2.appendChild(new Option("PlayStation Portable (PSP)", "PSP"));
        lista2.appendChild(new Option("PlayStation Vita", "PSVita"));
        lista2.appendChild(new Option("Oculus Rift", "OculusRift"));
        lista2.appendChild(new Option("HTC Vive", "HTCVive"));
        lista2.appendChild(new Option("Valve Index", "ValveIndex"));
        lista2.appendChild(new Option("Oculus Quest", "OculusQuest"));
        break;
      case "livro":
        lista2.appendChild(new Option("Kindle", "Kindle"));
        lista2.appendChild(new Option("Kobo", "Kobo"));
        lista2.appendChild(new Option("Nook", "Nook"));
        lista2.appendChild(new Option("Google Play Livros", "GooglePlayLivros"));
        lista2.appendChild(new Option("Apple Books", "AppleBooks"));
        lista2.appendChild(new Option("Scribd", "Scribd"));
        lista2.appendChild(new Option("Audible", "Audible"));
        lista2.appendChild(new Option("Libby", "Libby"));
        lista2.appendChild(new Option("OverDrive", "OverDrive"));
        lista2.appendChild(new Option("ComiXology", "ComiXology"));
        lista2.appendChild(new Option("Bookmate", "Bookmate"));
        lista2.appendChild(new Option("Hoopla", "Hoopla"));
        lista2.appendChild(new Option("Goodreads", "Goodreads"));
        lista2.appendChild(new Option("Project Gutenberg", "ProjectGutenberg"));
        lista2.appendChild(new Option("Wattpad", "Wattpad"));
        lista2.appendChild(new Option("Barnes & Noble Press", "BarnesNoblePress"));
        lista2.appendChild(new Option("Smashwords", "Smashwords"));
        lista2.appendChild(new Option("BookBub", "BookBub"));
        lista2.appendChild(new Option("Book Depository", "BookDepository"));
        break;
      case "serie":
        lista2.appendChild(new Option("Netflix", "Netflix"));
        lista2.appendChild(new Option("Amazon Prime Video", "AmazonPrime"));
        lista2.appendChild(new Option("Hulu", "Hulu"));
        lista2.appendChild(new Option("Disney+", "DisneyPlus"));
        lista2.appendChild(new Option("HBO Max", "HBO"));
        lista2.appendChild(new Option("Apple TV+", "AppleTV"));
        lista2.appendChild(new Option("Google Play Filmes", "GooglePlay"));
        lista2.appendChild(new Option("Peacock", "Peacock"));
        lista2.appendChild(new Option("Crunchyroll", "Crunchyroll"));
        lista2.appendChild(new Option("Funimation", "Funimation"));
        lista2.appendChild(new Option("Vudu", "Vudu"));
        lista2.appendChild(new Option("Paramount+", "ParamountPlus"));
        lista2.appendChild(new Option("YouTube Premium", "YouTube"));
        lista2.appendChild(new Option("Twitch", "Twitch"));
        lista2.appendChild(new Option("CuriosityStream", "CuriosityStream"));
        lista2.appendChild(new Option("Shudder", "Shudder"));
        lista2.appendChild(new Option("DC Universe", "DCUniverse"));
        lista2.appendChild(new Option("Mubi", "Mubi"));
        lista2.appendChild(new Option("Noggin", "Noggin"));
        lista2.appendChild(new Option("Kanopy", "Kanopy"));
        lista2.appendChild(new Option("Rooster Teeth", "RoosterTeeth"));
        lista2.appendChild(new Option("Quibi", "Quibi"));
        lista2.appendChild(new Option("Hayu", "Hayu"));
        lista2.appendChild(new Option("Sling TV", "SlingTV"));
        lista2.appendChild(new Option("FuboTV", "FuboTV"));
        lista2.appendChild(new Option("CBS All Access", "CBSAllAccess"));
        lista2.appendChild(new Option("Piratex", "Piratex"));
        break;
      default:
        break;
    }
}
function verificarSelecao() {
  const selectElement = document.getElementById('opcao');
  const selecaopit = selectElement.options[selectElement.selectedIndex].value;
  const btn = document.getElementById('btnProxCida');
  if (selecaopit === 'Nada') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}
function verificarSelecao2() {
  const imput = document.getElementById('queryInput');
  const selectElement = document.getElementById('opcao');
  const selecaopit = selectElement.options[selectElement.selectedIndex].value;
  const btnPesquisa = document.getElementById('btnChucrute');
  const txtPesquisa = document.getElementById('queryInput');
  if (selecaopit === 'Nada' || txtPesquisa.value == '') { 
    btnPesquisa.disabled = true;
    imput.style.border = '1px solid red';
  } else {
    btnPesquisa.disabled = false;
  }
}
  
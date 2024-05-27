// Get variables of update screen
const upScre = Array(
    document.getElementById('formImage'),
    document.getElementById('formPassword'),
    document.getElementById('formMail'),
    document.getElementById('formUser'),
    document.getElementById('formPhone')
)
const imgDin = Array(
    document.getElementById('picture_input'),
    document.getElementById('imagePreview')
)
// Get variables of new screen
const newScre = Array(
    document.getElementById('rating'),
    document.getElementById('display-rating')
)
const forVa = [
    document.getElementById('shareForm'),
    document.getElementById('typeContent'),
    document.getElementById('titleEntry'),
    document.getElementById('results'),
    document.getElementById('selectedImageUrl'),
    0,
    document.getElementById('resenha'),
]
const next = [
    document.getElementById('title'),
    document.getElementById('capa'),
    document.getElementById('comment'),
    document.getElementById('nota')
]
const page = [
    document.getElementById('pagePost')
]
const cPreview = [
    document.getElementById('cardPreview'),
    document.getElementById('imgPreview'),
    document.getElementById('titPreview'),
    document.getElementById('comPreview'),
]

let val = Array(
    document.getElementById('valueReceve'),
    document.getElementById('rating')
)
const container = document.querySelector('.sectionCarroselInteractive');
const janelas = document.querySelectorAll('.windowJamComment');

let indiceAtual = 0;



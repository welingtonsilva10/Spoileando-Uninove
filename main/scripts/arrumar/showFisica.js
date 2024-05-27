function showVer(id) {
    const versao = document.getElementById(id);
    const disp = window.getComputedStyle(versao).getPropertyValue('display');

    if (disp === 'none') {
        versao.style.display = 'flex';
    } else {
        versao.style.display = 'none';
    }
}
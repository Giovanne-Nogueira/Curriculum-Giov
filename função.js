var SobreMim = window.document.getElementById("SobreMim")
var Formação = window.document.getElementById("Formação")
var habilidades = window.document.getElementById("habilidades")
var experiencia = window.document.getElementById("experiencia")
var idiomas = window.document.getElementById("idiomas")
var contatos = window.document.getElementById("contatos")
var setaDir = window.document.getElementById("seta-direita")
var setaEsq = window.document.getElementById("seta-esquerda")
var setadir2 = window.document.getElementById("seta-direita2")
var setaesq2 = window.document.getElementById("seta-esquerda2")

function rolarparadireita(){
    Formação.style = "display:grid"
    experiencia.style = "display:grid"
    SobreMim.style = "display:none"
    habilidades.style = "display:none"
    setaDir.style = "display:none"
    setaEsq.style = "display:flex"
    setadir2.style = "display:flex"
    idiomas.style = "display:grid"
}
function rolarparaesquerda(){
    Formação.style = "display:none"
    experiencia.style = "display:none"
    idiomas.style = "display:none"
    SobreMim.style = "display:grid"
    habilidades.style = "display:grid"
    setaDir.style = "display:flex"
    setaEsq.style = "display:none"
    setadir2.style = "display:none"
}
function rolarparadireita2(){
    Formação.style = "display:none"
    experiencia.style = "display:none"
    idiomas.style = "display:none"
    contatos.style = "display:grid"
    setadir2.style = "display:none"
    setaEsq.style = "display:none"
    setaesq2.style = "display:flex"

}
function rolarparaesquerda2(){
    contatos.style = "display:none"
    Formação.style = "display:grid"
    experiencia.style = "display:grid"
    idiomas.style = "display:grid"
    setaesq2.style = "display:none"
    setaDir.style = "display:none"
    setaEsq.style = "display:flex"
    setadir2.style = "display:flex"

}


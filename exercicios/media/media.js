/**
 * calculo da media de 4 notas 
 * @author thiago porfirio malagolin
 */

// variaveis 
let nota1, nota2, nota3, nota4, media

function calcular() {
    // entrada de dados 
    nota1 = Number(frmMedia.txtNota1.value)
    nota2 = Number(frmMedia.txtNota1.value)
    nota3 = Number(frmMedia.txtNota1.value)
    nota4 = Number(frmMedia.txtNota1.value)
    // processamneto 
    media = (nota1 + nota2 + nota3 + nota4) / 4
    // Saida 
    frmMedia.txtMedia.value = media.toFixed(1)
    if (media < 4) {
        frmMedia.txtStatus.value = "REPROVADO"
    } else if (media > 7) {
        frmMedia.txtStatus.value = "APROVADO"
    } else {
        frmMedia.txtStatus.value = "RECUPERAÇAO"
    }
}



var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else {
    console.log(`Boa Noite!`)
}
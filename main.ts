input.onButtonPressed(Button.A, function () {
    numero = numero + 1
})
input.onButtonPressed(Button.AB, function () {
    numero = 0
})
input.onButtonPressed(Button.B, function () {
    numero = numero - 1
})
let numero = 0
numero = 0
basic.forever(function () {
    basic.showNumber(numero)
})

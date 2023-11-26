import { Modal } from './modal.js'
import { alertError } from './alertError.js'
import { notANumber, calculateIMC } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

form.onsubmit = e => {
    e.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        alertError.open()
        return //Toda função que encontrar o return parará a execução
    }

    alertError.close()

    const result = calculateIMC(weight, height);
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open()
}


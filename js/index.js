// variables result section
let resultComponent = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let statusRandom =  document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

//  variables summary section

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.querySelector('.button');

// mostrar cuando se haya cargado la pagina

function randomValues() {
    let values = [];
    for (let i = 1; i <= 4; i ++){
        let randomNumbers = Math.round(Math.random() * 100);
        values.push(randomNumbers)
    }
    values.forEach((value, index) => {
        switch (index){
            case 0:
                reaction.innerText = value + ' / 100';
                break;
            case 1:
                memory.innerText = value + ' / 100';
                break;
            case 2:
                verbal.innerText = value + ' / 100';
                break;
            case 3:
                visual.innerText = value + ' / 100';
                break;
            default:
                'no jodan mucho'   
                break;
        }
    })
    // sumar valores para despues sacar la media

    const media = values.reduce((valuePrevious, currentValue) =>{
        return valuePrevious + currentValue;
    }, 0);
   
    const result = Math.round(media / 4);

    if (result >= 75){
        resultComponent.classList.add('result-component');
        numbersContainer.classList.add('numbers');
        resultComponent.classList.remove('result-component-warning', 'result-component-danger');
        stateRange.innerText = result;
        statusRandom.innerText = 'excelente';
        paragraph.innerText = 'felicidades!';
    }
    if (result <= 74 && result >= 43 ){
        resultComponent.classList.add('result-component-warning');
        numbersContainer.classList.add('numbers-warning');
        resultComponent.classList.remove('result-component', 'result-component-danger');
        stateRange.innerText = result;
        statusRandom.innerText = 'normal';
        paragraph.innerText = 'Estas en el rango normal de personas';
    }
    if (result <= 42){
        resultComponent.classList.add('result-component-danger');
        numbersContainer.classList.add('numbers-danger');
        resultComponent.classList.remove('result-component', 'result-component-warning');
        stateRange.innerText = result;
        statusRandom.innerText = 'grave';
        paragraph.innerText = 'estas en el rango grave y debes revisar tus valores';
    }

}
window.addEventListener('load', randomValues);
buttonContinue.addEventListener('click', randomValues) ;
// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// document.getElementById("myDropdown").classList.toggle("show");
//-----------------------------------

// Code to modify select element behaviour
// document.getElementById('petBreed').addEventListener('click', onClickHandler);
// document.getElementById('petBreed').addEventListener('mousedown', onMouseDownHandler);

// function onMouseDownHandler(e) {
//     var el = e.currentTarget;

//     if (el.hasAttribute('size') && el.getAttribute('size') == '1') {
//         e.preventDefault();
//     }
// }
// function onClickHandler(e) {
//     var el = e.currentTarget;

//     if (el.getAttribute('size') == '1') {
//         el.className += 'selectOpen';
//         el.setAttribute('size', '5');
//     } else {
//         el.className = '';
//         el.setAttribute('size', '1');
//     }
// }

// 1. Create Pet object
const pet = {
    petName: document.querySelector('#petName').value,
    gender: document.querySelector('#petGender').value,
    type: document.querySelector('#petType').value,
    weight: document.querySelector('#petWeight').value,
    personality: document.querySelector('#petPersonality').value,
    breed: document.querySelector('#petBreed').value,
    bcs: document.querySelectorAll('input[name="radio-bcs"]:checked').value, // https://pretagteam.com/question/js-queryselector-radio-checked
};

// 2. Registering value when clicking on the BCS radio group

if (document.querySelector('input[name="radio-bcs"]')) {
    document.querySelectorAll('input[name="radio-bcs"]').forEach((elem) => {
        elem.addEventListener('change', function (event) {
            let bcs = event.target.value;
            console.log(bcs);
            pet.bcs = bcs;
            console.log(pet);
            console.log(document.querySelector('input[name="radio-bcs"]:checked').value);
        });
    });

}

// If condition - if nothing being checked, default value
function getRadioBCSValue () {
    return document.querySelector('input[name="radio-bcs"]:checked').value
}
//

// 2.1 Revised registering value when clicking on the BCS radio group

// let bcsChoice = document.querySelectorAll('input[name="radio-bcs"]');
// // let petWeightStatus = 0;

// bcsChoice.forEach((elem) => {
//     elem.addEventListener('change', function (event) {
//         let bcs = event.target.value;
//         console.log(bcs);
//     });
// });

// const checkWeight = function petWeightStatus() {
//     if (bcsChoice.value === 3) {
//         console.log(`Ideal weight`);
//     }
// };

// checkWeight(bcsChoice.value);

// 1st function
// Determine whether current pet weight is ideal, overweight or underweight
// bcs = 3 - ideal
// bcs = 1 || 2 - underweight
// bcs = 4 || 5 - overweight
// const petWeightStatus = () => {
//     if (bcs)
// }

// 2nd function
// Calculate Resting Energy Requirements (RER)
// Resting Energy Requirements (RER) = 70*(ideal weight)^(3/4) = resting calories/day
// const calcRER = function

// 3rd function
// Calculate pet's total daily energy needs = calories/day
// Ideal weight = 1.6 x RER
// Underweight = 1.8 x RER
// Overweight = 1.0 x RER

// 4th function
// Convert calories to grams
// Grams = Calories / 1.65
// daily grams/day

function checkButton() {
    var getSelectedValue = document.querySelector('input[name="season"]:checked');

    if (getSelectedValue != null) {
        document.getElementById('disp').innerHTML = getSelectedValue.value + ' season is selected';
    } else {
        document.getElementById('error').innerHTML = '*You have not selected any season';
    }
}

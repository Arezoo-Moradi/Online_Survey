// ----------------------  Slider 0  -> consumerprice
const slider0 = document.getElementById('sliderPrice0');
const rangeMin0 = parseInt(slider0.dataset.min);
const rangeMax0 = parseInt(slider0.dataset.max);
const step0 = parseInt(slider0.dataset.step);
const filterInputs0 = document.querySelectorAll('input.price_filter__input0');

const filteredMin0 = document.getElementById("consumerprice_filtered_min").innerText;
const filteredMax0 = document.getElementById("consumerprice_filtered_max").innerText;

noUiSlider.create(slider0, {
    start: [filteredMin0, filteredMax0],
    connect: true,
    step: step0,
    range: {
        'min': rangeMin0,
        'max': rangeMax0
    },
  
    // make numbers whole
    format: wNumb({
      decimals: 3,
      thousand: '.',
      // suffix: ' (تومان)'
  })
});

// bind inputs with noUiSlider
slider0.noUiSlider.on('update', (values, handle) => { 
  filterInputs0[handle].value = values[handle]; 
});

filterInputs0.forEach((input, indexInput) => { 
  input.addEventListener('change', () => {
    slider0.noUiSlider.setHandle(indexInput, input.value);
  })
});


// ----------------------  Slider 1 > factoryprice

const slider1 = document.getElementById('sliderPrice1');
const rangeMin1 = parseInt(slider1.dataset.min);
const rangeMax1 = parseInt(slider1.dataset.max);
const step1 = parseInt(slider1.dataset.step);
const filterInputs1 = document.querySelectorAll('input.price_filter__input1');

const filteredMin1 = document.getElementById("factoryprice_filtered_min").innerText;
const filteredMax1 = document.getElementById("factoryprice_filtered_max").innerText;

noUiSlider.create(slider1, {
    start: [filteredMin1, filteredMax1],
    connect: true,
    step: step1,
    range: {
        'min': rangeMin1,
        'max': rangeMax1
    },
  
    // make numbers whole
    format: wNumb({
      decimals: 3,
      thousand: '.',
      // suffix: ' (تومان)'
  })
});

// bind inputs with noUiSlider 
slider1.noUiSlider.on('update', (values, handle) => { 
  filterInputs1[handle].value = values[handle]; 
});

filterInputs1.forEach((input, indexInput) => { 
  input.addEventListener('change', () => {
    slider1.noUiSlider.setHandle(indexInput, input.value);
  })
});


// ----------------------  Slider 2 > adjustedprice

const slider2 = document.getElementById('sliderPrice2');
const rangeMin2 = parseInt(slider2.dataset.min);
const rangeMax2 = parseInt(slider2.dataset.max);
const step2 = parseInt(slider2.dataset.step);
const filterInputs2 = document.querySelectorAll('input.price_filter__input2');

const filteredMin2 = document.getElementById("adjustedprice_filtered_min").innerText;
const filteredMax2 = document.getElementById("adjustedprice_filtered_max").innerText;

noUiSlider.create(slider2, {
    start: [filteredMin2, filteredMax2],
    connect: true,
    step: step2,
    range: {
        'min': rangeMin2,
        'max': rangeMax2
    },
  
    // make numbers whole
    format: wNumb({
      decimals: 3,
      thousand: '.',
      // suffix: ' (تومان)'
  })
});

// bind inputs with noUiSlider 
slider2.noUiSlider.on('update', (values, handle) => { 
  filterInputs2[handle].value = values[handle]; 
});

filterInputs2.forEach((input, indexInput) => { 
  input.addEventListener('change', () => {
    slider2.noUiSlider.setHandle(indexInput, input.value);
  })
});



// ----------------------  Slider 3 > adjustedconsumerprice

const slider3 = document.getElementById('sliderPrice3');
const rangeMin3 = parseInt(slider3.dataset.min);
const rangeMax3 = parseInt(slider3.dataset.max);
const step3 = parseInt(slider3.dataset.step);
const filterInputs3 = document.querySelectorAll('input.price_filter__input3');

const filteredMin3 = document.getElementById("adjustedconsumerprice_filtered_min").innerText;
const filteredMax3 = document.getElementById("adjustedconsumerprice_filtered_max").innerText;

noUiSlider.create(slider3, {
    start: [filteredMin3, filteredMax3],
    connect: true,
    step: step3,
    range: {
        'min': rangeMin3,
        'max': rangeMax3
    },
  
    // make numbers whole
    format: wNumb({
      decimals: 3,
      thousand: '.',
      // suffix: ' (تومان)'
  })
});

// bind inputs with noUiSlider 
slider3.noUiSlider.on('update', (values, handle) => { 
  filterInputs3[handle].value = values[handle]; 
});

filterInputs3.forEach((input, indexInput) => { 
  input.addEventListener('change', () => {
    slider3.noUiSlider.setHandle(indexInput, input.value);
  })
});
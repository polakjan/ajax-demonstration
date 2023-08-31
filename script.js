const loadData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/exchange-rates/index.php')

    const data = await response.json();

    data.forEach(item => {
        const ul = document.querySelector('ul');

        ul.innerHTML += `<li>${item.currency}: ${item.rate}</li>`
    })
}

// loadData();

// DISCLAIMER: probably does not work:
// fetch('https://classes.codingbootcamp.cz/assets/classes/exchange-rates/index.php')
//     .then(
//         (response) => {
//             // this function WILL be called once the promise is fulfilled
//             return response.json();
//         }
//     )
//     .then(data => {

//     })
fetch('https://api.adviceslip.com/advice')
    .then(res => {
        return res.json();
    })
    .then(data => {
        document.querySelector(`span`).innerText = data.slip.id;
        document.getElementById(`advice`).innerHTML =`"`+ data.slip.advice +`"`;
    });

var button = document.getElementById('button');
button.addEventListener('click', () => {
    location.reload();
})
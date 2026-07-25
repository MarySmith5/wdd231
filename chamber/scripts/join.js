document.querySelector('.wf1').addEventListener('submit', function () {
    const currentTimestamp = new Date();
    document.getElementById('timestamp').value = currentTimestamp;
});

const element = document.querySelector(".levelCards");
element.classList.add("visible");


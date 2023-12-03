let timer = document.querySelector("#timer");


let gettime = () => {
  setInterval(() => {
    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    timer.innerHTML = `<span>${hour} :</span> <span> ${minute} :</span> <span>${second}</span>`;
  }, 1000);
};

gettime();

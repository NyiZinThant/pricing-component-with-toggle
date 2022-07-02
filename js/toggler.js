let data = {
    "annually": {
        "basic": "$199.99",
        "professional": "$249.99",
        "advanced": "$399.99"
    },
    "monthly": {
        "basic": "$19.99",
        "professional": "$24.99",
        "advanced": "$39.99"
    }
};

let toggler = document.getElementById("switch-input");
let prices = document.getElementsByClassName("price");
toggler.addEventListener("change", function (e) {
    return setTimeout(() => {
        toggle();
    }, 250);
});

function toggle() {
    if (toggler.checked) {
        prices[0].innerHTML = data.monthly.basic;
        prices[1].innerHTML = data.monthly.professional;
        prices[2].innerHTML = data.monthly.advanced;
    } else {
        prices[0].innerHTML = data.annually.basic;
        prices[1].innerHTML = data.annually.professional;
        prices[2].innerHTML = data.annually.advanced;
    }
};
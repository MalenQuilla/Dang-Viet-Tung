const container = document.querySelector(".image-container")

const limage = document.querySelector(".left-img");
const rimage = document.querySelector(".right-img");

const brimage = document.querySelector(".right-back-img");
const xbrimage = document.querySelector(".ext-right-back-img");

const ldoc = document.querySelector(".left-doc");
const rdoc = document.querySelector(".right-doc");

const lhdoc = document.querySelector(".left-hidden-doc");
const rhdoc = document.querySelector(".right-hidden-doc");

container.addEventListener("mousemove", (event) => {
    var xPos = event.clientX;
    var containerWidth = container.offsetWidth;
    var percent = (xPos / containerWidth) * 100;

    if (percent > 85) {
        percent = 85;
    }
    else if (percent < 15) {
        percent = 15;
    }
    
    limage.style.clipPath = `inset(0% ${5.1 + percent}% 0% 0%)`;
    rimage.style.clipPath = `inset(0% 0% 0% ${94.9 - percent}%)`;

    left_per = -1 * ((percent - 50) / 3);
    rimage.style.left = `${5 + left_per}%`;
    limage.style.left = `${5 + left_per}%`;

    if (left_per > 0) {
        brimage.style.opacity = `${50 - left_per * 10}%`;
    }
    if (percent <= 50) {
        xbrimage.style.opacity = `0%`;
    }
    else{
        xbrimage.style.opacity = `${0 - (left_per * 4)}%`;
    }
    
    xbrimage.style.left = `${-31 + left_per}%`;

    brimage.style.left = `${32 + left_per}%`;
    

    ldoc.style.opacity = `${50 + left_per * 10}%`;
    rdoc.style.opacity = `${50 - left_per * 10}%`;

    ldoc.style.left = `${20 + left_per / 1.5}%`;
    rdoc.style.right = `${12 - left_per / 1.5}%`;

    lhdoc.style.opacity = `${50 + left_per * 20}%`;
    rhdoc.style.opacity = `${50 - left_per * 20}%`;
});

//return to initial state
container.addEventListener("mouseleave", (event) => {
    limage.style.clipPath = `inset(0% 55.1% 0% 0%)`;
    rimage.style.clipPath = `inset(0% 0% 0% 44.9%)`;

    limage.style.left = `5%`;
    rimage.style.left = `5%`;

    brimage.style.opacity = `50%`;

    brimage.style.left = `32%`;

    ldoc.style.opacity = `50%`;
    rdoc.style.opacity = `50%`;

    ldoc.style.left = `20%`;
    rdoc.style.right = `12%`;

    lhdoc.style.opacity = `0%`;
    rhdoc.style.opacity = `0%`;

    xbrimage.style.opacity = `0%`;
    xbrimage.style.left = `-31%`;
});

//Copy email to clipboard
function email_copy() {
    email_value = "lVietTungl@outlook.com"
    navigator.clipboard.writeText(email_value);
    alert("Coppied email to Clipboard: " + email_value);
}
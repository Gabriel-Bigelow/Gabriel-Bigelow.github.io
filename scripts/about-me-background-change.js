export function changeBackground (timeout) {
    let background1 = document.getElementById('about-me-background-1');
    let background2 = document.getElementById('about-me-background-2');
    let background3 = document.getElementById('about-me-background-3');
    let background4 = document.getElementById('about-me-background-4');

    setTimeout(() => {console.log(timeout/1000)}, timeout)
}
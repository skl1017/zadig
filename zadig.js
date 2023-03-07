const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
    })
})
const things = document.querySelectorAll('li');
things.forEach((el) => observer.observe(el));


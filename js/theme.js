function toggleTheme() {
    let element = document.getElementById('html').attributes;
    console.log(element[2].value)
    if(element[2].value === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
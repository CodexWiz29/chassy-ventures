let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    login.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>
{
    navbar.classList.remove('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
}

let theme = document.querySelector('#theme-btn');

theme.onclick = () =>
{
    theme.classList.toggle('fa-sun');

    if(theme.classList.contains('fa-sun'))
    {
        document.body.classList.add('active');
        theme.classList.remove('fa-moon');
    }
    else
    {
        document.body.classList.remove('active');
        theme.classList.add('fa-moon');
    }
}
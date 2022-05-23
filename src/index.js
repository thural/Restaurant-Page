import home from './home'
//import menu from './menu'
import contact from './contact'
import logo from './GitHub-Mark-32px.png'
//import bck from './WhalesDiner.jpg'
import './style.css'
import menu from './menu';


const loadPage = (page) => {
    const appendTabs = {
        'home': () => main.append(home),
        'menu': () => main.append(menu),
        'contact': () =>  main.append(contact)
    };
    main.firstChild.remove();
    appendTabs[page]()

}
const body = document.body;

//header
const header = document.createElement('header');

const h1 = document.createElement('h1');
h1.textContent = 'Two Whales Diner';
header.appendChild(h1);

const nav = document.createElement('nav');

const homeBtn = document.createElement('div');
homeBtn.classList.add('btn');
homeBtn.textContent = 'home';
nav.appendChild(homeBtn);

const menuBtn = document.createElement('div');
menuBtn.classList.add('btn');
menuBtn.textContent = 'menu';
nav.appendChild(menuBtn);

const contactBtn = document.createElement('div');
contactBtn.classList.add('btn');
contactBtn.textContent = 'contact';

nav.appendChild(contactBtn);
header.appendChild(nav);
body.appendChild(header);

//main
const main = document.createElement('main');
body.appendChild(main);
main.append(menu);

//footer
const footer = document.createElement('footer');

const copyright = document.createElement('a');
copyright.textContent = '© thural';
copyright.href = 'https://github.com/thural';
copyright.classList.add('author');

const icon = new Image();
icon.src = logo;

copyright.appendChild(icon);
footer.appendChild(copyright);
body.appendChild(footer);

const tabBtns = document.querySelectorAll('.btn');

tabBtns.forEach(button => button.addEventListener('click', e => {
    loadPage(e.target.textContent)
}));
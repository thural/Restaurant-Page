import home from './home'
import menu from './menu'
import contact from './contact'
import logo from './GitHub-Mark-32px.png'
import bck from './WhalesDiner.jpg'
import './style.css'


const backgroundd = new Image();
backgroundd.src = bck;
document.body.style.backgroundImage = `url('${backgroundd}')`;


const content = document.getElementById('content');
//init structure

//header
const header = document.createElement('header');

//header > h1
const h1 = document.createElement('h1');
h1.textContent = 'Two Whales Diner';
header.appendChild(h1);

//h1 + nav
const nav = document.createElement('nav');

//nav > button.home
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
nav.appendChild(homeBtn);

//.home + .menu
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
nav.appendChild(menuBtn);

//.menu + .contact
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
nav.appendChild(contactBtn);

header.appendChild(nav);

content.appendChild(header);

//main section
const main = document.createElement('main');
main.classList.add('main');
//main.style.height = '500px';
main.style.backgroundColor = 'purple';
content.appendChild(main);

//footer section
const footer = document.createElement('footer');

//.footer > a
const copyright = document.createElement('a');
copyright.textContent = '© thural';
copyright.href = 'https://github.com/thural';

//a + icon
const icon = new Image();
icon.src = logo;

footer.appendChild(copyright);
footer.appendChild(icon);
content.appendChild(footer);



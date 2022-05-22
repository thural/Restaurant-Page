//import home from './home'
//import menu from './menu'
//import contact from './contact'
//import logo from './GitHub-Mark-32px.png'
//import bck from './WhalesDiner.jpg'
import './style.css'


//const backgroundd = new Image();
//backgroundd.src = bck;
//document.body.style.backgroundImage = `url('${backgroundd}')`;

const content = document.getElementById('content');
content.textContent = 'SCRIPT WORKING';



//header
const header = document.createElement('header');

const h1 = document.createElement('h1');
h1.textContent = 'Two Whales Diner';
header.appendChild(h1);

const nav = document.createElement('nav');

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
nav.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
nav.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
nav.appendChild(contactBtn);
header.appendChild(nav);

content.appendChild(header);

//main
const main = document.createElement('div');
main.classList.add('main');
main.textContent = 'MAIN'
content.appendChild(main);





/*

const footer = document.createElement('footer');

const copyright = document.createElement('a');
copyright.textContent = '© thural';
copyright.href = 'https://github.com/thural';

const icon = new Image();
icon.src = logo;




footer.appendChild(copyright);
footer.appendChild(icon);



content.appendChild(footer);
*/
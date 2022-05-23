import diner from './WhalesDinerOpen.gif'

const dinerImage = diner;

const home = () => {
    const content = document.createElement('div');

    const homeText = document.createElement('p');

    homeText.textContent = `The Two Whales Diner is known for their home style cooking and old-fashioned service, the best hamburgers in Arcadia. Open 24 hours.`;
    content.appendChild(homeText);
    //content.style.backgroundImage = `url(${bck})`;
    const homeImg = document.createElement('img');
    homeImg.src = dinerImage;
    content.appendChild(homeImg);
    content.classList.add('home');
    return content
};

export default home()
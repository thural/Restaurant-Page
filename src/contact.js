import arcadia from './arcadiaBay.jpeg'
import diner from './dinerOutside.png'

const dinerImgOne = arcadia;

const dinerImgTwo = diner;

const contact = () => {
    const content = document.createElement('div');
    content.classList.add('contact');

    const phone = document.createElement('p');
    phone.textContent = '📞 123 456 789';

    const address = document.createElement('p');
    address.textContent = '🏠 Arcadia Bay, Oregon, USA';

    const imgOne = document.createElement('img');
    imgOne.src = dinerImgOne;

    const imgTwo = document.createElement('img');
    imgTwo.src = dinerImgTwo;

    content.append(phone, address, imgOne, imgTwo);

    return content
};

export default contact()
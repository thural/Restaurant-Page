let breakfastItems = [
'Homestyle Eggs & Bacon  - $5.50',
'Breakfast Cheeseburger - $5.25',
'Apple Sausage Omelette - $6.25',
'Starfish Pancakes - $6.25',
'Bigfoot Bacon Omelette - $6.50',
'Fresh Oatmeal - $2.25',
'Morning Glory Waffle - $4.50',
'Various Cereal - $1.25',
'Belgium Fried Fish - $8.75'
];

let sideItems = [
'Bigfoot Bacon - $3.00',
'Apple Sausage - $3.25',
'Crab Cakes - $5.00',
'Hash Browns - $2.25',
'Bagel w/cream cheese - $2.00',
'Two Slices Toast - $1.50'
];

let beverageItems = [
'Coffee (Arcadia Bay Roast) - $1.50',
'Tea - $1.00',
'Fresh Orange Juice - $2.00',
'Various Soda - $1.50',
'Milk - $1.25',
'Mineral Water - $1.00'
];

const createULfromArray = (parentElem, array) => {

    const list = document.createElement('ul');

    array.forEach(elem => {
        const listElement = document.createElement('li');
        listElement.textContent = `${elem}`;
        list.appendChild(listElement)
    });

    parentElem.appendChild(list)

    console.log(parentElem);
};

const menu = () => {
    const content = document.createElement('div');

    const breakfast = document.createElement('div');
    const breakfastHeader = document.createElement('h2');
    breakfastHeader.textContent = 'Breakfast';
    breakfast.appendChild(breakfastHeader);
    createULfromArray(breakfast,breakfastItems);
    content.appendChild(breakfast);

    const sides = document.createElement('div');
    const sidesHeader = document.createElement('h2');
    sidesHeader.textContent = 'Sides';
    sides.appendChild(sidesHeader);
    createULfromArray(sides, sideItems);
    content.appendChild(sides);

    const beverages = document.createElement('div');
    const beveragesHeader = document.createElement('h2');
    beveragesHeader.textContent = 'Beverages';
    beverages.appendChild(beveragesHeader);
    createULfromArray(beverages, beverageItems);
    content.appendChild(beverages);

    return content
};

export default menu()
//your code here!
const list = document.getElementById('infi-list');

function createListItem(index) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${index}`;
    return listItem;
}

function addListItems(count) {
    const currentItems = list.children.length;
    for (let i = 0; i < count; i++) {
        const newItem = createListItem(currentItems + i + 1);
        list.appendChild(newItem);
    }
}

addListItems(10);

list.addEventListener('scroll', () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addListItems(2);
    }
});

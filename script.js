// script.js //
const itemInput = document.createElementById('itemInput');
const addItemBtn = document.createElementById('addItemBtn');
const editItemBtn = document.createElementById('editItemBtn');
const removeItemBtn = document.createElementById('removeItemBtn');
const shoppingList = document.createElementById('shoppingList');
let currentItem = null;

document.addEventListener('DOMContentLoaded', function() {
addItemBtn.addEventListener('click', addItem);
editItemBtn.addEventListener('click', editItem);
removeItemBtn.addEventListener('click', removeItem);
shoppingList.addEventListener('click', selectItem);

    function addItem(){
        const itemInput = document.getElementById('itemInput');
        if(itemText){
            const li = document.createElement('li');
            li.textContent = itemText;
            shoppingList.appendChild(li);
            itemInput.value = '';
        }
    }    
    function editItem(){
        if (currentItem){
            currentItem.textContents = itemInput.value.trim();
            currentItem.classList.remove('selected');
            currentItem = null;
            itemInput.value = '';
        }
    }
    function removeItem(){
        if (currentItem){
            shoppingList.removeChild(currentItem);
            currentItem = null;
            itemInput.value = '';
        }
    }   
    function selectItem(event){
        const item = document.querySelectorAll('li');
        item.forEach(item =>
            item.classList.remove('selected'));
currentItem = event.target;
currentItemm = classList.add('selected');
itemInput.value = currentItem.textContent;
    
    }
});

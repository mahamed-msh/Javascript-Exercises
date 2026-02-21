const list = document.querySelector("#list");

function AddItem(){

    const newItem = document.createElement('li');

    newItem.textContent = ('New item')

    list.appendChild(newItem)
    
}
function RemoveItem(){

    if(list.lastChild){
        list.removeChild(list.lastChild)
    }
    else{
        alert('there is no availabe elements')
    }
    
}
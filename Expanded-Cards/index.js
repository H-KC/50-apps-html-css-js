let items = document.querySelectorAll('.item');

items.forEach(item=>{
    item.addEventListener('click',()=>{
        if(!item.classList.contains('open-item')){
            resetClass(items);
            toggeler(item)
        }
       
    })
})

let toggeler = (item)=>{
    item.classList.add('open-item');
}

let resetClass =(items)=>{
    items.forEach(elt=>elt.classList.remove('open-item'))
}
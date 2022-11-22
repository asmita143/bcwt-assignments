'use-strict';
var body=document.body;

document.addEventListener('mousemove',(e)=>{
    var element=document.createElement('div');
    element.setAttribute('class','trail');
    element.setAttribute('style',`left: ${e.clientX - 10}px; top:${e.clientY - 10}px;`);

    element.onanimationend=()=>{
        element.remove();
    }

    body.insertAdjacentElement('beforeend',element);
})
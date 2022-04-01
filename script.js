let newWindow = open('/', 'example', 'width=300,height=300')
newWindow.focus();

alert(newWindow.location.href);
// about:blank, загрузка еще не началась

newWindow.onload = function () { 
    let html= `<div style="font-size:30px; background: black;">Велкоме!</div>`;
    newWindow.document.body.insertAdjacentElement('afterbegin', html);
}
var newform = document.querySelector('#newform');
var user = document.querySelector('#user');
var roll = document.querySelector('#roll');
var submit = document.querySelector('#submit');
var newuser = document.querySelector('#newuser');

newform.addEventListener('submit', onSubmit);



function onSubmit(e)
{
    e.preventDefault();
    console.log(user.value);
    axios.post('https://crudcrud.com/api/11e280c6aeec455ebf31241b728a52ec/appointment', {title : user.value})
    .then( res => console.log(res))
    .catch(err => console.log(err))
}

window.addEventListener("DOMContentLoaded", () => {

    axios.get('https://crudcrud.com/api/11e280c6aeec455ebf31241b728a52ec')
    .then((res) => {
        for(var i=0; i<res.data.length; i++)
        {
        var txt = document.createTextNode(res.data[i]);
        var li = document.createElement(li);
        li.appendChild(txt);
        newuser.appendChild(li);
        }
    })
    .catch(err => console.log(err))

})



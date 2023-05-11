var newform = document.querySelector('#newform');
var user = document.querySelector('#user');
var roll = document.querySelector('#roll');
var submit = document.querySelector('#submit');

newform.addEventListener('submit', onSubmit);


function onSubmit(e)
{
    e.preventDefault();
    console.log(user.value);
    axios.post('https://crudcrud.com/api/6561833caca740b1a4f2be2dc05326d4/appointment', {title : user.value})
    .then( res => console.log(res))
    .catch(err => console.log(err))
}
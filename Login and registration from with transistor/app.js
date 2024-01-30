"use strict";

document.querySelector('.img-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('s-signup');
})

document.querySelectorAll('.input').forEach( function(el){
    el.addEventListener('blur', function() {
        if (el.value.trim() != "") {
            el.classList.add('has-val')
        } else {
            el.classList.remove('has-val')
        }
    })
})

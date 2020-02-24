const form = document.querySelector(".cu-form");


form.addEventListener('submit', (event) =>{
    form['name'].value = form['name'].value.trim(" ");
    form['mail'].value = form['mail'].value.trim(" ");
    form['text'].value = form['text'].value.trim(" ");
    console.log(/^[A-Za-z]+$/.test(form['name'].value.trim(" ")));
    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(form['name'].value)){
        alert("Please enter only English letters");
        event.preventDefault();
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form['mail'].value)){
        alert("Please enter valid mail address");
        event.preventDefault();
    }
    else if(!form['text'].value.replace(/\s/g, '').length){
        alert("Please enter your message");
        event.preventDefault();
    }
    else{
        alert("Done!");
    }
});

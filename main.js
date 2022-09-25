let add=document.getElementById('increment'); //For fetching our increment button
let decrease=document.getElementById('decrement'); //For fetching our increment button

let int=document.getElementById('number');
let integer=0;

add.addEventListener('click', () =>{
    integer+=1;
    int.innerHTML=integer;
}) //The button will increment by 1 everytime a user clicks on the increment button

decrease.addEventListener('click', () =>{
    if(integer>0){ //Checks that the counter is not less than 0
        integer-=1;
        int.innerHTML=integer;
    }
    else{
        int.innerHTML=0;
    }
}) //The button will decrement by 1 everytime a user clicks on the decrement button



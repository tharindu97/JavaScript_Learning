let isAngry = true;
const element = 'img';
const angryEmoji = 'angry.png';
const hahaEmoji = 'haha.jpeg';

function Click(){

    isAngry = !isAngry;
    if(isAngry){
        document.getElementById(element).src = hahaEmoji;
    }else{
        document.getElementById(element).src = angryEmoji;
    }
}
let add =(t,container=document.body)=>{
  e = document.createElement(t);
  container.appendChild(e);
  return e;}

//create button
let btn = document.getElementById("LoveButtom");
let eggs = document.getElementById("max_love");





// create love
const create_love = function(x,y){
  let love_img = document.createElement('img');
  love_img.src = 'image/coeur.png';
  love_img.style.height = '50px';
  love_img.style.width = '50px';
  love_img.style.position = 'fixed';
  love_img.style.left = x + 'px';
  love_img.style.top = y + 'px';
  document.body.appendChild(love_img)
  return love_img
}


// move the love
const move_love = function(el){
  let y = parseInt(el.style.top)
  y += 1;
  el.style.top = y + 'px';
  if(y < 700){
    setTimeout(()=> move_love(el), 20)}
  else{
    document.body.removeChild(el);
  }
}

const random_number = function(max){
    return Math.ceil(Math.random()*max);
}

mult = function(times, f){
  if(times <= 0){
    return}
  else{
    f()
    mult(times-1, f)}}



btn.onclick = function(){
  mult(10, ()=>{
    let bal= create_love(random_number(1500),random_number(300));
    move_love(bal);});

}

eggs.onclick = function(){
  mult(1000, ()=>{
    let bal= create_love(random_number(1500),random_number(300));
    move_love(bal);});
}



const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let holder = [];
  let active = true;
  document.addEventListener('keydown', function(e){
    holder.push(e.which);
  });
  for(var i = 0; i < holder.length; i++){
    if(holder[i] !== code[i]){ 
      /* if the key entered != the same place in code, reset holder to listen again and recall the function */
      holder.length = 0;
      return init();
    }else if(holder === code){
      alert('you did it!');
    }
  }

  
}
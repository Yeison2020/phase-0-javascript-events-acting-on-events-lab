// Your code here

const dodger = document.getElementById('dodger');
dodger.style.backgroundColor= '#FFB830'
dodger.style.bottom = '0px';
dodger.style.right = '180px';
dodger.style.left = '180px'





function moveDodgerLeft(){
    window.addEventListener("keydown",  function(e){
        if(e.key === 'ArrowLeft'){
            e.preventDefault()
            const leftNumber =dodger.style.left.replace('px', '');
            let left = parseInt(leftNumber, 10);
            console.log(left)
            if (left >= 1 && left < 358 ) {
                dodger.style.left = `${left - 1}px`;
              }


        let newPosition = dodger.style.left
        newPosition = parseInt(newPosition)
        console.log(newPosition)
           
        }
    
    })
  
 }

function moveDodgerRight(){
    window.addEventListener("keydown", function(e){
        if(e.key === "ArrowRight"){
            e.preventDefault()
            const leftNumber = dodger.style.left.replace('px', '');
            let left = parseInt(leftNumber, 10);
            console.log(left)
            if(left >= 1  && left < 358){
                dodger.style.left = `${left + 1}px`
            }
        }
        let newPosition = dodger.style.left
        newPosition = parseInt(newPosition)
        console.log(newPosition, `New position`)
     
    })

}



//Invoking my functions here;

moveDodgerLeft();
moveDodgerRight();

///Global move function 

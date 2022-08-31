const table = document.querySelector('.board');
const td = document.querySelectorAll('td');

table.addEventListener('click',(e)=>{

    // refreshing the previous styles of every box every time after a new click
    // and populating index value to each box
    td.forEach((eachBox,index)=>{
        eachBox.style = 'none';
        eachBox.innerHTML += `<input type='hidden' value='${index}'/>`
    })

    // from a particular click on a box, we are getting the position of the box
    // intialX and initialY are the 2D representation of the position
    // posible moves is the array to store the possible moves
    // xMoves and yMoves represents the movement along x and y
    // for a particular ith move, x[i] represents the amount of movement along x and y[i] represents movement along y
    const currentPosition = +e.target.childNodes[0].value;
    const initialX = Math.floor(currentPosition/8);
    const initialY = currentPosition%8;
    const possibleMoves = [];
    const xMoves = [2,2,-2,-2,1,-1,1,-1];
    const yMoves = [1,-1,1,-1,2,2,-2,-2];


    // checking each ith move is valid or not 
    for(let i=0;i<xMoves.length;i++){
        const x = initialX + xMoves[i];
        const y = initialY + yMoves[i];
        x>=0 && y>=0 && x<8 && y<8 ? 
        possibleMoves.push(x*8+y): null;
    }

    // after getting the valid move, marking the possible move with yellow box
    td.forEach((eachBox,index)=>{
        possibleMoves.find(e=> e == index) ? eachBox.style.backgroundColor = 'yellow' : null;
    })
    
})

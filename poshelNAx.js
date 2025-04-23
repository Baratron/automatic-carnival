document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', (e) => {
        e.target.style.pointerEvents = "none";
        setTimeout(() => {
            e.target.style.pointerEvents = "auto";
            document.getElementById('start').style.background = "#3566fb";
        }, 5000);
        e.target.style.background = "#7f98e1";
        let list = document.querySelectorAll('.item');
        for(let cell of list){
            cell.style.background = "#eff2fb";
            cell.classList.remove('itemAnim');
            if(cell.querySelector('img').style.display == "inline"){
                cell.querySelector('img').style.display = "none";
            } 
        };
        let cellCount = Math.ceil(getSurprise(1, 4));
        let cellNames = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 
            'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24'];
        
        for(let i = 0; i < cellCount; ++i){
            let cellIndex = Math.ceil(getSurprise(0, (cellNames.length - 1)));
            let cellCoordinate = cellNames[cellIndex];
            document.getElementById(`${cellCoordinate}`).classList.add('itemAnim');
            document.getElementById(`${cellCoordinate}`).style.background = "white";
            document.getElementById(`${cellCoordinate}`).querySelector('img').style.display = "inline";       
        };   
        function getSurprise(min, max) {
            return Math.random() * (max - min) + min;
        }
    });  
});



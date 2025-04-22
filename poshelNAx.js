document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', () => {

        let list = document.querySelectorAll('.item img');
        for(let cell of list){
            if(cell.style.display == "inline") cell.style.display = "none";
        };

        let cellCount = Math.ceil(getSurprise(1, 4));
        let cellNames = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 
            'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24'];
        
        for(let i = 0; i < cellCount; ++i){
            let cellIndex = Math.ceil(getSurprise(0, (cellNames.length - 1)));
            let cellCoordinate = cellNames[cellIndex];
            document.getElementById(`${cellCoordinate}`).querySelector('img').style.display = "inline";       
        };
        
        function getSurprise(min, max) {
            return Math.random() * (max - min) + min;
        }

    });    
});



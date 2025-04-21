document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', () => {

        let cellCount = Math.ceil(getSurprise(5, 25));

        console.log(cellCount);

        let cellNames = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24']
        
        for(let i = 0; i < cellCount; ++i){

            let cellIndex = Math.ceil(getSurprise(0, cellCount));
            let cellCoordinate = cellNames[cellIndex];
            //cellNames = cellNames.splice(cellIndex, 1);
            console.log(cellCoordinate);
            document.getElementById(`${cellCoordinate}`).style.backgroundColor = "black";
            
        };
        
        function getSurprise(min, max) {
            return Math.random() * (max - min) + min;
        }

    });    
});



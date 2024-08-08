const createGrid = function(parentElement, gridSize)
{
    boxList = new Array();
    for( let i = 0; i < gridSize; i++ )
    {
        boxList.append( document.createElement("div") );
        boxList[i].textContent = i;
        parentElement.appendChild(boxList[i])
    }
};

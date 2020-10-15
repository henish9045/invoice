let customerdetails0 = localStorage.getItem('customerdetails0'),
    services0 = localStorage.getItem('services0'),
    amount0 = localStorage.getItem('amount0'),
    price0 = localStorage.getItem('price0'),
    alldetails0 = localStorage.getItem('alldetails0'),
    cusde = JSON.parse(customerdetails0),
    pri = JSON.parse(price0),
    table = document.getElementById('details');

let tableRef = document.getElementById('details').getElementsByTagName('tbody')[0];
let total = 0,
    mtotal = document.getElementById('mtotal');

for (let i = 0; i < cusde.length; i++){
    let newRow   = tableRef.insertRow();
    for (let p = 0; p < cusde[i].length; p++){
        let newCell  = newRow.insertCell();
        let newText  = document.createTextNode(`${cusde[i][p]}`);
        newCell.appendChild(newText);
    }
    total += Number(pri[i][3]); 
}

mtotal.textContent = JSON.stringify(total);
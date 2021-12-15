const tipcalcy = () => {
    let amount  = document.getElementById("bill amount").value;

    let perc = document.getElementById("tip perc").value;

    let tip = amount * (perc / 100);
    
    let total = tip + Number(amount);

    document.getElementById('tip total').value = tip;

    document.getElementById("total billed").value = total;
    
}

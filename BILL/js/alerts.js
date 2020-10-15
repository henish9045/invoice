let name = document.getElementById('customername'),
    city = document.getElementById('city'),
    mob = document.getElementById('contactnumber'),
    submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
    confirm("Are you sure?");
      
    if (date.value == ""){
        alert("Please Enter Date.")
        ;
    };

    if (name.value == ""){
        alert('Please Enter Customer Name.')
        ;
    };
    
    if (city.value == ""){
        alert('Please Enter City Of Customer.')
        location.reload();
    };
    
    if (mob.value == ""){
        alert('Please Enter Contact Number Of Customer.')
        location.reload();
    };

    if (Number(discount.value) >= 100){
        alert("Please enter value between 0 to 100!")
        location.reload();
    };

    if (Number(discount.value) < 0){
        alert("Please enter value between 0 to 100!")
        location.reload();
    };

    if (Number(tax.value) >= 100){
        alert("Please enter value between 0 to 100!")
        location.reload();
    };

    if (Number(tax.value) < 0){
        alert("Please enter value between 0 to 100!")
        location.reload();
    };
    
})


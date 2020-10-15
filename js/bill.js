let date = document.getElementById('date'),
    invoice_number = document.getElementById('invoicenumber'),
    customername = document.getElementById('customername'),
    street = document.getElementById('streetaddress'),
    service1 = document.getElementById('service1'),
    service2 = document.getElementById('service2'),
    service3 = document.getElementById('service3'),
    service4 = document.getElementById('service4'),
    service5 = document.getElementById('service5'),
    service6 = document.getElementById('service6'),
    service7 = document.getElementById('service7'),
    service8 = document.getElementById('service8'),
    contactnumber = document.getElementById('contactnumber');


submit.addEventListener('click', saveToLocalStorage);

function saveToLocalStorage(){
    let customerdetails0 = localStorage.getItem('customerdetails0'),
        services0 = localStorage.getItem('services0'),
        amount0 = localStorage.getItem('amount0'),
        price0 = localStorage.getItem('price0'),
        alldetails0 = localStorage.getItem('alldetails0'),
        cusde = JSON.parse(customerdetails0),
        ser = JSON.parse(services0),
        amo = JSON.parse(amount0),
        pri = JSON.parse(price0),
        allde = JSON.parse(alldetails0);
    
    
    if (cusde === null) {
        let customerdetails = [[invoice_number.textContent, date.value, customername.value, street.value, city.value, contactnumber.value, total.textContent]],
            services = [[service1.value, service2.value, service3.value, service4.value, service5.value, service6.value, service7.value, service8.value]],
            amount = [[amount1.value, amount2.value, amount3.value, amount4.value, amount5.value, amount6.value, amount7.value, amount8.value]],
            price = [[subtotal.value, tax.value, discount.value, total.textContent]],
            alldetails = [[invoice_number.textContent, date.value, customername.value, street.value, city.value, contactnumber.value, [service1.value, service2.value, service3.value, service4.value, service5.value, service6.value, service7.value, service8.value], [amount1.value, amount2.value, amount3.value, amount4.value, amount5.value, amount6.value, amount7.value, amount8.value], [subtotal.value, tax.value, discount.value, total.textContent]]];

        localStorage.setItem('customerdetails0', JSON.stringify(customerdetails));
        localStorage.setItem('services0', JSON.stringify(services));
        localStorage.setItem('amount0', JSON.stringify(amount));
        localStorage.setItem('price0', JSON.stringify(price));
        localStorage.setItem('alldetails0', JSON.stringify(alldetails));
        window.print();
    } else {
        let customerdetails = [[invoice_number.textContent, date.value, customername.value, street.value, city.value, contactnumber.value, total.textContent]],
            services = [[service1.value, service2.value, service3.value, service4.value, service5.value, service6.value, service7.value, service8.value]],
            amount = [[amount1.value, amount2.value, amount3.value, amount4.value, amount5.value, amount6.value, amount7.value, amount8.value]],
            price = [[subtotal.value, tax.value, discount.value, total.textContent]],
            alldetails = [[invoice_number.textContent, date.value, customername.value, street.value, city.value, contactnumber.value, [service1.value, service2.value, service3.value, service4.value, service5.value, service6.value, service7.value, service8.value], [amount1.value, amount2.value, amount3.value, amount4.value, amount5.value, amount6.value, amount7.value, amount8.value], [subtotal.value, tax.value, discount.value, total.textContent]]],
            customerdetailsnew = cusde.concat(customerdetails),
            servicesnew = ser.concat(services),
            amountnew = amo.concat(amount),
            pricenew = pri.concat(price),
            alldetailsnew = allde.concat(alldetails);
            
        localStorage.setItem('customerdetails0', JSON.stringify(customerdetailsnew));
        localStorage.setItem('services0', JSON.stringify(servicesnew));
        localStorage.setItem('amount0', JSON.stringify(amountnew));
        localStorage.setItem('price0', JSON.stringify(pricenew));
        localStorage.setItem('alldetails0', JSON.stringify(alldetailsnew));
        window.print();
    }
}

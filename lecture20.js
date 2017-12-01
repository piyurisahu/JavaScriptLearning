document.getElementById('btn1').onclick = function () {
    var output = document.getElementById('output');
    var myVal = document.getElementById('nameA').value ;
    if(myVal=='red')
    {
        myVal = 'wow it is red';
    }else{
        myVal = "It is not red";
    }

    output.innerHTML = myVal;
    console.log(myVal);
}
var output = document.getElementById('output');

document.getElementById('btn1').onclick = function () {
    var myObj = {
        "students": [
            {
                "firstName": "Pihu",
                "company": "technogise"
            },
            {
                "firstName": "Preeti",
                "company": "tcs"
            }
        ]
    }
    for(i = 0 ; i< myObj.students.length; i++)
    {
        output.innerHTML += myObj.students[i].firstName+'' +
            ' '+myObj.students[i].company+ "<br>";

    }

}
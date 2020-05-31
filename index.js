function myFunction() {
    var value1, value2;
    var rawResult=0;
    var resultSign=-1;
    var i;

      
    value1 = document.getElementById("value1").value;
    value2 = document.getElementById("value2").value;
      
    // Math.sign() was not available :( resultSign defaults to -1
    if (value1 > 1 && value2 > 1) {
        resultSign = 1;
    }
    if (value1 < 1 && value2 < 1) {
        resultSign = 1; 
    } 
    if (value1 == 0 || value2 == 0) {
            resultSign = 0;
    }
    

    
    // Set rawResult to 0 to cover use case of either value1 or value2 being 0
    value1 = Math.abs(value1);
    value2 = Math.abs(value2);

    for (i = 1; i <= value1; i++) {
        rawResult += value2;
    }
    
    rawResult= "The answer " + value1 + " X " + value2 + " = " + rawResult * resultSign;
    
    document.getElementById("demo").innerHTML = rawResult;
}
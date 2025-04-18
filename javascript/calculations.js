//init operators to verify and check against input values....    
var operators = ['+','-','%','/','x','&times;','1/x','x2','2√x','+/-'];

function clearAll() {
    //clear the input field.....
    //celar the storage of last entry calculation.....
    document.getElementById('result').value = '';    
    document.getElementById('output').value = 0;
}


function operation(op) {
    var result = document.getElementById('result').value;
    var output = document.getElementById('output').value;

    if(result != '' && output != '1') {
        result = result+" "+op;
        document.getElementById('result').value = result;    
        //localStorage.setItem('operator',op); //can be developed later to display memory of the operations....
    } else {
        alert('please entry value first!');
    }
}
function displayNumber(num) {
    var result = document.getElementById('result').value;
    //output is used and assign to check if its set to 1 then we have the result after the calculation so before proceed with 
    //new value make it 0. 
    var output = document.getElementById('output').value;
    if(output == '1') {
        clearAll();
        displayNumber(num); //recall the function to execute the new input after clearing the previous result.......
    } else {
        if(result != '') {
        
            if(operators.some(op=>result.includes(op))) { //looping throguh array and checking each element of operators against string
                result = result +" "+ num;
            } else {
                result = result+num;
            }
            
            document.getElementById('result').value = result;    
        } else {
            document.getElementById('result').value = num;    
        }
    }
    
    //localStorage.setItem("firstNum",num);
}
function getResult() {
    var output = document.getElementById('output').value;
    var result = document.getElementById('result').value;
    if(output == '1') {
        //already got output and someone press = sign....so return same result....
        
    } else {
        if(result != '') {
            
            if(!result.includes('=')) { //check before proceed

                result = result +" "+"=";
                document.getElementById('result').value = result;    
                var result = document.getElementById('result').value;
                //1...check if the result contain any operation values.....
                
                if(operators.some(op=>result.includes(op))) {
                        
                    var output =  getCalculation(result);
                    document.getElementById('output').value = 1;
                    document.getElementById('result').value = output;

                } else {
                    console.log('debug');
                    //alert('coming here....');
                }
                
            }
        }
    }
}

function getCalculation(res) {
    if(res != '') {

        if(res.includes('+')) {
            //addition only.....+
            var exp = res.split('+');
            exp[1] = exp[1].replace('=','');
            var result = (parseInt(exp[0]) + parseInt(exp[1]));
        } else if(res.includes('-')) {
            //addition only.....+
            var exp = res.split('-');
            exp[1] = exp[1].replace('=','');
            var result = (parseInt(exp[0]) - parseInt(exp[1]));
        } else if(res.includes('x')) {
            //addition only.....+
            var exp = res.split('x');
            exp[1] = exp[1].replace('=','');
            var result = (parseInt(exp[0]) * parseInt(exp[1]));
        } else if(res.includes('/')) {
            //addition only.....+
            var exp = res.split('/');
            exp[1] = exp[1].replace('=','');
            var result = (parseInt(exp[0]) / parseInt(exp[1]));
        } else {
            //returning for % sign for now....can be developed later....
            return 0;
        }

        return result;
    }
}
   
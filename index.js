

function convert_C_to_F (temp){

    return (temp * 9 / 5) + 32; 
}
function convert_C_to_K (temp){
    return temp * 1 + 273.15;
}
function convert_F_to_C (temp){
    return (temp - 32) * 5 / 9; 
}
function convert_F_to_K (temp){
    return (temp + 459.67) * 5 / 9;
}
function convert_K_to_C (temp){
    return temp - 273.15; 
}
function convert_K_to_F (temp){
    return (temp * 9 / 5) - 459.67;
}
function result (temperature1, temperature2, scale){
    switch (scale){
        case 'C':
            temperature1 += 'F';
            temperature2 += 'K';
            break;
        case 'F':
            temperature1 += 'C';
            temperature2 += 'K';
            break;
        case 'K':
            temperature1 += 'C';
            temperature2 += 'F';
            break;
        default:
            alert("Hmm... Somebody hasnt read the rules or doesnt want to follow them. Please reload the page")
            break;
    }
    var message = "This is " + temperature1 + " and " + temperature2;
    alert (message);
}


let input_temperature = prompt("Enter temperature. You need to input number and symbol");
var input_scale = input_temperature.split('');
let input_number = parseFloat(input_temperature);
for (let i = 0; i < input_scale.length; i++) {

    switch (input_scale[i]){
        case 'c': // ддля проверки и нижнего регистра
        case 'C':         
            result (convert_C_to_F (input_number), convert_C_to_K (input_number),"C");
            break;
        case 'f':
        case 'F':
            result (convert_F_to_C (input_number), convert_F_to_K (input_number),"F");
            break;
        case 'k':
        case 'K':
            result (convert_K_to_C (input_number), convert_K_to_F (input_number),"K");
            break;
        default:
            // alert ("Hmm... Somebody hasnt read the rules or doesnt want to follow them. Please reload the page")
            break;

    } 
}


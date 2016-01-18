//Object constructor containing the conversion metrics
function Conversion(currency1, currency2, inputValue){
        this.currency1 = currency1;
        this.currency2 = currency2;
        this.inputValue = inputValue;
        

        //A method that calculates the conversion metrics
        this.calculateCurrency = function(){
            if(currency1 =='cedi'){
                if(currency2 =='dollar'){
                    return parseInt(inputValue) * (1/150);
                }
                else if(currency2 =='naira'){
                    return parseInt(inputValue) * 50;
                }
            }
            if(currency1 =='dollar'){
                if(currency2 =='cedi'){
                    return parseInt(inputValue) * 150;
                }
                else if(currency2 =='naira'){
                    return parseInt(inputValue) * 200;
                }
            }
            if(currency1 =='naira'){
                if(currency2 =='cedi'){
                    return parseInt(inputValue) * (1/50);
                }
                else if(currency2 =='dollar'){
                    return parseInt(inputValue) * (1/200);
                }
            }
            if(((currency1 =='cedi') && (currency2 =='cedi')) || ((currency1 =='dollar') && (currency2 =='dollar')) || ((currency1 =='naira') && (currency2 =='naira'))){
                return 'Select Different Currencies';
            }
        }
       }

       //A function that processes inputs from the html form
       processInput = function(){
        this.currency1 = document.getElementById('dropMenu1').options[document.getElementById('dropMenu1').selectedIndex].value;
        this.currency2 = document.getElementById('dropMenu2').options[document.getElementById('dropMenu2').selectedIndex].value;
        this.inputValue = document.getElementById('currencyValue1').value;
        

        this.conversionInstance = new Conversion(currency1, currency2, inputValue);
        document.getElementById('currencyValue2').value = conversionInstance.calculateCurrency();
		
        //Refresh button
        document.getElementById('reset').onclick = function(){
            document.getElementById('dropMenu1').selectedIndex=0;
            document.getElementById('dropMenu2').selectedIndex=0;
            document.getElementById('currencyValue1').value='';
            document.getElementById('currencyValue2').value='';
        }

        //To avoid #currencyValue2 from showing NAN when #currencyValue1 is empty:
        if(document.getElementById('currencyValue1').value == ''){
            document.getElementById('currencyValue2').value='';
        }
        else if(document.getElementById('currencyValue1').value == String ){
            document.getElementById('currencyValue2').value='';
        }
              
       }

       

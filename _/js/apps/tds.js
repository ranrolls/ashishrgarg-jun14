/* emi js is live */


 function DigitOnly(e){    
    var Ec;
    
    if (window.event){ //IE            
        Ec=event.keyCode;    
        
        if((Ec >=48 && Ec <=57) || Ec==46)
        {            
            window.event.returnValue = true; 
        }
        else
        {
            window.event.returnValue = false;
        }
    }
    else{ //Firefox             
        Ec=e.which;         
        
        if((Ec >=48 && Ec <=57) || Ec==8 || Ec==0 || Ec==46) 
        {      
            e.returnValue = true; 
        }
        else
        {
            e.preventDefault();
        }
    } 
}
 
function getrate()
{
 
 var rate= document.getElementById('drp_Section_description').options[document.getElementById('drp_Section_description').selectedIndex].value;
  var rate1= document.getElementById('drp_Section_description').value;
  document.getElementById('txt_rate').value=rate1.substring(0,rate1.indexOf(' '));
  document.getElementById('txt_amount').value = "" 
  document.getElementById('Tax').innerHTML=""
  document.getElementById('Drp_Panquotedbydeductee').value=0;
  var rate2 = rate1.substring(rate1.indexOf(' ') ,rate1.length);
  document.getElementById('ExceedAmount').innerHTML =rate2;
   if(Trim(rate2)=="---") {
       //alert('---');
   document.getElementById('tr_pan').style.display='none';
   document.getElementById('tr_payexceeding').style.display='none';
   document.getElementById('tbl_Bullionorjewellery').style.display='block';
  }
  else if (Trim(rate2)=="--") {
      //alert('---');
  document.getElementById('tr_pan').style.display='none';
   document.getElementById('tr_payexceeding').style.display='none';
    document.getElementById('tbl_Bullionorjewellery').style.display='none';
  }
 else if (Trim(rate2)=="-") {
    // alert('-');
  document.getElementById('tr_pan').style.display='block';
   document.getElementById('tbl_Bullionorjewellery').style.display='none';
   document.getElementById('tr_payexceeding').style.display='none';
  }
  else if (Trim(rate2)!="-") {
      //alert('!-');
    document.getElementById('tr_pan').style.display='block';
   document.getElementById('tbl_Bullionorjewellery').style.display='none';
   document.getElementById('tr_payexceeding').style.display='block';
  }
 
 
}
function calc()
{
    try {
        if (document.getElementById('txt_rate').value == "0") {
            alert("Rate Can't Blank...");
            document.getElementById('txt_amount').value = "";
            return false;
        }
        var rate = document.getElementById('txt_rate').value;
        var amount = document.getElementById('txt_amount').value;
        var tax = rate * amount * .01;
       
        document.getElementById('Tax').innerHTML = tax.toFixed(2);
    } catch (e) {
        document.getElementById('Tax').innerContent = tax.toFixed(2);
    }
}
function Panquotedbydeductee() {
        var prevrate = document.getElementById('txt_rate').value;
        document.getElementById('txt_rate').value = "";
        document.getElementById('Tax').innerHTML = ""
        amount = document.getElementById('txt_amount').value = "";
        var Panquotedbydeductee = document.getElementById('Drp_Panquotedbydeductee').value;
        if (Panquotedbydeductee == 1) {
            if (prevrate > 20) {
                document.getElementById('txt_rate').value = prevrate;
            }
            else {
                document.getElementById('txt_rate').value = 20;
            }
        }
        else if (Panquotedbydeductee == 0) {
            var rate1 = document.getElementById('drp_Section_description').value;
            document.getElementById('txt_rate').value = rate1.substring(0, rate1.indexOf(' '));
        }
    }
function Trim(input) {
    var lre = /^\s*/;
    var rre = /\s*$/;
    input = input.replace(lre, "");
    input = input.replace(rre, "");
    return input;
}
 
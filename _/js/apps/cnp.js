/* emi js is live */

        function CalculateNetProfit() {
            var defaultValue = 0;
            var txt1 = Trim(document.getElementById("Text1").value);
            var txt2 = Trim(document.getElementById("Text2").value);
            var txt3 = Trim(document.getElementById("Text3").value);
            var txt4 = Trim(document.getElementById("Text4").value);
            var txt5 = Trim(document.getElementById("Text5").value);
            var txt6 = Trim(document.getElementById("Text6").value);
            var txt7 = Trim(document.getElementById("Text7").value);
            var txt8 = Trim(document.getElementById("Text8").value);
            var txt9 = Trim(document.getElementById("Text9").value);
            var txt10 = Trim(document.getElementById("Text10").value);
            var txt11 = Trim(document.getElementById("Text11").value);
            var txt12 = Trim(document.getElementById("Text12").value);
            var txt13 = Trim(document.getElementById("Text13").value);
            var txt14 = Trim(document.getElementById("Text14").value);
            var txt15 = Trim(document.getElementById("Text15").value);
            var txt16 = Trim(document.getElementById("Text16").value);
            var txt17 = Trim(document.getElementById("Text17").value);
            var txt18 = Trim(document.getElementById("Text18").value);
            if (txt1 == "") {
                alert("Enter net profit before tax.");
                document.getElementById("Text1").style.backgroundColor = "yellow";
                document.getElementById("Text1").focus();
                return false;
            }
            else {
                document.getElementById("Text1").style.backgroundColor = "white";
                
            }
            if (txt2 == "") {
                document.getElementById("Text2").value = Number(defaultValue);
            }
            
            if (txt3 == "") {
                document.getElementById("Text3").value = Number(defaultValue);
            }
           
            if (txt4 == "") {
                document.getElementById("Text4").value = Number(defaultValue);
            }
            
            if (txt5 == "") {
                document.getElementById("Text5").value = Number(defaultValue);
            }
           
            if (txt6 == "") {
                document.getElementById("Text6").value = Number(defaultValue);
            }
            
            if (txt7 == "") {
                document.getElementById("Text7").value = Number(defaultValue);
            }
            
            if (txt8 == "") {
                document.getElementById("Text8").value = Number(defaultValue);
            }
           
            if (txt9 == "") {
                document.getElementById("Text9").value = Number(defaultValue);
            }
            
            if (txt10 == "") {
                document.getElementById("Text10").value = Number(defaultValue);
            }
           
            if (txt11 == "") {
                document.getElementById("Text11").value = Number(defaultValue);
            }
           
            if (txt12 == "") {
                document.getElementById("Text12").value = Number(defaultValue);
            }
            
            if (txt13 == "") {
                document.getElementById("Text13").value = Number(defaultValue);
            }
            
            if (txt14 == "") {
                document.getElementById("Text14").value = Number(defaultValue);
            }
            
           
            if (txt15 == "") {
                document.getElementById("Text15").value = Number(defaultValue);
            }
           
            if (txt16 == "") {
                document.getElementById("Text16").value = Number(defaultValue);
            }
            
            if (txt17 == "") {
                document.getElementById("Text17").value = Number(defaultValue);
            }
           
            if (txt18 == "") {
                document.getElementById("Text18").value = Number(defaultValue);
            }
           
           // document.getElementById("trNetProfit").style.display = "block";
            var total = 0;
            total = Number(txt1) + Number(txt2);
            total = Number(total) + Number(txt3);
            total = Number(total) + Number(txt4);
            total = Number(total) + Number(txt5);
            total = Number(total) + Number(txt6);
            total = Number(total) + Number(txt7);
            total = Number(total) + Number(txt8);
            total = Number(total) + Number(txt9);
            total = Number(total) + Number(txt10);
            total = Number(total) + Number(txt11);
            total = Number(total) + Number(txt12);
            total = Number(total) + Number(txt13);
            total = Number(total) - Number(txt14);
            total = Number(total) - Number(txt15);
            total = Number(total) - Number(txt16);
            total = Number(total) - Number(txt17);
            total = Number(total) - Number(txt18);
            document.getElementById("txtNetProfits").value = Number(total);
		return false;
        }
        function Trim(input) {
            var lre = /^\s*/;
            var rre = /\s*$/;
            input = input.replace(lre, "");
            input = input.replace(rre, "");
            return input;
        }
        function validate(key) {

            var keycode = (key.which) ? key.which : key.keyCode;

            if (!(keycode == 8) && (keycode < 48 || keycode > 57)) {
                return false;
            }

        }
    function aaa()
    {        
        document.getElementById("ctl00_ContentPlaceHolder3_ld").style.display='block';        
        document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').value=""; 
        document.getElementById('ctl00_ContentPlaceHolder3_txt_Pwd').value="";
        document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').focus();
        return false;
    }
    function sss()
    {
        document.getElementById("ctl00_ContentPlaceHolder3_ld").style.display='none';
    }
    function checkloginpopup()
    {   
        //ctl00_ContentPlaceHolder3
        
        var uid=Trim(document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').value);        
        if(uid.length==0)
        {
            alert('User ID is blank');
            //document.getElementById('ctl00_ContentPlaceHolder1_txt_UserID').value="";
            //document.getElementById('ctl00_ContentPlaceHolder1_txt_UserID').focus();
            return false;
        }
        var pwd=Trim(document.getElementById('ctl00_ContentPlaceHolder3_txt_Pwd').value);
        if(pwd.length==0)
        {
            alert('Password is blank');
            return false;
        }
    }
    function Trim(input)
  {
    var lre = /^\s*/; 
    var rre = /\s*$/; 
    input = input.replace(lre, ""); 
    input = input.replace(rre, ""); 
    return input; 
   }

    function check987(t)
        {
            if(document.getElementById("ctl00_ContentPlaceHolder3_txt_Search").value=="")
            {
                alert("Enter Search Content");
                //return false;
                xyz(t,'');                
            }            
        }
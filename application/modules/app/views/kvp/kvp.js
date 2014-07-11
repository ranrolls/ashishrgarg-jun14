/* emi js is live */



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
       
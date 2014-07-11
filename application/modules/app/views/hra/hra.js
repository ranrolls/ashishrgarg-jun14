/* emi js is live */


//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>


     
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
                
    
  

     
      function copyRow(txt,rowNo,cell)
      {
        
        txt.value=txt.value.replace(/[^0-9]+/g,'');
        var tableRows=document.getElementById('tbl').rows;
        //alert(tableRows.length-2);
        //alert(rowNo);
        for(var i=rowNo; i<tableRows.length-2;i++)
        {
            var rowcells=tableRows[i].cells
            
            var t=rowcells[cell].firstChild.id;
            var t1=document.getElementById(t);
            t1.value=Number(txt.value);
            
            var totalSalary=0;
            CalculateRow(i);
            
        }
        total();  
        
      }
      function CalculateRow(rowNo)
      {
        var tableRows=document.getElementById('tbl').rows;
        var changedRow=tableRows[rowNo].cells
        var txtSalary =changedRow[2].firstChild.id;
        var txtHra=changedRow[3].firstChild.id;
        var txtRent=changedRow[4].firstChild.id;
        var txtExempted=changedRow[5].firstChild.id;
        var txtTaxable=changedRow[6].firstChild.id;
        var chkMetro=changedRow[7].firstChild.id;
        var Basic50,rentPaid,actHra;
        txtSalary=document.getElementById(txtSalary);
        txtHra=document.getElementById(txtHra)
        txtRent=document.getElementById(txtRent);
        txtExempted=document.getElementById(txtExempted);
        txtTaxable=document.getElementById(txtTaxable);
        chkMetro=document.getElementById(chkMetro);
        if(chkMetro.checked==true)
            Basic50=Math.round(Number(txtSalary.value)*0.5); 
        else
            Basic50=Math.round(Number(txtSalary.value)*0.5); 
        rentPaid=Number(txtRent.value) - Math.round((Number(txtSalary.value)*0.1));
        if(rentPaid <= 0)
            rentPaid=0;
        txtExempted.value=Number(Math.min((Math.min(Basic50,rentPaid)),Number(txtHra.value)));
        txtTaxable.value=Number(txtHra.value)-Number(txtExempted.value);
        
        return;
      }
      ///////////////////////////
      function CalculateRows(rowNo)
      {
         var tableRows=document.getElementById('tbl').rows;
         var changedRow=tableRows[rowNo].cells
         var chkMetro=changedRow[7].firstChild.id;
         chkMetro=document.getElementById(chkMetro);

        if(chkMetro.checked==true)
        {
            for(var i=rowNo; i<tableRows.length;i++)
            {
                
                changedRow=tableRows[i].cells
                var txtSalary =changedRow[2].firstChild.id;
                var txtHra=changedRow[3].firstChild.id;
                var txtRent=changedRow[4].firstChild.id;
                var txtExempted=changedRow[5].firstChild.id;
                var txtTaxable=changedRow[6].firstChild.id;
                chkMetro=changedRow[7].firstChild.id;
                var Basic50,rentPaid,actHra;
                txtSalary=document.getElementById(txtSalary);
                txtHra=document.getElementById(txtHra)
                txtRent=document.getElementById(txtRent);
                txtExempted=document.getElementById(txtExempted);
                txtTaxable=document.getElementById(txtTaxable);
                chkMetro=document.getElementById(chkMetro);
                chkMetro.checked=true;
                Basic50=Math.round(Number(txtSalary.value)*0.5); 
                rentPaid=Number(txtRent.value) - Math.round((Number(txtSalary.value)*0.1));
                if(rentPaid <= 0)
                rentPaid=0;
                txtExempted.value=Number(Math.min((Math.min(Basic50,rentPaid)),Number(txtHra.value)));
                txtTaxable.value=Number(txtHra.value)-Number(txtExempted.value);
            }
            
        }
        else
        {
            for(var i=rowNo; i<tableRows.length;i++)
            {
                
                changedRow=tableRows[i].cells
                var txtSalary =changedRow[2].firstChild.id;
                var txtHra=changedRow[3].firstChild.id;
                var txtRent=changedRow[4].firstChild.id;
                var txtExempted=changedRow[5].firstChild.id;
                var txtTaxable=changedRow[6].firstChild.id;
                chkMetro=changedRow[7].firstChild.id;
                var Basic50,rentPaid,actHra;
                txtSalary=document.getElementById(txtSalary);
                txtHra=document.getElementById(txtHra)
                txtRent=document.getElementById(txtRent);
                txtExempted=document.getElementById(txtExempted);
                txtTaxable=document.getElementById(txtTaxable);
                chkMetro=document.getElementById(chkMetro);
                chkMetro.checked=false;
                Basic50=Math.round(Number(txtSalary.value)*0.4); 
                rentPaid=Number(txtRent.value) - Math.round((Number(txtSalary.value)*0.1));
                if(rentPaid <= 0)
                rentPaid=0;
                txtExempted.value=Number(Math.min((Math.min(Basic50,rentPaid)),Number(txtHra.value)));
                txtTaxable.value=Number(txtHra.value)-Number(txtExempted.value);
            }
        }
          
      }
      function total()
      {
              
        var tableRows=document.getElementById('tbl').rows;
        var totalSalary=0;
        var totalHraReceived=0;
        var totalRentPaid=0;
        var totalExempted=0;
        var totalTaxable=0;
        for(var i=2; i<tableRows.length-2;i++)
        {
            var rowcells=tableRows[i].cells
            var t=rowcells[2].firstChild.id;
            var t1=document.getElementById(t);
            totalSalary=totalSalary + Number(t1.value);   
            t=rowcells[3].firstChild.id;
            t1=document.getElementById(t);
            totalHraReceived=totalHraReceived + Number(t1.value);
            t=rowcells[4].firstChild.id;
            t1=document.getElementById(t);
            totalRentPaid=totalRentPaid + Number(t1.value);
            t=rowcells[5].firstChild.id;
            t1=document.getElementById(t);
            totalExempted=totalExempted + Number(t1.value);
            t=rowcells[6].firstChild.id;
            t1=document.getElementById(t);
            totalTaxable=totalTaxable + Number(t1.value); 
                
           
        }
        document.getElementById("txtTotalSalary").value=totalSalary;
        document.getElementById("txtTotalHraReceived").value=totalHraReceived;
        document.getElementById("txtTotalRentPaidy").value=totalRentPaid;
        document.getElementById("txtTotalExempted").value=totalExempted;
        document.getElementById("txtTotalTaxable").value=totalTaxable;
        
     }
        
        
      
      

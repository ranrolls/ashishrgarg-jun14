/* emi js is live */

function GetInstalmentAmt()
{     
          var Amount=document.getElementById("Textbox1").value;
          var NoOfInstalment=document.getElementById("Textbox3").value;
          var InterestRate=document.getElementById("Textbox2").value;
          var permonth =0;
          var middle;
          var ffinal =1;
          var ffinal1 =0;
          var total=0;
          var i=0
          var j=document.forms[0].pradeep.selectedIndex;
       if (j==0)
        {
         permonth = InterestRate /1200;
         middle= 1 / (1 + permonth);
             for(i=0 ;i<=NoOfInstalment-1;i++)
            {    
             ffinal=middle*ffinal;
             total=total+ffinal;
            }
           ffinal1= (Number(Amount)/ total);
           document.getElementById("Textbox4").value = Math.round(ffinal1); 
        }
        else if(j==1)
        {
         permonth = InterestRate /400;
         middle= 1 / (1 + permonth);
             for(i=0 ;i<=NoOfInstalment-1;i++)
            {    
             ffinal=middle*ffinal;
             total=total+ffinal;
            }
           ffinal1= (Number(Amount)/ total);
           document.getElementById("Textbox4").value = Math.round(ffinal1);
        }
         else if(j==2)
        {
         permonth = InterestRate /200;
         middle= 1 / (1 + permonth);
             for(i=0 ;i<=NoOfInstalment-1;i++)
            {    
             ffinal=middle*ffinal;
             total=total+ffinal;
            }
           ffinal1= (Number(Amount)/ total);
           document.getElementById("Textbox4").value = Math.round(ffinal1);
        }
         else if(j==3)
        {
         permonth = InterestRate /100;
         middle= 1 / (1 + permonth);
             for(i=0 ;i<=NoOfInstalment-1;i++)
            {    
             ffinal=middle*ffinal;
             total=total+ffinal;
            }
           ffinal1= (Number(Amount)/ total);
           document.getElementById("Textbox4").value = Math.round(ffinal1);
        }
      

}
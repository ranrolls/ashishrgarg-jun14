/* emi js is live */


 
    function getinstailment()
    {
       
   var intrt=0;
    var amt=document.getElementById("Text1").value;
    var intamt=document.getElementById("Text2").value;
    var  intrt =document.getElementById("Text3").value;
    var temp1=0;
    var temp2=0;
    var closebalnce=0;
    var tempinstalment=0;
     var j=document.forms[0].pradeep.selectedIndex;
   
    
       if (j==0)
       {
       if (Number(amt) > 0)
             { 
                closebalnce=Number(amt);
             do
                {
                    if (closebalnce>0)
                        {
                            var a=Number(amt)* Number(intrt);
                              temp1= Math.round(Number(a)/1200); 
                              temp2= Number(amt) + Number(temp1);
                              closebalnce=Number(temp2) - Number(intamt);
                                if(Number(temp1)>=Number(intamt))
                                   {alert("Instalment Amount can't be less than Interest Amount." + "Your Intrest Amount is  Rs." + temp1 );
                                     document.getElementById("Text4").value= 0 ;
                                     break;
                                     }
                                 else
                                  {
                                   amt=Number(closebalnce);
                                  tempinstalment= Number(tempinstalment) + 1;
        
                                    }
                          }
   
                     } while (Number(closebalnce)>0);
                    if (tempinstalment>0)
                          {
                        
                            // document.getElementById("Text4").value=Number(tempinstalment)-1 ;
                            document.getElementById("Text4").value=Number(tempinstalment) ;
                          }
                     }
             else
             {
              document.getElementById("Text4").value= 0 ;
              }
           
       
       }
       else if(j==1)
       {
       if (Number(amt) > 0)
             { 
                closebalnce=Number(amt);
             do
                {
                    if (closebalnce>0)
                        {
                            var a=Number(amt)* Number(intrt);
                              temp1= Math.round(Number(a)/400); 
                              temp2= Number(amt) + Number(temp1);
                              closebalnce=Number(temp2) - Number(intamt);
                                if(Number(temp1)>=Number(intamt))
                                   {alert("Instalment Amount can't be less than Interest Amount." + "Your Intrest Amount is  Rs." + temp1 );
                                     document.getElementById("Text4").value= 0 ;
                                     break;
                                     }
                                 else
                                  {
                                   amt=Number(closebalnce);
                                  tempinstalment= Number(tempinstalment) + 1;
        
                                    }
                          }
   
                     } while (Number(closebalnce)>0);
                    if (tempinstalment>0)
                          {
                             //document.getElementById("Text4").value=Number(tempinstalment)-1 ;
                             document.getElementById("Text4").value=Number(tempinstalment) ;
                          }
                     }
             else
             {
              document.getElementById("Text4").value= 0 ;
              }
      
       }
       else if(j==2)
       {
       
       if (Number(amt) > 0)
             { 
                closebalnce=Number(amt);
             do
                {
                    if (closebalnce>0)
                        {
                            var a=Number(amt)* Number(intrt);
                              temp1= Math.round(Number(a)/200); 
                              temp2= Number(amt) + Number(temp1);
                              closebalnce=Number(temp2) - Number(intamt);
                                if(Number(temp1)>=Number(intamt))
                                   {alert("Instalment Amount can't be less than Interest Amount." + "Your Intrest Amount is  Rs." + temp1 );
                                     document.getElementById("Text4").value= 0 ;
                                     break;
                                     }
                                 else
                                  {
                                   amt=Number(closebalnce);
                                  tempinstalment= Number(tempinstalment) + 1;
        
                                    }
                          }
   
                     } while (Number(closebalnce)>0);
                    if (tempinstalment>0)
                          {
                             //document.getElementById("Text4").value=Number(tempinstalment)-1 ;
                             document.getElementById("Text4").value=Number(tempinstalment) ;
                          }
                     }
             else
             {
              document.getElementById("Text4").value= 0 ;
              }
       }
       else if(j==3)
       {
       
       if (Number(amt) > 0)
             { 
                closebalnce=Number(amt);
             do
                {
                    if (closebalnce>0)
                        {
                            var a=Number(amt)* Number(intrt);
                              temp1= Math.round(Number(a)/100); 
                              temp2= Number(amt) + Number(temp1);
                              closebalnce=Number(temp2) - Number(intamt);
                                if(Number(temp1)>=Number(intamt))
                                   {alert("Instalment Amount can't be less than Interest Amount." + "Your Intrest Amount is  Rs." + temp1 );
                                     document.getElementById("Text4").value= 0 ;
                                     break;
                                     }
                                 else
                                  {
                                   amt=Number(closebalnce);
                                  tempinstalment= Number(tempinstalment) + 1;
        
                                    }
                          }
   
                     } while (Number(closebalnce)>0);
                    if (tempinstalment>0)
                          {
                             //document.getElementById("Text4").value=Number(tempinstalment)-1 ;
                             document.getElementById("Text4").value=Number(tempinstalment) ;
                          }
                     }
             else
             {
           
              document.getElementById("Text4").value= 0 ;
              }
       }
       
       
   
    }
    
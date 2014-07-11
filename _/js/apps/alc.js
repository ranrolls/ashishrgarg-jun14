
        function DigitOnly(e) {
            var Ec;

            if (window.event) { //IE             
                Ec = event.keyCode;

                if ((Ec >= 48 && Ec <= 57) || Ec == 46) {
                    window.event.returnValue = true;
                }
                else {
                    window.event.returnValue = false;
                }
            }
            else { //Firefox             
                Ec = e.which;

                if ((Ec >= 48 && Ec <= 57) || Ec == 8 || Ec == 0 || Ec == 46) {
                    e.returnValue = true;
                }
                else {
                    e.preventDefault();
                }
            }
        }

        function checkNumber(input, min, max, msg) {

            //var iv=input.value;

            msg = msg + " field has invalid data: " + input.value;
            var str = input.value;
            for (var i = 0; i < str.length; i++) {
                var ch = str.substring(i, i + 1)
                if ((ch < "0" || "9" < ch) && ch != '.') {
                    alert(msg);
                    return false;
                }
            }
            var num = parseFloat(str)
            if (num < min || max < num) {
                alert(msg + " not in range [" + min + ".." + max + "]");
                return false;
            }
            input.value = str;
            return true;
        }

        function computeField5(input) {
            if (input.value != null && input.value.length != 0)
                input.value = "" + eval(input.value);
            computeForm(input.form);
        }

        function computeField(input) {
            if (input.value != null && input.value.length != 0)
                input.value = "" + eval(input.value);
            computeForm(input.form);
        }
        function calculate_A() {
            //raju

            var t1 = document.getElementById("Text1").value;

            t1 = t1;

            t1 = parseFloat(t1);

            var t2 = document.getElementById("Text2").value;
            t2 = parseFloat(removeP(t2));
            if (t2 > 25) {
                alert("GST + PST or HST (%) can't more than 25%");
                return false;
            }
            var i = document.getElementById("interest").value;
            if (i > 50) {
                alert("Interest Rate (p.a.) (%) can't more than 50%");
                return false;
            }

            if (t1 > 0 && t2 > 0) {

                t1 = parseFloat(t1);
                t2 = parseFloat(t2);
                var la = 0;
                la = t1 + t1 * t2 / 100;

                document.getElementById("Text4").value = String(la);


                var ra = document.getElementById("Text3").value;
                ra = parseFloat(ra);

                //principal
                ra = parseFloat(ra);
                if (ra > 0) {
                    document.getElementById("principal").value = parseFloat(parseFloat(la) - parseFloat(ra));
                }
                else {
                    document.getElementById("principal").value = la;
                }
            }

        }


        var money = 0.00;
        function computeForm(form) {

            try {
                calculate_A();
                if ((document.getElementById("payments").value == null || document.getElementById("payments").value.length == 0) || (document.getElementById("interest").value == null || document.getElementById("interest").value.length == 0) || (document.getElementById("principal").value == null || document.getElementById("principal").value.length == 0)) {
                    return;
                }

                var i = document.getElementById("interest").value;
                i = removeP(i);
                i = parseFloat(i);
                if (i >= 100 || i < 0) {
                    document.getElementById("interest").value = "Invalid";
                    return false;
                }
                var nop = document.getElementById("payments").value;
                if (nop > 300 || nop < 1) {
                    document.getElementById("payments").value = "Invalid";
                    return false;
                }

                if (i == 0) {
                    var prin = document.getElementById("principal").value;
                    prin = prin;
                    prin = parseFloat(prin);
                    var instal = parseFloat(document.getElementById("payments").value);
                    money = Math.ceil(prin / instal)
                }
                else { // for else
                    if (i > 1.0) {
                        i = i / 100;
                        //form.interest.value = i;
                    }
                    i /= 12;
                    var pow = 1;
                    var prin1 = document.getElementById("principal").value;
                    prin1 = prin1;
                    prin1 = parseFloat(prin1); //document.getElementById("principal").value
                    for (var j = 0; j < document.getElementById("payments").value; j++)
                        pow = pow * (1 + i);
                    money = "" + .01 * Math.round(100 * (prin1 * pow * i) / (pow - 1));
                    dec = money.indexOf(".");
                    if (dec != -1) {
                        dollars = money.substring(0, dec);
                        cents = money.substring(dec + 1, dec + 3);
                        cents = (cents.length < 2) ? cents + "0" : cents;
                        money = dollars + "." + cents;
                    }
                    else {
                    }

                }
                if (money == "") {
                    money = 0
                }


                money4 = parseFloat(money);
                money4 = money4
                GetInstalmentAmt();
            }
            catch (ex) {
            }

        }



        function clearForm(form) {

            document.getElementById("payments").value = "";
            document.getElementById("interest").value = "";
            document.getElementById("principal").value = "";
            document.getElementById("payment").value = "";

        }

        //interest calculation
        function calcinterest() {
            principal = document.getElementById("principal").value;
            if (principal == "") {
                principal = 0
            }


            principal = parseFloat(principal)

            principaltotal = principal;

            pay = toRound(document.getElementById("payment").value);
            install = document.getElementById("payments").value; //document.calcform.payments.value
            total = parseInt(install * pay);
            interest12 = total - principaltotal;
            document.getElementById("totint").value = interest12;

        }

        function toRound(figure) {
            return Math.round(figure * 100) * 0.01
        }

        // done hiding from old browsers -->

        function MoreDetails() {
            var chart
            var forchart
            chart = window.open("", "det", "width=520,height=520,resizable=yes,scrollbars=yes,left=200,top=50")
            principal = document.getElementById("principal").value;
            principal = principal;

            if (principal == "") {
                principal = 0
            }


            principal = parseFloat(principal)


            rate = document.getElementById("interest").value;
            rate = removeP(rate);
            rate = parseFloat(rate);


            installments = document.getElementById("payments").value;
            installments = parseFloat(installments);
            emi = document.getElementById("payment").value;
            emi = emi;
            emi = parseFloat(emi);

            principaltotal = principal;

            var installmentstype = document.getElementById("installmentType").value;

            forchart = "<html><head></head><title>Loan Re-Payment Chart</title><body>"
            forchart = forchart + "<TABLE align=center><tr><td align=CENTER><FONT SIZE=2 face=verdana><B>Loan Re-Payment Chart</B></FONT><tD><tr></TABLE>"
            forchart = forchart + "<TABLE width=50% cellpadding=4 cellspacing=3 border=1 bordercolor=#000000 align=center style=border:none><tr bgcolor=#000000><TD align=center><FONT SIZE=1 face=verdana color=#eeeeee><B>Loan Details</B></FONT></TD></TR><TR><TD><FONT SIZE=1 face=verdana>Loan Amount   Rs.  " + principaltotal + "</FONT></td></tr>\n"
            forchart = forchart + "<TR><TD><FONT SIZE=1 face=verdana>" + installments + "  Installments of Rs.  " + emi + " each</FONT></td></tr>"
            forchart = forchart + "<TR><TD colspan=2 align=left><FONT SIZE=1 face=verdana>Payable " + installmentstype + "\n</FONT></td></tr>"
            //forchart = forchart + "<TR bgcolor=#9cc69c><TD colspan=2 align=center><FONT SIZE=1 face=verdana><B>Interest Slabs</B>\n</FONT></td></tr>" 

            if (principal != 0) {
                forchart = forchart + "<TR ><TD><FONT SIZE=1 face=verdana>Intrest Rate " + rate + "% p.a.</FONT></td></tr>\n"
            }


            forchart = forchart + "<table><TR><TD></td></tr></table>\n<BR><BR>"

            forchart = forchart + "<TABLE width=83% cellpadding=4 cellspacing=3 border=1 bordercolor=#000000 align=center style=border:none><tr bgcolor=#000000><td align=center colspan=5><FONT SIZE=1 face=verdana color=#eeeeee> <B>Loan Re-Payment Schedule </B><FONT></td></tr><tr bgcolor=#000000><TD align=center><FONT SIZE=1 face=verdana color=#eeeeee> <B>Sr. No </B></FONT></TD><TD align=right><FONT SIZE=1 face=verdana color=#eeeeee><B>EMI Amount (Rs.)</B></FONT></TD><TD align=right><FONT SIZE=1 face=verdana color=#eeeeee><B>Principal Re-Payment (Rs.)</B></FONT></TD><TD align=right><FONT SIZE=1 face=verdana color=#eeeeee><B>Interest (Rs.)</B></FONT></TD><TD align=right><FONT SIZE=1 face=verdana color=#eeeeee><B>Balance (Rs.)</B></FONT></TD></TR>"
            forchart = forchart + "<TR><TD colspan=4><FONT SIZE=1 face=verdana><B>Opening  Balance</B></FONT> </td><TD align=right><FONT SIZE=1 face=verdana>" + principaltotal + "</FONT></td></tr>\n"
            var balance = 0.00;


            var interestr;


            var lprincipal = 0.00;


            var lint = 0.00;


            balance = principal


            totalbalance = principaltotal

            interestr = rate / 12

            var test = 0.00
            for (i = 1; i <= installments; i++) {
                lint = (balance * interestr / 100);


                linttotal = lint;
                lprincipal = money - lint


                lprincipaltotal = lprincipal;
                lbalancetotal = balance - lprincipaltotal;
                if (i == installments) {
                    var inte = parseInt(emi) - parseInt(test)
                    forchart = forchart + "<TR><TD align=right><FONT SIZE=1 face=verdana>" + i + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + parseInt(emi) + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + test + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + inte + "</FONT></td><td align=right><FONT SIZE=1 face=verdana>0</FONT></td></tr>"
                }
                else {
                    forchart = forchart + "<TR><TD align=right><FONT SIZE=1 face=verdana>" + i + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + parseInt(emi) + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + Math.round(lprincipaltotal) + "</FONT></td><TD align=right><FONT SIZE=1 face=verdana>" + Math.round(linttotal) + "</FONT></td><td align=right><FONT SIZE=1 face=verdana>" + parseInt(lbalancetotal) + "</FONT></td></tr>"
                    test = parseInt(lbalancetotal)
                }
                balance = balance - lprincipal
            }
            forchart = forchart + "</body></table>"
            chart.document.write(forchart)
        }

        function GetInstalmentAmt() {

            try {
                var Amount = document.getElementById("principal").value; //window.document.calcform..value;
                Amount = Amount;
                Amount = parseFloat(Amount);
                var NoOfInstalment = document.getElementById("payments").value; //window.document.calcform..value;
                var InterestRate = document.getElementById("interest").value; //window.document.calcform.interest.value;
                InterestRate = removeP(InterestRate);
                InterestRate = parseFloat(InterestRate);
                var permonth = 0;
                var middle;
                var ffinal = 1;
                var ffinal1 = 0;
                var total = 0;
                var i = 0
                var ScheduledPayment = 0;

                var j = document.getElementById("installmentType").selectedIndex; //window.document.calcform.installmentType.selectedIndex;
                if (j == 0) {
                    permonth = InterestRate / 1200;
                    middle = 1 / (1 + permonth);

                    for (i = 0; i <= NoOfInstalment - 1; i++) {
                        ffinal = middle * ffinal;
                        total = total + ffinal;
                    }

                    ffinal1 = (Number(Amount) / total);



                    ScheduledPayment = Math.round(ffinal1);
                    //window.document.calcform.payment.value = Math.round(ffinal1); 
                    document.getElementById("payment").value = Math.round(ffinal1);



                }
                else if (j == 1) {
                    permonth = InterestRate / 400;
                    middle = 1 / (1 + permonth);
                    for (i = 0; i <= NoOfInstalment - 1; i++) {
                        ffinal = middle * ffinal;
                        total = total + ffinal;
                    }
                    ffinal1 = (Number(Amount) / total);
                    ScheduledPayment = Math.round(ffinal1);
                    //window.document.calcform.payment.value = Math.round(ffinal1);
                    document.getElementById("payment").value = Math.round(ffinal1);


                }
                else if (j == 2) {
                    permonth = InterestRate / 200;
                    middle = 1 / (1 + permonth);
                    for (i = 0; i <= NoOfInstalment - 1; i++) {
                        ffinal = middle * ffinal;
                        total = total + ffinal;
                    }
                    ffinal1 = (Number(Amount) / total);
                    ScheduledPayment = Math.round(ffinal1);
                    //window.document.calcform.payment.value = Math.round(ffinal1);
                    document.getElementById("payment").value = Math.round(ffinal1);



                }
                else if (j == 3) {
                    permonth = InterestRate / 100;
                    middle = 1 / (1 + permonth);
                    for (i = 0; i <= NoOfInstalment - 1; i++) {
                        ffinal = middle * ffinal;
                        total = total + ffinal;
                    }
                    ffinal1 = (Number(Amount) / total);
                    ScheduledPayment = Math.round(ffinal1);
                    //window.document.calcform.payment.value = Math.round(ffinal1);
                    document.getElementById("payment").value = Math.round(ffinal1);


                }


            }
            catch (e) {
            }


        }

        function setD(that) {
            var str = document.getElementById(that.id).value;
            //alert(str.length);    
            if (str.charAt(0) != '$') {
                document.getElementById(that.id).value = '$ ' + that.value;
            }
        }
        function setP(that) {
            var text = document.getElementById(that.id).value;
            if (text.charAt(text.length - 1) != '%') {
                document.getElementById(that.id).value = that.value + ' %';
            }
        }
        function removeD(text) {
            if (text.charAt(0) == '$') {

                return text.substring(2, text.length);
            }
            else {

                return text
            }
        }
        function removeP(text) {

            if (text.charAt(text.length - 1) == '%') {
                return text.substring(0, text.length - 2);
            }
            else {
                return text;
            }

        }
        function focus_(that) {
            //document.getElementById(that.id).value.select;
            if (document.getElementById(that.id).value.length == 2) {
                document.getElementById(that.id).value = "";
            }
            document.getElementById(that.id).style.backgroundColor = "#ffe5e5";
        }
        function focus__(that) {
            document.getElementById(that.id).style.backgroundColor = "#ffe5e5";
        }

function SubmitForm()
{
//    var f = document.getElementsByName("calcform") ;
    computeField(document.calcform );
}
function setD(that)
{
    document.getElementById(that.id).value= that.value;
}
function setP(that)
{
    document.getElementById(that.id).value=that.value+' %';
}
function removeD(text)
{
return text.substring(2,text.length);
}
function removeP(text)
{
return text.substring(0,text.length-2);
}
function focus_(that)
{
document.getElementById(that.id).value="";
document.getElementById(that.id).style.backgroundColor="";
}
function focus__(that)
{
document.getElementById(that.id).style.backgroundColor="";
}

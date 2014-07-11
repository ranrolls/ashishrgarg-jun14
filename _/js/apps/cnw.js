/* emi js is live */

        function CalculateNetWorth() {
            var defaultValue = 0;
            var paidupsharecapital = document.getElementById("txtpaidupsharecapital");
            var resoutofprofit = document.getElementById("txtresoutofprofit");
            var accumlosses = document.getElementById("txtaccumlosses");
            var defexpenditure = document.getElementById("txtdefexpenditure");
            var misexpenses = document.getElementById("txtmisexpenses");
            if (Trim(paidupsharecapital.value) == "") {
                alert("Enter paid up share capital");
                document.getElementById("txtpaidupsharecapital").style.backgroundColor = "yellow";
                document.getElementById("txtpaidupsharecapital").focus();
                return false;

            }
            else {
                document.getElementById("txtpaidupsharecapital").style.backgroundColor = "white";

            }
            if (Trim(resoutofprofit.value) == "") {
                resoutofprofit.value = Number(defaultValue);
               
            }
            
            if (Trim(accumlosses.value) == "") {
                accumlosses.value = Number(defaultValue);
            }
            
            if (Trim(defexpenditure.value) == "") {
                defexpenditure.value = Number(defaultValue);
            }
            
            if (Trim(misexpenses.value) == "") {
                misexpenses.value = Number(defaultValue);
            }
            

            //document.getElementById("trNetWorth").style.display = "block";
            var total = 0;
            total = Number(Trim(paidupsharecapital.value)) + Number(Trim(resoutofprofit.value));
            total = Number(total) - Number(Trim(accumlosses.value));
            total = Number(total) - Number(Trim(defexpenditure.value));
            total = Number(total) - Number(Trim(misexpenses.value));
            document.getElementById("txtnetworth").value = Number(total);
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
            
            if (!(keycode == 8)  && (keycode < 48 || keycode > 57)) {
                return false;
            }
           
        }
 
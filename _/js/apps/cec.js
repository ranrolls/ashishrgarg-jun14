/* emi js is live */

    function validateForm() {

        try {
            var txt_sharecapital = document.getElementById('ctl00_Mainbody_txt_sharecapital');
            var txt_sharepremiuem = document.getElementById('ctl00_Mainbody_txt_sharepremiuem');
            var txt_reservesurplus = document.getElementById('ctl00_Mainbody_txt_reservesurplus');
            var txt_loans = document.getElementById('ctl00_Mainbody_txt_loans');
            var txt_investment = document.getElementById('ctl00_Mainbody_txt_investment');
            var txt_deposits = document.getElementById('ctl00_Mainbody_txt_deposits');
            var txt_losses = document.getElementById('ctl00_Mainbody_txt_losses');
            var txt_expenses = document.getElementById('ctl00_Mainbody_txt_expenses');

            if (txt_sharecapital.value.length > 12) {
                alert("Shared Capital  Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_sharepremiuem.value.length > 12) {

                alert("Shared Premiuem Entered Can Not Exceed 12 Digits");
                return false;
            }

            if (txt_reservesurplus.value.length > 12) {

                alert("Reserve & Surplus Value  Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_loans.value.length > 12) {

                alert("Long Term Loan Value Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_investment.value.length > 12) {

                alert("Investment Value Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_deposits.value.length > 12) {

                alert("Deposit Value Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_losses.value.length > 12) {

                alert("Losses Value Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_expenses.value.length > 12) {

                alert("Expenses Value Entered Can Not Exceed 12 Digits");
                return false;
            }
            if (txt_sharecapital.value == "") {

                txt_sharecapital.value = 0;
            }
            if (txt_sharepremiuem.value == "") {
                txt_sharepremiuem.value = 0;
            }
            if (txt_reservesurplus.value == "") {
                txt_reservesurplus.value = 0;
            }
            if (txt_loans.value == "") {
                txt_loans.value = 0;
            }
            if (txt_investment.value == "") {
                txt_investment.value = 0;
            }
            if (txt_deposits.value == "") {
                txt_deposits.value = 0;
            }
            if (txt_losses.value == "") {
                txt_losses.value = 0;

            }
            if (txt_expenses.value == "") {
                txt_expenses.value = 0;
            }



            var total = parseInt(txt_deposits.value) + parseInt(txt_loans.value) + parseInt(txt_reservesurplus.value) + parseInt(txt_sharecapital.value) + parseInt(txt_sharepremiuem.value);
            //alert(total);
            var deduc = parseInt(txt_expenses.value) + parseInt(txt_investment.value) + parseInt(txt_losses.value);
            //alert(deduc);
            document.getElementById("ctl00_Mainbody_lbl_total").innerHTML = (total - deduc);
        }
        catch (e) {
            alert(e.Message);
        }
        return false;

    }
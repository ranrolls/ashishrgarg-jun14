/* emi js is live */

function DigitOnly(e) {
	var Ec;
	if(window.event) { //IE
		Ec = event.keyCode;
		if(Ec >= 48 && Ec <= 57) {
			window.event.returnValue = true;
		} else {
			window.event.returnValue = false;
		}
	} else {
		//Firefox
		Ec = e.which;
		if((Ec >= 48 && Ec <= 57) || Ec == 8 || Ec == 0) {
			e.returnValue = true;
		} else {
			e.preventDefault();
		}
	}

}

function HunderedOnly(txtRateid) {

	var txtRateLength = document.getElementById(txtRateid).value;

	if(txtRateLength > 100) {
		alert("VAT Rate can't be more than 100");
		return false;
	} else {
		return true;
	}

}

function CalculateAll(j, t) {

	var tableRows = document.getElementById('tab_SDetails').rows;

	var i = 0;
	var rowcells = tableRows[j].cells;

	var txtRate;

	if(t == "otxt") {
		txtRate = rowcells[1].childNodes[i].id;
		txtRate = document.getElementById(txtRate).value;

		var ho = HunderedOnly(rowcells[1].childNodes[i].id);

		if(ho == false) {

			return false;
		}

	} else {

		var ddlVatRate = rowcells[1].childNodes[i].id;
		ddlVatRate = document.getElementById(ddlVatRate);
	}

	var txtTotalAmount = rowcells[6].childNodes[i].id;
	txtTotalAmount = document.getElementById(txtTotalAmount);

	var txtAmount = rowcells[2].childNodes[i].id;
	txtAmount = document.getElementById(txtAmount);

	var txtSalePrice = rowcells[4].childNodes[i].id;
	txtSalePrice = document.getElementById(txtSalePrice);

	var txtVatAmount = rowcells[5].childNodes[i].id;
	txtVatAmount = document.getElementById(txtVatAmount);

	var chkVatInclusive = rowcells[3].childNodes[i].id;
	chkVatInclusive = document.getElementById(chkVatInclusive);

	
	var TextAmount = txtAmount.value;

	var rateC;

	if(chkVatInclusive.checked) {

		if(t == "otxt") {
			txtRate = rowcells[1].childNodes[i].id;
			rateC = document.getElementById(txtRate).value;

		} else {
			var ddlVatRate = rowcells[1].childNodes[i].id;
			rateC = document.getElementById(ddlVatRate).options[document.getElementById(ddlVatRate).selectedIndex].text;
		}

		var c = TextAmount * 100;
		var d = 100 + Number(rateC);
		var e = (Number(c) / Number(d));

		txtSalePrice.value = Math.round(e);
		var b = txtSalePrice.value;
		var f = TextAmount - b;
		txtVatAmount.value = Math.round(f);
		txtTotalAmount.value = Math.round(TextAmount);

	} //end if

	else {

		var rateU;
		if(t == "otxt") {
			txtRate = rowcells[1].childNodes[i].id;
			rateU = document.getElementById(txtRate).value;

		} else {
			var ddlVatRate = rowcells[1].childNodes[i].id;
			rateU = document.getElementById(ddlVatRate).options[document.getElementById(ddlVatRate).selectedIndex].text;

		}

		var a = rateU / 100;
		txtSalePrice.value = Math.round(TextAmount);
		var c = a * (TextAmount);
		txtVatAmount.value = Math.round(c);
		var d = Number(TextAmount) + Number(c);
		txtTotalAmount.value = Math.round(d);
	} //end else

	ForTotal();
	VatPayable();

	if(TextAmount == "") {

		txtSalePrice.value = "";
		txtVatAmount.value = "";
		txtTotalAmount.value = "";

	}//end if

}

function ForTotal() {

	var i = 0;

	var tableRows = document.getElementById('tab_SDetails').rows;

	var txtFinalAmount = document.getElementById('txtSFinalAmount');
	var txtFinalSalePrice = document.getElementById('txtSFinalSalePrice');
	var txtFinalVatAmount = document.getElementById('txtSFinalVatAmount');
	var txtFinalTotalAmount = document.getElementById('txtSFinalTotalAmount');

	var totalFinalAmount = 0;
	var totalFinalSalePrice = 0;
	var totalFinalVatAmount = 0;
	var totalFinalTotalAmount = 0;

	for(var j = 2; j <= 7; j++) {
		var rowcells = tableRows[j].cells;

		var txtAmount = rowcells[2].childNodes[i].id;
		txtAmount = document.getElementById(txtAmount);
		var txtSalePrice = rowcells[4].childNodes[i].id;
		txtSalePrice = document.getElementById(txtSalePrice);
		var txtVatAmount = rowcells[5].childNodes[i].id;
		txtVatAmount = document.getElementById(txtVatAmount);
		var txtTotalAmount = rowcells[6].childNodes[i].id;
		txtTotalAmount = document.getElementById(txtTotalAmount);
		totalFinalAmount = Number(totalFinalAmount) + Number(txtAmount.value);
		totalFinalSalePrice = Number(totalFinalSalePrice) + Number(txtSalePrice.value);
		totalFinalVatAmount = Number(totalFinalVatAmount) + Number(txtVatAmount.value);
		totalFinalTotalAmount = Number(totalFinalTotalAmount) + Number(txtTotalAmount.value);
	}

	txtFinalAmount.value = Math.round(totalFinalAmount);
	txtFinalSalePrice.value = Math.round(totalFinalSalePrice);
	txtFinalVatAmount.value = Math.round(totalFinalVatAmount);
	txtFinalTotalAmount.value = Math.round(totalFinalTotalAmount);

}

function CalculateAllP(j, t) {

	var tableRows = document.getElementById('tab_PDetails').rows;

	var i = 0;

	var rowcells = tableRows[j].cells;

	var txtRate;

	if(t == "otxt") {
		txtRate = rowcells[1].childNodes[i].id;
		txtRate = document.getElementById(txtRate).value;

		var ho = HunderedOnly(rowcells[1].childNodes[i].id);

		if(ho == false) {

			return false;
		}

	} else {

		var ddlVatRate = rowcells[1].childNodes[i].id;
		ddlVatRate = document.getElementById(ddlVatRate);
	}

	var txtTotalAmount = rowcells[6].childNodes[i].id;
	txtTotalAmount = document.getElementById(txtTotalAmount);

	var txtAmount = rowcells[2].childNodes[i].id;
	txtAmount = document.getElementById(txtAmount);

	var txtSalePrice = rowcells[4].childNodes[i].id;
	txtSalePrice = document.getElementById(txtSalePrice);

	var txtVatAmount = rowcells[5].childNodes[i].id;
	txtVatAmount = document.getElementById(txtVatAmount);

	var chkVatInclusive = rowcells[3].childNodes[i].id;
	chkVatInclusive = document.getElementById(chkVatInclusive);

	var TextAmount = txtAmount.value;

	var rateC;
	if(chkVatInclusive.checked == true) {

		if(t == "otxt") {
			txtRate = rowcells[1].childNodes[i].id;
			rateC = document.getElementById(txtRate).value;

		} else {

			var ddlVatRate = rowcells[1].childNodes[i].id;
			rateC = document.getElementById(ddlVatRate).options[document.getElementById(ddlVatRate).selectedIndex].text;
		}

		var c = TextAmount * 100;
		var d = 100 + Number(rateC);
		var e = (Number(c) / Number(d));
		txtSalePrice.value = Math.round(e);
		var b = txtSalePrice.value;
		var f = TextAmount - b;
		txtVatAmount.value = Math.round(f);
		txtTotalAmount.value = Math.round(TextAmount);
	} //end if

	else {

		var rateU;
		if(t == "otxt") {
			txtRate = rowcells[1].childNodes[i].id;
			rateU = document.getElementById(txtRate).value;

		} else {

			var ddlVatRate = rowcells[1].childNodes[i].id;
			rateU = document.getElementById(ddlVatRate).options[document.getElementById(ddlVatRate).selectedIndex].text;
		}

		var a = rateU / 100;
		txtSalePrice.value = Math.round(TextAmount);
		var c = a * (TextAmount);
		txtVatAmount.value = Math.round(c);
		var d = Number(TextAmount) + Number(c);
		txtTotalAmount.value = Math.round(d);
	} //end else

	ForTotalP();
	VatPayable();

	if(TextAmount == "") {

		txtSalePrice.value = "";
		txtVatAmount.value = "";
		txtTotalAmount.value = "";
		return false;
	}//end if

}

function ForTotalP() {

	var i = 0;

	var tableRows = document.getElementById('tab_PDetails').rows;

	var txtFinalAmount = document.getElementById('txtPFinalAmount');
	var txtFinalSalePrice = document.getElementById('txtPFinalSalePrice');
	var txtFinalVatAmount = document.getElementById('txtPFinalVatAmount');
	var txtFinalTotalAmount = document.getElementById('txtPFinalTotalAmount');

	var totalFinalAmount = 0;
	var totalFinalSalePrice = 0;
	var totalFinalVatAmount = 0;
	var totalFinalTotalAmount = 0;

	for(var j = 2; j <= 7; j++) {
		var rowcells = tableRows[j].cells;

		var txtAmount = rowcells[2].childNodes[i].id;
		txtAmount = document.getElementById(txtAmount);
		var txtSalePrice = rowcells[4].childNodes[i].id;
		txtSalePrice = document.getElementById(txtSalePrice);
		var txtVatAmount = rowcells[5].childNodes[i].id;
		txtVatAmount = document.getElementById(txtVatAmount);
		var txtTotalAmount = rowcells[6].childNodes[i].id;
		txtTotalAmount = document.getElementById(txtTotalAmount);
		totalFinalAmount = Number(totalFinalAmount) + Number(txtAmount.value);
		totalFinalSalePrice = Number(totalFinalSalePrice) + Number(txtSalePrice.value);
		totalFinalVatAmount = Number(totalFinalVatAmount) + Number(txtVatAmount.value);
		totalFinalTotalAmount = Number(totalFinalTotalAmount) + Number(txtTotalAmount.value);
	}

	txtFinalAmount.value = Math.round(totalFinalAmount);
	txtFinalSalePrice.value = Math.round(totalFinalSalePrice);
	txtFinalVatAmount.value = Math.round(totalFinalVatAmount);
	txtFinalTotalAmount.value = Math.round(totalFinalTotalAmount);

}

function VatPayable() {

	var i = 0;

	var tableRowsS = document.getElementById('tab_SDetails').rows;
	var tableRowsP = document.getElementById('tab_PDetails').rows;
	var txtFinalVatAmountS = document.getElementById('txtSFinalVatAmount');
	var txtFinalVatAmountP = document.getElementById('txtPFinalVatAmount');
	var txtFinalVatPayable = document.getElementById('txtVAT_Payable');

	var totalFinalVatAmountS = 0;
	var totalFinalVatAmountP = 0;

	for(var j = 2; j <= 7; j++) {
		var rowcells = tableRowsS[j].cells;

		var txtVatAmountS = rowcells[5].childNodes[i].id;
		txtVatAmountS = document.getElementById(txtVatAmountS);
		totalFinalVatAmountS = Number(totalFinalVatAmountS) + Number(txtVatAmountS.value);

	}
	txtFinalVatAmountS.value = totalFinalVatAmountS;

	for(var j = 2; j <= 7; j++) {
		var rowcells = tableRowsP[j].cells;

		var txtVatAmountP = rowcells[5].childNodes[i].id;
		txtVatAmountP = document.getElementById(txtVatAmountP);
		totalFinalVatAmountP = Number(totalFinalVatAmountP) + Number(txtVatAmountP.value);

	}
	txtFinalVatAmountP.value = totalFinalVatAmountP;

	var z =  Number(totalFinalVatAmountS) -  Number(totalFinalVatAmountP);

	txtFinalVatPayable.value = Math.round(z);

}

function Callprint(Divid) {

	try {

		var oIframe = document.getElementById('ifrmPrint');
		var oContent = document.getElementById(Divid).innerHTML;
		var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
		if(oDoc.document)
			oDoc = oDoc.document;
		oDoc.write("<html><head><title>Net worth calculator</title>");
		oDoc.write("<link href=styles/forms.css rel=stylesheet type=text/css />");
		oDoc.write("<link href=styles/fonts.css rel=stylesheet type=text/css />");
		oDoc.write("</head><body style = vertical-align:top; onload='this.focus(); this.print();'>");
		oDoc.write(oContent + "</body></html>");
		oDoc.close();
	} catch(e) {
		self.print();
	}

}

function resetAll(sType, cType) {
	a = document.form1.getElementsByTagName("input");

	for( i = 0; i < a.length; i++) {

		if(a[i].type == sType) {

			a[i].value = "";

		}

		if(a[i].type == cType) {
			a[i].checked = false;
		}
	}

}
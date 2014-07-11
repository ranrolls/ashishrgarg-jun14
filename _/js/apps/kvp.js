/* emi js is live */

function calculation() {
	var i = document.forms[0].pradeep.selectedIndex;

	if(i == 0) {
		var amt = document.getElementById("Text1").value;
		var dec = 2;
		var ast = (amt * 6.502) / 100;
		document.getElementById("Text2").value = Math.round(ast * Math.pow(10, dec)) / Math.pow(10, dec);

		var nb = Number(ast);
		var dec = 2;
		document.getElementById("Text21").value = Math.round(nb * Math.pow(10, dec)) / Math.pow(10, dec);

		var bst = (amt * 6.926) / 100;
		document.getElementById("Text3").value = Math.round(bst * Math.pow(10, dec)) / Math.pow(10, dec);

		var na = Number(ast) + Number(bst);
		var dec = 2;
		document.getElementById("Text31").value = Math.round(na * Math.pow(10, dec)) / Math.pow(10, dec);

		var cst = (amt * 7.367) / 100;
		document.getElementById("Text4").value = Math.round(cst * Math.pow(10, dec)) / Math.pow(10, dec);
		var nc = Number(ast) + Number(bst) + Number(cst);
		var dec = 2;
		document.getElementById("Text41").value = Math.round(nc * Math.pow(10, dec)) / Math.pow(10, dec);

		var dst = (amt * 10.285) / 100;
		document.getElementById("Text5").value = Math.round(dst * Math.pow(10, dec)) / Math.pow(10, dec);
		var aa = Number(bst) + Number(ast) + Number(cst) + Number(dst);

		var dec = 2;

		document.getElementById("Text51").value = Math.round(aa * Math.pow(10, dec)) / Math.pow(10, dec);
		var est = (amt * 12.483) / 100;
		document.getElementById("Text6").value = Math.round(est * Math.pow(10, dec)) / Math.pow(10, dec);
		var bb = Number(document.getElementById("Text51").value) + Number(est);
		document.getElementById("Text61").value = Math.round(bb * Math.pow(10, dec)) / Math.pow(10, dec);

		var fst = (amt * 10.767) / 100;
		document.getElementById("Text7").value = Math.round(fst * Math.pow(10, dec)) / Math.pow(10, dec);
		var cc = Number(document.getElementById("Text61").value) + Number(fst);
		document.getElementById("Text71").value = Math.round(cc * Math.pow(10, dec)) / Math.pow(10, dec);
		var gst = (amt * 17.052) / 100;
		document.getElementById("Text8").value = Math.round(gst * Math.pow(10, dec)) / Math.pow(10, dec);
		;
		var dd = Number(document.getElementById("Text71").value) + Number(gst);
		document.getElementById("Text81").value = Math.round(dd * Math.pow(10, dec)) / Math.pow(10, dec);
		var hst = (amt * 6.724) / 100;
		document.getElementById("Text9").value = Math.round(hst * Math.pow(10, dec)) / Math.pow(10, dec);
		var ee = Number(document.getElementById("Text81").value) + Number(hst);
		document.getElementById("Text91").value = Math.round(ee * Math.pow(10, dec)) / Math.pow(10, dec);

		var ist = (amt * 6.987) / 100;
		document.getElementById("Text10").value = Math.round(ist * Math.pow(10, dec)) / Math.pow(10, dec);
		var ff = Number(document.getElementById("Text91").value) + Number(ist);
		document.getElementById("Text101").value = Math.round(ff * Math.pow(10, dec)) / Math.pow(10, dec);
		var jst = (amt * 14.907) / 100;
		document.getElementById("Text11").value = Math.round(jst * Math.pow(10, dec)) / Math.pow(10, dec);
		var gg = Number(document.getElementById("Text101").value) + Number(jst);
		document.getElementById("Text111").value = Math.round(gg * Math.pow(10, dec)) / Math.pow(10, dec);

		document.getElementById("Text12").value = ast + bst + cst + dst + est + fst + gst + hst + ist + jst;
		var a = document.getElementById("Text12").value;
		var b = document.getElementById("Text1").value;

		document.getElementById("Text13").value = Number(a) + Number(b);
	} else if(i == 1) {
		var dec = 2;
		var amt = document.getElementById("Text1").value;
		var ast = (amt * 7.4) / 100;
		document.getElementById("Text2").value = Math.round(ast * Math.pow(10, dec)) / Math.pow(10, dec);
		var nb = Number(ast);
		var dec = 2;
		document.getElementById("Text21").value = Math.round(nb * Math.pow(10, dec)) / Math.pow(10, dec);

		var bst = (amt * 7.9) / 100;
		document.getElementById("Text3").value = Math.round(bst * Math.pow(10, dec)) / Math.pow(10, dec);
		var na = Number(ast) + Number(bst);
		var dec = 2;
		document.getElementById("Text31").value = Math.round(na * Math.pow(10, dec)) / Math.pow(10, dec);

		var cst = (amt * 10.3) / 100;
		document.getElementById("Text4").value = Math.round(cst * Math.pow(10, dec)) / Math.pow(10, dec);
		var nc = Number(ast) + Number(bst) + Number(cst);
		var dec = 2;
		document.getElementById("Text41").value = Math.round(nc * Math.pow(10, dec)) / Math.pow(10, dec);

		var dst = (amt * 12.6) / 100;
		document.getElementById("Text5").value = Math.round(dst * Math.pow(10, dec)) / Math.pow(10, dec);
		var aa = Number(bst) + Number(ast) + Number(cst) + Number(dst);
		var dec = 2;
		document.getElementById("Text51").value = Math.round(aa * Math.pow(10, dec)) / Math.pow(10, dec);
		var est = (amt * 15.2) / 100;
		document.getElementById("Text6").value = Math.round(est * Math.pow(10, dec)) / Math.pow(10, dec);
		var bb = Number(document.getElementById("Text51").value) + Number(est);
		document.getElementById("Text61").value = Math.round(bb * Math.pow(10, dec)) / Math.pow(10, dec);

		var fst = (amt * 13.8) / 100;
		document.getElementById("Text7").value = Math.round(fst * Math.pow(10, dec)) / Math.pow(10, dec);
		var cc = Number(document.getElementById("Text61").value) + Number(fst);
		document.getElementById("Text71").value = Math.round(cc * Math.pow(10, dec)) / Math.pow(10, dec);
		var gst = (amt * 21.1) / 100;
		document.getElementById("Text8").value = Math.round(gst * Math.pow(10, dec)) / Math.pow(10, dec);
		var dd = Number(document.getElementById("Text71").value) + Number(gst);
		document.getElementById("Text81").value = Math.round(dd * Math.pow(10, dec)) / Math.pow(10, dec);
		var hst = (amt * 11.7) / 100;
		document.getElementById("Text9").value = Math.round(hst * Math.pow(10, dec)) / Math.pow(10, dec);
		var ee = Number(document.getElementById("Text81").value) + Number(hst);
		document.getElementById("Text91").value = Math.round(ee * Math.pow(10, dec)) / Math.pow(10, dec);

		document.getElementById("Text12").value = ast + bst + cst + dst + est + fst + gst + hst;
		var a = document.getElementById("Text12").value;
		var b = document.getElementById("Text1").value;

		document.getElementById("Text13").value = Number(a) + Number(b);

	} else if(i == 2) {
		var dec = 2;
		var amt = document.getElementById("Text1").value;
		var ast = (amt * 7.9) / 100;
		document.getElementById("Text2").value = Math.round(ast * Math.pow(10, dec)) / Math.pow(10, dec);
		var nb = Number(ast);
		var dec = 2;
		document.getElementById("Text21").value = Math.round(nb * Math.pow(10, dec)) / Math.pow(10, dec);

		var bst = (amt * 8.5) / 100;
		document.getElementById("Text3").value = Math.round(bst * Math.pow(10, dec)) / Math.pow(10, dec);
		var na = Number(ast) + Number(bst);
		var dec = 2;
		document.getElementById("Text31").value = Math.round(na * Math.pow(10, dec)) / Math.pow(10, dec);

		var cst = (amt * 11.0) / 100;
		document.getElementById("Text4").value = Math.round(cst * Math.pow(10, dec)) / Math.pow(10, dec);
		var nc = Number(ast) + Number(bst) + Number(cst);
		var dec = 2;
		document.getElementById("Text41").value = Math.round(nc * Math.pow(10, dec)) / Math.pow(10, dec);

		var dst = (amt * 13.5) / 100;
		document.getElementById("Text5").value = Math.round(dst * Math.pow(10, dec)) / Math.pow(10, dec);
		var aa = Number(bst) + Number(ast) + Number(cst) + Number(dst);
		var dec = 2;
		document.getElementById("Text51").value = Math.round(aa * Math.pow(10, dec)) / Math.pow(10, dec);
		var est = (amt * 16.3) / 100;
		document.getElementById("Text6").value = Math.round(est * Math.pow(10, dec)) / Math.pow(10, dec);
		var bb = Number(document.getElementById("Text51").value) + Number(est);
		document.getElementById("Text61").value = Math.round(bb * Math.pow(10, dec)) / Math.pow(10, dec);

		var fst = (amt * 19.8) / 100;
		document.getElementById("Text7").value = Math.round(fst * Math.pow(10, dec)) / Math.pow(10, dec);
		var cc = Number(document.getElementById("Text61").value) + Number(fst);
		document.getElementById("Text71").value = Math.round(cc * Math.pow(10, dec)) / Math.pow(10, dec);

		var hst = (amt * 23.0) / 100;
		document.getElementById("Text9").value = Math.round(hst * Math.pow(10, dec)) / Math.pow(10, dec);
		var ee = Number(document.getElementById("Text71").value) + Number(hst);
		document.getElementById("Text91").value = Math.round(ee * Math.pow(10, dec)) / Math.pow(10, dec);

		document.getElementById("Text12").value = ast + bst + cst + dst + est + fst + hst;
		var a = document.getElementById("Text12").value;
		var b = document.getElementById("Text1").value;

		document.getElementById("Text13").value = Number(a) + Number(b);

	}

}

function pp() {
	var i = document.forms[0].pradeep.selectedIndex;
	document.getElementById("Text2").value = "";
	document.getElementById("Text3").value = "";
	document.getElementById("Text4").value = "";
	document.getElementById("Text5").value = "";
	document.getElementById("Text6").value = "";
	document.getElementById("Text7").value = "";
	document.getElementById("Text8").value = "";
	document.getElementById("Text9").value = "";
	document.getElementById("Text10").value = "";
	document.getElementById("Text11").value = "";
	document.getElementById("Text12").value = "";
	document.getElementById("Text13").value = "";
	document.getElementById("Text21").value = "";
	document.getElementById("Text31").value = "";
	document.getElementById("Text41").value = "";
	document.getElementById("Text51").value = "";
	document.getElementById("Text61").value = "";
	document.getElementById("Text71").value = "";
	document.getElementById("Text81").value = "";
	document.getElementById("Text91").value = "";
	document.getElementById("Text101").value = "";
	document.getElementById("Text111").value = "";

	if(i == 1) {

		document.getElementById("xx").style.display = "none";
		document.getElementById("xxx").style.display = "none";
		//td_year7
		document.getElementById("td_year7").innerHTML = "7th Year And 8 Months Interest";
	}
	if(i == 0) {
		document.getElementById("xx").style.display = "block";
		document.getElementById("xxx").style.display = "block";
		document.getElementById("xxxx").style.display = "block";
	}
	if(i == 2) {
		document.getElementById("xx").style.display = "none";
		document.getElementById("xxx").style.display = "none";
		document.getElementById("xxxx").style.display = "none";
		document.getElementById("td_year7").innerHTML = "7th Year And 3 Months Interest";

	}

}

function aaa() {
	document.getElementById("ctl00_ContentPlaceHolder3_ld").style.display = 'block';
	document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').value = "";
	document.getElementById('ctl00_ContentPlaceHolder3_txt_Pwd').value = "";
	document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').focus();
	return false;
}

function sss() {
	document.getElementById("ctl00_ContentPlaceHolder3_ld").style.display = 'none';
}

function checkloginpopup() {
	//ctl00_ContentPlaceHolder3

	var uid = Trim(document.getElementById('ctl00_ContentPlaceHolder3_txt_UserName').value);
	if(uid.length == 0) {
		alert('User ID is blank');
		//document.getElementById('ctl00_ContentPlaceHolder1_txt_UserID').value="";
		//document.getElementById('ctl00_ContentPlaceHolder1_txt_UserID').focus();
		return false;
	}
	var pwd = Trim(document.getElementById('ctl00_ContentPlaceHolder3_txt_Pwd').value);
	if(pwd.length == 0) {
		alert('Password is blank');
		return false;
	}
}

function Trim(input) {
	var lre = /^\s*/;
	var rre = /\s*$/;
	input = input.replace(lre, "");
	input = input.replace(rre, "");
	return input;
}

function check987(t) {
	if(document.getElementById("ctl00_ContentPlaceHolder3_txt_Search").value == "") {
		alert("Enter Search Content");
		//return false;
		xyz(t, '');
	}
}
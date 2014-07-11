<div class="mainContent">
	<form name="form1" method="post" action="#" id="aspnetForm" style="background-color:">
		<!-- form starts here -->
		<div id="printArea">
			<table width="100%" cellspacing="1" cellpadding="1" bordercolor="#000000" border="1">
				<tbody>
					<tr valign="top">
						<td bgcolor="#000000" align="left" style="text-align: center;" colspan="7"><h2 class="heading"><span style="color: rgb(255, 255, 255);">VAT Calculator</span></h2></td>
					</tr>
					<tr valign="top" align="center" id="netWorth">
						<td align="center" colspan="2" class="dollar" style="text-align: left;"><span class="maincontent1"><strong>Dealer's Name :</strong></span></td>
						<td align="left" class="dollar" colspan="2">
						<input type="text" name="txtDealerName" id="txtDealerName" class="inputbox1" style="width: 411px;">
						</td>
						<td align="center" class="dollar" style="text-align: right;"><span class="maincontent1"><strong>TIN :</strong></span></td>
						<td align="right" class="dollar" colspan="2" style="text-align: left;">
						<input type="text" name="txtTIN" id="txtTIN" class="inputbox" style="width: 102px;">
						&nbsp; &nbsp; &nbsp;&nbsp;</td>
					</tr>
				</tbody>
			</table>
			<table width="100%" cellspacing="1" cellpadding="1" bordercolor="#000000" border="1" id="tab_SDetails">
				<tbody>
					<tr>
						<td bgcolor="#000000" align="center" colspan="7" class="dollar"><span class="mainheading">Sales Details</span></td>
					</tr>
					<tr bgcolor="#ffffff">
						<td align="left"><span class="maincontent1"><strong>Sr.No.</strong></span></td>
						<td align="center"><span class="maincontent1"><strong>VAT Rate.(%)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Amount(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>VAT Inclusive</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Sale Price(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>VAT(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Gross Total(Rs.)</strong></span></td>
					</tr>
					<tr class='we'>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>1.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlSVAT_Rate1" id="ddlSVAT_Rate1" onchange="CalculateAll(2,1,this);" style="height: 20px; width: 102px; text-align: justify; display: block;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option value="2">4</option>
							<option selected="selected" value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount1" maxlength="15" id="txtSAmount1" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(2,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive1" name="chkSVatInclusive1" onclick="CalculateAll(2,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice1" readonly="readonly" id="txtSSalePrice1" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount1" readonly="readonly" id="txtSVatAmount1" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount1" readonly="readonly" id="txtSTotalAmount1" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>2.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlSVAT_Rate2" id="ddlSVAT_Rate2" onchange="CalculateAll(3,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option selected="selected" value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount2" maxlength="15" id="txtSAmount2" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(3,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive2" name="chkSVatInclusive2" onclick="CalculateAll(3,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice2" readonly="readonly" id="txtSSalePrice2" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount2" readonly="readonly" id="txtSVatAmount2" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount2" readonly="readonly" id="txtSTotalAmount2" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>3.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlSVAT_Rate3" id="ddlSVAT_Rate3" onchange="CalculateAll(4,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option selected="selected" value="1">2</option>
							<option value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount3" maxlength="15" id="txtSAmount3" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(4,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive3" name="chkSVatInclusive3" onclick="CalculateAll(4,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice3" readonly="readonly" id="txtSSalePrice3" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount3" readonly="readonly" id="txtSVatAmount3" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount3" readonly="readonly" id="txtSTotalAmount3" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>4.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlSVAT_Rate4" id="ddlSVAT_Rate4" onchange="CalculateAll(5,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option selected="selected" value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount4" maxlength="15" id="txtSAmount4" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(5,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive4" name="chkSVatInclusive4" onclick="CalculateAll(5,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice4" readonly="readonly" id="txtSSalePrice4" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount4" readonly="readonly" id="txtSVatAmount4" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount4" readonly="readonly" id="txtSTotalAmount4" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>5.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="TextBox1" id="TextBox1" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(5,&#39;otxt&#39;);" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount5" maxlength="15" id="txtSAmount5" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(5,&#39;otxt&#39;);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive5" name="chkSVatInclusive5" onclick="CalculateAll(5,&#39;otxt&#39;);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice5" readonly="readonly" id="txtSSalePrice5" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount5" readonly="readonly" id="txtSVatAmount5" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount5" readonly="readonly" id="txtSTotalAmount5" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>6.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="TextBox2" id="TextBox2" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(6,&#39;otxt&#39;);" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSAmount6" maxlength="15" id="txtSAmount6" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAll(6,&#39;otxt&#39;);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkSVatInclusive6" name="chkSVatInclusive6" onclick="CalculateAll(6,&#39;otxt&#39;);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSSalePrice6" readonly="readonly" id="txtSSalePrice6" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSVatAmount6" readonly="readonly" id="txtSVatAmount6" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSTotalAmount6" readonly="readonly" id="txtSTotalAmount6" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>Total</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSFinalAmount" id="txtSFinalAmount" class="inputbox" style="width: 102px;">
						</td>
						<td>&nbsp;</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSFinalSalePrice" readonly="readonly" id="txtSFinalSalePrice" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSFinalVatAmount" readonly="readonly" id="txtSFinalVatAmount" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtSFinalTotalAmount" readonly="readonly" id="txtSFinalTotalAmount" class="inputbox" style="width: 102px;">
						</td>
					</tr>
				</tbody>
			</table>
			<table width="100%" cellspacing="1" cellpadding="1" bordercolor="#000000" border="1" id="tab_PDetails">
				<tbody>
					<tr>
						<td bgcolor="#000000" align="center" colspan="7" class="dollar"><span class="mainheading"> Purchase Details</span></td>
					</tr>
					<tr bgcolor="#ffffff">
						<td align="left"><span class="maincontent1"><strong>Sr.No.</strong></span></td>
						<td align="center"><span class="maincontent1"><strong>VAT Rate.(%)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Amount(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>VAT Inclusive</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Sale Price(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Input Tax Credit(Rs.)</strong></span></td>
						<td align="left" style="text-align: center;"><span class="maincontent1"><strong>Gross Total(Rs.)</strong></span></td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>1.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlPVAT_Rate1" id="ddlPVAT_Rate1" onchange="CalculateAllP(2,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option value="2">4</option>
							<option selected="selected" value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount1" maxlength="15" id="txtPAmount1" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(2,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive1" name="chkPVatInclusive1" checked="checked" onclick="CalculateAllP(2,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice1" readonly="readonly" id="txtPSalePrice1" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount1" readonly="readonly" id="txtPVatAmount1" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount1" readonly="readonly" id="txtPTotalAmount1" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>2.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlPVAT_Rate2" id="ddlPVAT_Rate2" onchange="CalculateAllP(3,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option selected="selected" value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount2" maxlength="15" id="txtPAmount2" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(3,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive2" name="chkPVatInclusive2" checked="checked" onclick="CalculateAllP(3,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice2" readonly="readonly" id="txtPSalePrice2" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount2" readonly="readonly" id="txtPVatAmount2" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount2" readonly="readonly" id="txtPTotalAmount2" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>3.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlPVAT_Rate3" id="ddlPVAT_Rate3" onchange="CalculateAllP(4,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option selected="selected" value="1">2</option>
							<option value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount3" maxlength="15" id="txtPAmount3" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(4,1,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive3" name="chkPVatInclusive3" checked="checked" onclick="CalculateAllP(4,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice3" readonly="readonly" id="txtPSalePrice3" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount3" readonly="readonly" id="txtPVatAmount3" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount3" readonly="readonly" id="txtPTotalAmount3" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>4.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<select name="ddlPVAT_Rate4" id="ddlPVAT_Rate4" onchange="CalculateAllP(5,1,this);" style="height: 20px; width: 102px;">
							<option value="0">1</option>
							<option value="1">2</option>
							<option value="2">4</option>
							<option value="3">5</option>
							<option value="4">8</option>
							<option value="5">10</option>
							<option selected="selected" value="6">12.5</option>
							<option value="7">20</option>
						</select></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount4" maxlength="15" id="txtPAmount4" class="inputbox" onchange="CalculateAllP(5,1,this);" onkeypress="return DigitOnly(event);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive4" name="chkPVatInclusive4" checked="checked" onclick="CalculateAllP(5,1,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice4" readonly="readonly" id="txtPSalePrice4" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount4" readonly="readonly" id="txtPVatAmount4" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount4" readonly="readonly" id="txtPTotalAmount4" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>5.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="TextBox5" id="TextBox3" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(5,&#39;otxt&#39;,this);" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount5" maxlength="15" id="txtPAmount5" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(5,&#39;otxt&#39;,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive5" name="chkPVatInclusive5" checked="checked" onclick="CalculateAllP(5,&#39;otxt&#39;,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice5" readonly="readonly" id="txtPSalePrice5" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount5" readonly="readonly" id="txtPVatAmount5" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount5" readonly="readonly" id="txtPTotalAmount5" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>6.</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="TextBox6" id="TextBox4" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(6,&#39;otxt&#39;,this);" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPAmount6" maxlength="15" id="txtPAmount6" class="inputbox" onkeypress="return DigitOnly(event);" onchange="CalculateAllP(6,&#39;otxt&#39;,this);" style="width: 102px;">
						</td>
						<td align="center">
						<input type="checkbox" id="chkPVatInclusive6" name="chkPVatInclusive6" checked="checked" onclick="CalculateAllP(6,&#39;otxt&#39;,this);">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPSalePrice6" readonly="readonly" id="txtPSalePrice6" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPVatAmount6" readonly="readonly" id="txtPVatAmount6" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPTotalAmount6" readonly="readonly" id="txtPTotalAmount6" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td align="center" style="width: 40px;"><span class="maincontent1"><strong>Total</strong></span></td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPFinalAmount" id="txtPFinalAmount" class="inputbox" style="width: 102px;">
						</td>
						<td>&nbsp;</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPFinalSalePrice" readonly="readonly" id="txtPFinalSalePrice" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPFinalVatAmount" readonly="readonly" id="txtPFinalVatAmount" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtPFinalTotalAmount" readonly="readonly" id="txtPFinalTotalAmount" class="inputbox" style="width: 102px;">
						</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td align="center" style="width: 40px;">&nbsp;</td>
						<td align="center" class="dollar" style="width: 106px;">&nbsp;</td>
						<td align="center" class="dollar" colspan="2"><strong><span style="color: rgb(75, 73, 73);">VAT Payable / (Refundable)(-)</span></strong> &nbsp; &nbsp;&nbsp;</td>
						<td align="center" class="dollar" style="width: 106px;">
						<input type="text" name="txtVAT_Payable" readonly="readonly" id="txtVAT_Payable" class="inputbox" style="width: 102px;">
						</td>
						<td align="center" class="dollar" style="width: 106px;">&nbsp;</td>
					</tr>
				</tbody>
			</table>
			<table width="100%">
				<tbody>
					<tr>
						<td width="70%" align="center">
						<input type="reset" id="Button1" class="button1" onclick="resetAll(&#39;text&#39;,&#39;checkbox&#39;);" value="Reset">
						<input type="button" id="Button2" class="Printbutton" onclick="Callprint(&#39;printArea&#39;)" value="Print">
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- form endss here -->
	</form>
</div>
<?php
$fjs = 'apps/' . $app . '.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
?>
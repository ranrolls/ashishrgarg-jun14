<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table width="100%" cellspacing="0" cellpadding="0" bordercolor="#fffff8" border="0">
			<tbody>
				<tr valign="top" align="center">
					<td width="100%" align="center" colspan="2">
					<table width="70%" cellspacing="2" cellpadding="3" bordercolor="#000000" border="1" style="BORDER-RIGHT: medium none; BORDER-TOP: medium none; BORDER-LEFT: medium none; BORDER-BOTTOM: medium none">
						<tbody>
							<tr valign="center">
								<td valign="center" height="25" align="center" colspan="2" class="trbgcolor"><h3><span style="color: #000" >Auto Loan Calculator</span></h3></td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Payments are made</td>
								<td width="50%"><b>
								<select id="installmentType" style="WIDTH: 115px" name="installmentType">
									<option id="simple" value="Monthly" selected="">Monthly</option>
									<option id="quater" value="Quaterly">Quaterly</option>
									<option id="half" value="Half Yearly">Half Yearly</option>
									<option id="year" value="Yearly">Yearly</option>
								</select></b></td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Total Purchase Price (Before Tax)(Rs.)</td>
								<td width="50%">
								<input class="txtright" id="Text1" onblur="setD(this);" onfocus="focus_(this);" onchange="calculate_A();">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">VAT (%)</td>
								<td width="50%">
								<input class="txtright" id="Text2" onblur="setP(this);" onfocus="focus_(this);" onchange="calculate_A();">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Total Purchase Price (After Tax)</td>
								<td width="50%">
								<input class="txtrightR" id="Text4" readonly="">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Down Payment or Rebates(Rs.)</td>
								<td width="50%">
								<input class="txtright" id="Text3" onblur="setD(this);" onfocus="focus_(this);" onchange="calculate_A();">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Loan Amount</td>
								<td width="50%">
								<input class="txtrightR" id="principal" readonly="" maxlength="8" onchange="computeField(this)" name="principal">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Interest Rate (p.a.) (%)</td>
								<td width="50%">
								<input class="txtright" id="interest" onblur="setP(this);" onfocus="focus_(this);" maxlength="6" onchange="computeField(this)" name="interest">
								</td>
							</tr>
							<tr valign="top">
								<td width="50%" align="left">Number of payments</td>
								<td width="50%">
								<input class="txtright" id="payments" onfocus="focus_(this);" maxlength="3" onchange="computeField5(this)" name="payments">
								</td>
							</tr>
							<tr valign="center">
								<td width="50%" align="left">Auto Payment Installment(Rs.)</td>
								<td width="50%"><span>
									<input class="txtrightR" id="payment" readonly="" onchange="computeField(this)" name="payment">
								</span></td>
							</tr>
							<tr valign="center">
								<td height="25" align="center" colspan="2"><span>
									<input type="button" onclick="MoreDetails()" value="Chart">
									<input type="button" onclick="computeForm(this.calcform)" value="Calculate" name="button">
									<input type="reset" onclick="clearForm(this.form)" value="Clear" name="reset">
								</span></td>
							</tr>
						</tbody>
					</table></td>
				</tr>
			</tbody>
		</table>
		<div align="center" style="FONT-SIZE: 15px; FONT-FAMILY: Arial">
			<i>Disclaimer - These calculations are only indicative, please consult your tax advisor for details </i>
		</div>
	</form>
</div>
<?php
$fjs = 'apps/' . $app . '.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
?>
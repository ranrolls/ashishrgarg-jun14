<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table cellspacing="0" cellpadding="0" border="0" style="WIDTH: 100%">
			<tbody>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td style="WIDTH: 20%">&nbsp;</td>
					<!--border:1px; border-style:solid; border-color:gray;-->
					<td style="WIDTH: 60%">
					<table cellspacing="0" cellpadding="2" border="1" style="WIDTH: 100%">
						<tbody>
							<tr class="trbgcolor">
								<td bgcolor="#000000" align="center" colspan="3"><h3><font face="Arial" color="#eeeeee"> Home Loan Calculator </font></h3></td>
							</tr>
							<tr>
								<td colspan="3">Inputs</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Loan Amount(Rs.)</td>
								<td colspan="2">
								<input maxlength="16" onfocus="focus_(this);" onblur="setD(this);" id="txt_LoanAmount" onkeypress="return DigitOnly(event);" class="txtright">
								&nbsp;</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Loan Rate(%)</td>
								<td colspan="2">
								<input maxlength="5" onchange="NintyOnly(&#39;txt_MortgageRate&#39;);" onfocus="focus_(this);" id="txt_MortgageRate" onkeypress="return DigitOnly(event);" class="txtright">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Compound Period</td>
								<td colspan="2">
								<select onfocus="focus__(this);" style="WIDTH: 115px" id="drp_CompoundPeriod">
									<option value="2">Semi-Annually</option>
									<option value="12">Monthly</option>
									<option value="4">Quarterly</option>
									<option selected="" value="1">Annually</option>
								</select></td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Amortization Period (in years)</td>
								<td colspan="2">
								<input maxlength="16" onfocus="focus__(this);" id="txt_AmortizationPeriod" onkeypress="return DigitOnly(event);" class="txtcenter">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">First Payment Date</td>
								<td colspan="2">
								<input readonly="" onfocus="focus__(this);" id="txt_FirstPaymentDate" onmousedown="cal_coll1();" class="txtleft">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Payment Frequency</td>
								<td colspan="2">
								<select onfocus="focus__(this);" style="WIDTH: 115px" id="drp_PaymentFrequency">
									<option value="1">Annually</option>
									<option value="2">Semi-Annually</option>
									<option value="4">Quarterly</option>
									<option value="6">Bi-Monthly</option>
									<option selected="" value="12">Monthly</option>
									<option value="24">Semi-Monthly</option>
									<option value="26">Bi-Weekly</option>
									<option value="52">Weekly</option>
								</select></td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Payment</td>
								<td colspan="2">
								<input readonly="" id="TextBox2" class="txtrightR">
								</td>
							</tr>
							<tr class="trbgcolor">
								<td colspan="3"><font face="Arial" color="#eeeeee">Extra Payments</font></td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Extra Payment(Rs.)</td>
								<td colspan="2">
								<input maxlength="16" onfocus="focus_(this);" onblur="setD(this);" id="txt_ExtraPayment" onkeypress="return DigitOnly(event);" class="txtright">
								&nbsp;
								<input type="button" value="Calculate" onclick="calculate();" id="Submit1">
								</td>
							</tr>
							<tr class="trbgcolor">
								<td colspan="3"><font face="Arial" color="#eeeeee">Fully Amortized</font></td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Interest Rate (per payment)</td>
								<td colspan="2">
								<input readonly="" id="TextBox1" class="txtrightR">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Total Payments (Rs.)</td>
								<td colspan="2">
								<input readonly="" id="txt_totalpayments" class="txtrightR">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Total Interest (Rs.)</td>
								<td colspan="2">
								<input readonly="" id="txt_totalintrest" class="txtrightR">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Number of Payments</td>
								<td colspan="2">
								<input readonly="" id="txt_noofpayment" class="txtrightR">
								</td>
							</tr>
							<tr>
								<td style="WIDTH: 50%">Last Payment Date</td>
								<td colspan="2">
								<input readonly="" id="txt_lastpaymentdate" class="txtleftR">
								</td>
							</tr>
						</tbody>
					</table></td>
					<td style="WIDTH: 20%">&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td colspan="3"><span id="span_HTML"></span></td>
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
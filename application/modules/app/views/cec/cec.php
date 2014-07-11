<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table style="font-family:Arial;">
			<tbody>
				<tr>
					<td style="background-color:Black ;" colspan="2">
					<center>
						<h3 style="color:White;">Calculate Effective Capital</h3>
					</center></td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Paid Share Capital: </strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_sharecapital" id="ctl00_Mainbody_txt_sharecapital" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Share Premium (in Rs.): </strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_sharepremiuem" id="ctl00_Mainbody_txt_sharepremiuem" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Reserves &amp; Surplus (excluding revaluation reserves) (in Rs.):</strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_reservesurplus" id="ctl00_Mainbody_txt_reservesurplus" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Long Term Loans (in Rs.): </strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_loans" id="ctl00_Mainbody_txt_loans" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Deposits(in Rs.) : </strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_deposits" id="ctl00_Mainbody_txt_deposits" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Investments (in Rs.): </strong></td>
					<td>
					<input name="ctl00$Mainbody$txt_investment" id="ctl00_Mainbody_txt_investment" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Accumulated Losses (in Rs.): </strong></td>
					<td align="left">
					<input name="ctl00$Mainbody$txt_losses" id="ctl00_Mainbody_txt_losses" type="text">
					</td>
				</tr>
				<tr>
					<td class="par-text-b" align="left"><strong>Preliminary Expenses (in Rs.): </strong></td>
					<td>
					<input name="ctl00$Mainbody$txt_expenses" id="ctl00_Mainbody_txt_expenses" type="text">
					</td>
				</tr>
				<tr>
					<td colspan="2">
					<input name="ctl00$Mainbody$hidtotalb" id="ctl00_Mainbody_hidtotalb" type="hidden">
					<input name="ctl00$Mainbody$hidtotala" id="ctl00_Mainbody_hidtotala" type="hidden">
					</td>
				</tr>
				<tr>
					<td colspan="2" align="center">
					<input value="Submit" onclick="return validateForm();" id="ctl00_Mainbody_calculatebtn" type="submit">
					</td>
				</tr>
				<tr>
					<td align="left" colspan="2" class="cb_header"><span id="ctl00_Mainbody_lbl_totaltext"><strong>Total Effective Capital:</strong></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="ctl00_Mainbody_lbl_total" style="font-weight:bold;"></span></td>
				</tr>
			</tbody>
		</table>
	</form>
	
</div>
<?php
$fjs = 'apps/' . $app . '.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
?>
<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table style="border: thin solid rgb(153, 51, 102); z-index: 100;" align="center">
			<tbody>
				<tr>
					<td colspan="2" style="font-weight: bold; font-size: 9pt; color: black; font-family: Arial; height: 26px; text-align: center;"> EMI Calculator</td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;">Select Instalment Type </td><td style="width: 161px; color: black; height: 26px;">
					<select id="pradeep" style="width: 160px; font-weight: bold; color: black; background-color: white; text-align: center;">
						<option id="simple" selected="selected">Monthly Interest </option>
						<option id="quater">Quaterly</option>
						<option id="half">Half Yearly</option>
						<option id="year">Yearly</option>
					</select></td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;"> Loan Amount</td><td style="width: 161px; color: black; height: 26px;">
					<input id="Textbox1" style="font-weight: bold; width: 152px; color: black; text-align: right;" type="text">
					</td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;">No. Of Instalment</td><td style="width: 161px; color: black; height: 26px;">
					<input id="Textbox3" style="font-weight: bold; width: 152px; color: black; text-align: right;" type="text">
					</td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;">Interest Rate (P.A.)</td><td style="width: 161px; color: black; height: 26px;">
					<input id="Textbox2" style="font-weight: bold; width: 152px; color: black; text-align: right;" type="text">
					</td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;"> Instalment Amount</td><td style="width: 161px; color: black; height: 26px;">
					<input id="Textbox4" style="font-weight: bold; width: 152px; color: black; text-align: right;" type="text">
					</td>
				</tr>
				<tr>
					<td style="width: 161px; height: 26px; color: black;"> &nbsp;
					<input id="btn1" onclick="GetInstalmentAmt()" style="width: 136px; font-weight: bold; color: black; font-size: 10pt; font-family: Arial;" value=" GetInstmnt Amount" type="button">
					</td>
				</tr>
			</tbody>
		</table>
	</form>
</div><!-- mainContent Close -->
<?php
$fjs = 'apps/' . $app . '.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
?>
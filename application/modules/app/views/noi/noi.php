<div class="mainContent">
	<form name="aspnetForm" method="post" action="#" id="aspnetForm" style="background-color:">
		<table align="center" style="border: thin solid rgb(153, 51, 102); z-index: 100; left: 280px; width: 296px;">
			<tbody>
				<tr>
					<td style="font-weight: bold; color: black; text-align: center; font-size: 9pt; font-family: Arial;" colspan="2"><span style="font-size: 10pt; font-family: Arial;"> Number Of Instalment</span></td>
				</tr>
				<tr>
					<td style="color: black; width: 161px; height: 26px; font-size: 9pt; font-family: Arial;"><strong>Select Instalment Type </strong></td>
					<td style="width: 161px; color: black; height: 26px;">
					<select style="width: 160px; font-weight: bold; color: black; background-color: white; text-align: center;" id="pradeep">
						<option selected="selected" id="simple">Monthly Interest </option>
						<option id="quater">Quaterly</option>
						<option id="half">Half Yearly</option>
						<option id="year">Yearly</option>
					</select></td>
				</tr>
				<tr>
					<td style="color: black; font-weight: bold; font-size: 9pt; font-family: Arial; text-align: left;">Amount</td>
					<td style="font-weight: bold; color: black; font-size: 9pt; font-family: Arial; text-align: left;">
					<input type="text" style="font-weight: bold; color: black; text-align: right;" id="Text1">
					</td>
				</tr>
				<tr>
					<td style="color: black; font-weight: bold; font-size: 9pt; font-family: Arial; text-align: left;">Instalment&nbsp; Rs.</td>
					<td style="font-weight: bold; color: black; font-size: 9pt; font-family: Arial; text-align: left;">
					<input type="text" style="font-weight: bold; color: black; text-align: right;" id="Text2">
					</td>
				</tr>
				<tr>
					<td style="color: black; font-weight: bold; font-size: 9pt; font-family: Arial; text-align: left;">InterestRate (%)</td>
					<td style="font-weight: bold; color: black; font-size: 9pt; font-family: Arial; text-align: left;">
					<input type="text" style="font-weight: bold; color: black; text-align: right;" id="Text3">
					</td>
				</tr>
				<tr>
					<td style="color: black; font-weight: bold; font-size: 9pt; font-family: Arial; text-align: left;">
					<input type="button" style="font-weight: bold; color: black; font-size: 10pt; font-family: Arial;" value="Get No.of Instalment" name="noofinstalment" onclick="getinstailment()" id="noofinstalment">
					</td>
				</tr>
				<tr>
					<td style="color: black; font-weight: bold; font-size: 9pt; font-family: Arial; text-align: left;">No. Of Instalment</td>
					<td style="font-weight: bold; color: black; font-size: 9pt; font-family: Arial; text-align: left;">
					<input type="text" style="font-weight: bold; color: black; text-align: right;" id="Text4">
					</td>
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
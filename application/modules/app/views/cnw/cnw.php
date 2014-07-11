<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table width="50%" cellpadding="2" cellspacing="2" style="font-family:Arial;font-size:12px;">
			<tbody>
				<tr style="background-color:Black;color:White;font-size:18px">
					<td colspan="2" align="center">Calculate Net Worth </td>
				</tr>
				<tr>
					<td align="left">Paid Up Share Capital:</td><td>
					<input id="txtpaidupsharecapital" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
					</td>
				</tr>
				<tr>
					<td align="left">Reserves Out of Profit (including securities premium):</td><td>
					<input id="txtresoutofprofit" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
					</td>
				</tr>
				<tr>
					<td align="left">Accumulated Losses:</td><td>
					<input id="txtaccumlosses" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
					</td>
				</tr>
				<tr>
					<td align="left">Deferred Expenditure:</td><td>
					<input id="txtdefexpenditure" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
					</td>
				</tr>
				<tr>
					<td align="left">Miscellaneous Expenses:</td><td>
					<input id="txtmisexpenses" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
					</td>
				</tr>
				<tr id="trNetWorth">
					<td align="left"><span style="font-size:18px;">Net Worth:</span></td><td>
					<input id="txtnetworth" style="text-align:right;" readonly="readonly" type="text">
					</td>
				</tr>
				<tr>
					<td align="center" colspan="2">
					<input id="Submit1" type="submit" onclick="return CalculateNetWorth();" style="background-color:Black;color:White;" value="Submit">
					<input id="" type="reset" value="Reset">
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
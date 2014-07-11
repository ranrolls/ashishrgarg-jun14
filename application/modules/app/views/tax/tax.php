<div class="mainContent">
	<div>
		<h1>Tax Calculator</h1>
	</div>
	<div>
		<table class="akhilTable bor0" width="100%">
			<tbody>
				<tr id="trAssyear">
					<td colspan="2" style="width: 400px;">
					<ul class="nonclickBulletedList marb10">
						<li>
							Assessment Year
						</li>
					</ul></td>
					<td>
					<select name="assyear" onchange="calculateData()" style="width: 140px">
						<option value="-1">Select</option>
						<option value="2015">2015-16</option>
						<option value="2014">2014-15</option>
						<option value="2013">2013-14</option>
						<option value="2012">2012-13</option>
						<option value="2011">2011-12</option>
						<option value="2010">2010-11</option>
						<option value="2009">2009-10</option>
					</select></td>
				</tr>
				<tr id="trTaxPayer">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Tax Payer
						</li>
					</ul></td>
					<td>
					<select name="taxPayer" onchange="calculateData()" style="width: 140px">
						<option value="-1">Select</option>
						<option value="IN">Individual</option>
						<option value="HUF">HUF</option>
						<option value="AOP">AOP/BOI</option>
						<option value="FRM">Firm</option>
						<option value="LLP">LLP</option>
						<option value="COP">Co-operative Society</option>
						<option value="LA">Local Authority</option>
						<option value="AJP">Artificial Juridicial Person</option>
						<option value="DC">Domestic Company</option>
						<option value="FC">Foreign Company</option>
					</select></td>
				</tr>
				<tr id="trResStatus">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Residential Status
						</li>
					</ul></td>
					<td>
					<select name="resStatus" onchange="calculateData()" style="width: 140px">
						<option value="-1">Select</option>
						<option value="RES">Resident</option>
						<option value="NRES">Non-Resident</option>
						<option value="NOR">Not Ordinary Resident</option>
					</select></td>
				</tr>
				<tr id="trAssesseeCategory">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li id="idAssesseeCategory">
							Male / Female / Senior Citizen / Super Senior Citizen
						</li>
					</ul></td>
					<td>
					<select name="assesseeCategory" onchange="calculateData()" style="width: 140px">
						<option value="-1">Select</option>
						<option value="M">Male</option>
						<option value="F">Female</option>
						<option value="SC">Senior Citizen</option>
						<option value="SSC">Super Senior Citizen</option>
					</select></td>
				</tr>
				<tr id="trNetTxblIncome">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Net Taxable Income
						</li>
					</ul></td>
					<td>
					<input name="netTxblIncome" type="text" onkeypress="return onlyNumbers(event)" maxlength="14" onchange="calculateData();" style="text-align: right;">
					</td>
				</tr>
				<tr>
					<td colspan="3">
					<div class="hd">
						<h4 style="text-align: center; font-size: 15px;">Your tax computation</h4>
					</div></td>
				</tr>
				<tr id="trIncTax">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Income Tax
						</li>
					</ul></td>
					<td>
					<input name="incTax" type="text" readonly="true" style="text-align: right;">
					</td>
				</tr>
				<tr id="trSurcharge">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Surcharge
						</li>
					</ul></td>
					<td>
					<input name="surcharge" type="text" readonly="true" style="text-align: right;">
					</td>
				</tr>
				<tr id="trEduCess">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Education Cess
						</li>
					</ul></td>
					<td>
					<input name="eduCess" type="text" readonly="true" style="text-align: right;">
					</td>
				</tr>
				<tr id="trHEduCess">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Secondary and Higher education Cess
						</li>
					</ul></td>
					<td>
					<input name="hEduCess" type="text" readonly="true" style="text-align: right;">
					</td>
				</tr>
				<tr id="trTotTaxLiab">
					<td colspan="2">
					<ul class="nonclickBulletedList marb10">
						<li>
							Total Tax Liability
						</li>
					</ul></td>
					<td>
					<input name="totTaxLiab" type="text" readonly="true" style="text-align: right;">
					</td>
				</tr>
			</tbody>
		</table>
		<p>
			<b>Disclaimer:</b> The tax calculation is shown based on rates as per the relevant Finance Act and based on the input provided by the user.
		</p>
	</div>
</div>
<?php
$fjs = 'apps/' . $app . '.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
?>
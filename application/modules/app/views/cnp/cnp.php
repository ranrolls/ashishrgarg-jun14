<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table style="width: 100%">
			<tbody>
				<tr style="width: 100%;height:98%">
					<td style="width: 100%;height:98%">
					<table cellpadding="0" cellspacing="0" border="0" width="100%">
						<tbody>
							<tr valign="top" style="width: 100%">
								<td valign="top" style="width:98%"><title></title>
								<center>
									<table cellpadding="2" cellspacing="2" style="font-family:Arial;font-size:12px;">
										<tbody>
											<tr style="background-color:Black;color:White;font-size:18px">
												<td colspan="2" align="center">Calculate Net Profits </td>
											</tr>
											<tr>
												<td align="left">Net Profit before Tax:</td><td>
												<input id="Text1" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Loss On Sale of Fixed Assets/ Undertaking (Net):</td><td>
												<input id="Text2" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Provision for Doubtful Debts:</td><td>
												<input id="Text3" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Charity &amp; Donations:</td><td>
												<input id="Text4" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Misc Expenses:</td><td>
												<input id="Text5" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Fixed Assets Written Off:</td><td>
												<input id="Text6" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Amortization of Lease Hold Land Premium:</td><td>
												<input id="Text7" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">News Print Claim Written-off:</td><td>
												<input id="Text8" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Amalgamation Expenses Written Off:</td><td>
												<input id="Text9" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Discount on Commercial Papers:</td><td>
												<input id="Text10" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Any change in carrying amount of an asset or of a liability
												recognised in equity reserves including surplus in profit and loss
												account on measurement of the asset or the liability at fair value:</td><td>
												<input id="Text11" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Any compensation, damages or payments made voluntarily,
												that is to say, otherwise than compensation or damages to be paid in virtue of
												any legal liability including a liability arising from a breach of contract: </td><td>
												<input id="Text12" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Any other expenses, which has been deducted from the profits:</td><td>
												<input id="Text13" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Profit by way of premium on issue of shares:</td><td>
												<input id="Text14" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Profit on sale of forefited shares:</td><td>
												<input id="Text15" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Profit of capital nature including profit from sale of undertaking:</td><td>
												<input id="Text16" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Profit from sale of immovable property /fixed assets of capital nature:</td><td>
												<input id="Text17" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left">Any change in carrying amount of an asset or of a liability recognised in equity reserves including surplus in profit and loss account on measurement of the asset or the liability at fair value:</td><td>
												<input id="Text18" style="text-align:right;" type="text" onkeypress="return validate(event)" maxlength="18">
												</td>
											</tr>
											<tr>
												<td align="left"><span style="font-size:18px;">Net Profit:</span></td><td>
												<input id="txtNetProfits" style="text-align:right;" readonly="readonly" type="text">
												</td>
											</tr>
											<tr>
												<td align="center" colspan="2">
												<input id="Submit1" type="submit" onclick="return CalculateNetProfit();" style="background-color:Black;color:White;" value="submit">
												</td>
											</tr>
											<tr>
												<td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td>
											</tr>
										</tbody>
									</table>
								</center></td>
							</tr>
						</tbody>
					</table></td>
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
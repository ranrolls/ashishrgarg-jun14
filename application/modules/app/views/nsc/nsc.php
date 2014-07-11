<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table width="99%" cellspacing="1" cellpadding="1" border="1">
			<tbody>
				<tr style="font-family:arial; font-size:18px; text-align:center; text-align:center; line-height:30px; font-weight:bold;">
					<td colspan="2">NSC Calculators</td>
				</tr>
				<tr style="font-family:arial; font-size:12px; text-align:center; text-align:center; line-height:30px; font-weight:bold;">
					<td width="50%">National Saving Certificates (VIII Issue)</td>
					<td width="50%">National Saving Certificates (IX Issue)</td>
				</tr>
				<tr valign="top">
					<td>
					<table width="100%" cellspacing="0" cellpadding="0" border="0">
						<tbody>
							<tr valign="top">
								<td width="100%" height="99%" style="padding-top:0px;">
								<table align="center" style="border: thin solid rgb(153, 51, 102); z-index: 100; font-size: 9pt; font-family: Arial; color: black; text-align: center;">
									<tbody>
										<tr>
											<td style="width: 194px; color: black;">Purchase Amount</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text1" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">Period of Purchase</td>
											<td style="width: 194px; color: black;">
											<select style="width: 175px; margin-left: 4px; font-weight: bold; color: black;" id="Select1" onchange="pp()" name="pradeep">
												<option selected="selected" id="cmb1" value="op1">01-03-2001 to 28-02-2002 </option>
												<option id="cmb2" value="op2">01-03-2002 to 28-02-2003</option>
												<option id="cmb3" value="op3">01-03-2003 to 30-11-2011</option>
												<option id="cmb4" value="op4">01-12-2011 to 31-03-2012</option>
												<option id="cmb5" value="op5">01-04-2012 to 31-03-2013</option>
												<option id="cmb6" value="op6">01-04-2013 to 31-03-2014</option>
												<option id="cmb7" value="op7">01-04-2014 to 31-03-2015</option>
											</select></td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">1'st Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" id="Text2" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">2'nd Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" id="Text3" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">3'rd Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" id="Text4" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">4'th Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text5" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">5'th Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text6" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">6'th Year Interest</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text7" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">TOTAL INTEREST</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text8" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">MATURITY AMOUNT</td>
											<td style="width: 194px; color: black;">&nbsp;
											<input type="text" name="text" class="alig" id="Text9" style="width: 168px; text-align: right; font-weight: bold; color: black;">
											</td>
										</tr>
										<tr>
											<td style="width: 194px; color: black;">
											<input type="button" name="button" id="computeVIIIissue" style="margin-left: 10px; font-weight: bold; color: black;" onclick="return calculationVIIIissue();" value="Compute">
											</td>
											<td style="width: 194px; color: black;">&nbsp;</td>
										</tr>
									</tbody>
								</table></td>
							</tr>
						</tbody>
					</table></td>
					<td>
					<table align="center" style="border: thin solid rgb(153, 51, 102); z-index: 100; font-size: 9pt; font-family: Arial; color: black; text-align: center;">
						<tbody>
							<tr>
								<td style="width: 194px; color: black;">Purchase Amount</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt1" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">Period of Purchase</td>
								<td style="width: 194px; color: black;">
								<select name="nscnew" onchange="return reset1();" id="Select2" style="width: 195px; margin-left: 4px; font-weight: bold; color: black;">
									<option selected="selected" value="opt1" id="cmbo1">01-12-2011 to 31-03-2012 </option>
									<option value="opt2" id="cmbo2">01-04-2012 to 31-03-2013 </option>
									<option value="opt3" id="cmbo3">01-04-2013 to 31-03-2014</option>
									<option value="opt4" id="cmbo4">01-04-2014 to 31-03-2015</option>
								</select></td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">1'st Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt2" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">2'nd Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt3" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">3'rd Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt4" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">4'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt5" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">5'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt6" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">6'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt7" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">7'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt10" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">8'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt11" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">9'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt12" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">10'th Year Interest</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt13" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">TOTAL INTEREST</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt8" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">MATURITY AMOUNT</td>
								<td style="width: 194px; color: black;">&nbsp;
								<input type="text" id="txt9" style="width: 195px; text-align: right; font-weight: bold; color: black;">
								</td>
							</tr>
							<tr>
								<td style="width: 194px; color: black;">
								<input type="button" id="computeIXissue" style="margin-left: 10px; font-weight: bold; color: black;" onclick="return calculationIXissue();" value="Compute">
								</td>
								<td style="width: 194px; color: black;">&nbsp;</td>
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
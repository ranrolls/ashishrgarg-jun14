<div class="mainContent">
	<form name="aspnetForm" method="post" action="" id="aspnetForm" style="background-color:">
		<table cellspacing="1" cellpadding="1" border="1">
			<tbody>
				<tr>
					<td colspan="2" style="background-color:Black ;">
					<center>
						<h3 style="color:White;">Tds Calculator</h3>
					</center></td>
				</tr>
				<tr>
					<td align="left">Section</td>
					<td>
					<select id="drp_Section_description" name="Section" onchange="javascript:getrate();">
						<option value="">Select</option>
						<!--<option value="0">192,Salary</option>-->
						<option value="10 5000">193,Interest on Securities </option>
						<!--<option value="0">193,Interest on Securities (Resident)</option>-->
						<option value="10 -">194,Dividend</option>
						<option value="10 10000(In Case of Banks)&amp; Rs.5000(In Case of others) ">194A,Interest other than Interest on Securities</option>
						<option value="30 10000">194B,Winnings from Lottery or Crossword Puzzle</option>
						<option value="30 5000">194BB,Winnings from Horse Races</option>
						<option value="1 30000 Per Contract or Rs 75000 per Annum">194C,Payment to Contractor/Sub Contractor(INDIVIDUAL/HUF)</option>
						<option value="2 30000 Per Contract or Rs 75000 per Annum">194C,Payment to Contractor/Sub Contractor(OTHERS)</option>
						<option value="0 -">194C,Payment to Transporter</option>
						<option value="10 20000">194D,Insurance Commission</option>
						<option value="20 -">194E,Non Resident Sportsman  or Sport Association</option>
						<option value="20 2500">194EE,Payment For National Saving Scheme</option>
						<option value="20 1000">194F,Payment For Repurchase of Units</option>
						<option value="10 1000">194G,Commission on Sale of Lottery Ticket</option>
						<option value="10 5000">194H,Commission</option>
						<option value="10 180000">194I,Rent on Land and Building</option>
						<option value="2 180000">194I,Rent on Machinery</option>
						<option value="1 5000000">194IA,Payment on Transfer of Immovable Property</option>
						<option value="10 30000">194J,Fees for Professional or Technical Services</option>
						<option value="10 -">194J,remuneration or commission paid to director</option>
						<option value="10 200000">194LA,Payment of Compensation for Immovable Property</option>
						<option value="5 -">194LB ,Interest from Infranstructure debt fund</option>
						<option value="5 -">194LC,Interest from specified indian company</option>
						<option value="20 -">195,Payment to Non-Resident ( Long Term Capital Gains)</option>
						<option value="30 -">195,Payment to Non-Resident(Rent)</option>
						<option value="50 -">195,Payment to Non-Resident ( Royality )</option>
						<option value="30 -">195,Payment to Non-Resident ( Winning from Lottery / Horse Races etc.)</option>
						<option value="1 --">206C,Alcoholic liquor for human consumption</option>
						<option value="2.5 --">206C,Timber obtained under a forest lease</option>
						<option value="2.5 --">206C,Timber obtained under any mode other than forest lease</option>
						<option value="2.5 --">206C,Any other forest product not being timber or tendu leave</option>
						<option value="1 --">206C,Scrap</option>
						<option value="2 --">206C,Parking Lot</option>
						<option value="2 --">206C,Toll Plaza</option>
						<option value="2 --">206C,Mining and Quarrying</option>
						<option value="5 --">206C,Tendu leaves</option>
						<option value="1 --">206C,Minerals, being coal or lignite or iron ore&nbsp;</option>
						<option value="1 ---">206C,Bullion or jewellery</option>
					</select></td>
				</tr>
				<tr>
					<td colspan="2">
					<table align="left" id="tr_pan">
						<tbody>
							<tr>
								<td>PAN quoted by deductee</td>
								<td>
								<select id="Drp_Panquotedbydeductee" name="Pan" onchange="javascript:Panquotedbydeductee()">
									<option selected="selected" value="0">Yes</option>
									<option value="1">No</option>
								</select></td>
							</tr>
						</tbody>
					</table></td>
				</tr>
				<tr>
					<td align="left">Rate</td>
					<td>
					<input type="text" id="txt_rate" onkeypress="return DigitOnly(event);">
					</td>
				</tr>
				<tr>
					<td align="left">Amount</td>
					<td>
					<input type="text" id="txt_amount" onkeypress="return DigitOnly(event);" onkeyup="return calc();">
					</td>
				</tr>
				<tr>
					<td align="left">Tax</td>
					<td><label id="Tax" for="Tax"></label></td>
				</tr>
				<tr>
					<td align="center" colspan="2">
					<table align="center" id="tr_payexceeding" style="display:none;">
						<tbody>
							<tr>
								<td align="left"><b>Note:- No TDS is deductible for payments not exceeding Rs.</b></td><td><strong><label for="Amount" id="ExceedAmount"></label></strong></td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table></td>
				</tr>
				<tr>
					<td align="center" colspan="2">
					<table align="center" id="tbl_Bullionorjewellery" style="display:none;">
						<tbody>
							<tr>
								<td align="left"><b>Note:-If sale consideration is paid in cash exceeding Rs 5 lakhs, in case of Jewellery and Rs 2 lakhs in case of Bullion </b></td>
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
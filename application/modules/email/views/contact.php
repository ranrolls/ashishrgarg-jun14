<div class="mainContent">
<?php
	if(validation_errors()){
		echo '<p style="color:red">'.validation_errors().'</p>';
	} 
	echo form_open('email/contact'); 
			$name = array(
			'name'		=>		'name',
			'id'		=>		'name',
			'value'	=> set_value('name')
		);
		$email = array(
			'name'		=>		'email',
			'id'		=>		'email',
			'type'	=>		'email',
			'value'	=> set_value('email')
		);	
		echo '<h5>Name *</h5>'.form_input($name);
		
		echo '<h5>Email *</h5>'.form_input($email);
		
?>



<h5>Phone *</h5>
<input type="tel" name="phone" value="<?php echo set_value('phone'); ?>" size="50" required="true" />

<h5>Enquiry For *</h5>
<select name="enquiry" id="enquiry" required="true">
	<option value="Pvt Ltd Registration">Pvt Ltd Registration</option>
	<option value="Public Ltd Registration">Public Ltd Registration</option>
	<option value="LLP Registration">LLP Registration</option>
	<option value="One Person Company Registration">One Person Company Registration</option>
	<option value="Trademark">Trademark</option>
	<option value="Copyright">Copyright</option>
	<option value="Accounting and Audit">Accounting and Audit</option>
	<option value="Taxation">Taxation</option>
	<option value="PF Registration">PF Registration</option>
	<option value="ESIC Registration">ESIC Registration</option>
	<option value="Drug License">Drug License</option>
	<option value="Food License">Food License</option>
	<option value="Trade/Factory License">Trade/Factory License</option>
	<option value="Shop & Establishment Registration">Shop & Establishment Registration</option>
	<option value="Sole-Proprietorship">Sole-Proprietorship</option>
	<option value="Partnership">Partnership</option>
	<option value="NGO Registration">NGO Registration</option>
	<option value="Other Services">Other Services</option>
</select>    

<h5>Message</h5>
<textarea type="text" name="message" value="<?php echo set_value('message'); ?>" size="250"></textarea>

<div><input type="submit" value="Submit" /></div>

</form>
</div>
<?php
// $fjs = 'apps/' . $app . '.js';
// $footJs = array($fjs);
// echo modules::run('cms/exAppFoot', $footJs);
echo modules::run('cms/exAppFoot');
?>
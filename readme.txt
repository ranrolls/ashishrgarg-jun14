->	import data from given sql file ci-pack-1.sql at root

->	Change in .htaccess at root value for
		RewriteBase /p/ex/ci-hvmc-fa-package/

->	Our current path is http://localhost/p/ex/ci-hvmc-fa-package/
		Your's could be different

->	Now we will install hvmc from here

->	Copy core and third party named folder from extracted hvmc package to
		application folder

->	 Create a new folder called modules under applications, where you will create your HMVC modules for a project.

->	To use Modular Separation only, without HMVC, controllers will extend the CodeIgniter Controller class ie CI_Controller
	To use HMVC functionality, such as Modules::run(), controllers must extend the MX_Controller class.

->	Controllers may be loaded from application/controllers sub-directories.
	Controllers may also be loaded from module/controllers sub-directories.
	Resources may be cross loaded between modules. ie:
		$this->load->model('module/model');

->	Modules::run() is designed for returning view partials, and it will return buffered output (a view) from a controller. The syntax for using modules::run is a URI style segmented string and unlimited variables.
		/** module and controller names are different, you must include the method name also, including 'index' **/
		modules::run('module/controller/method', $params, $...);

		/** module and controller names are the same but the method is not 'index' **/
		modules::run('module/method', $params, $...);

		/** module and controller names are the same and the method is 'index' **/
		modules::run('module', $params, $...);

		/** Parameters are optional, You may pass any number of parameters. **/

->	To call a module controller from within a controller you can use $this->load->module() or Modules::load() and PHP5 method chaining is available for any object loaded by MX.
	$this->load->helper('<module_name>/<helper_name>')

->	Using a Module as a view partial from within a view is as easy as writing:	
		<?php echo Modules::run('module/controller/method', $param, $...); ?>

->	A simple example
		echo Modules::run('nofun/sayhello', $name);
		/* $this->load->model('YOUR_MODULE_FOLDER_NAME/MODEL_NAME');*/
		$this->load->model('acl/acl_model');
		if(!$this->acl_model->user_has_perm($this->session->userdata('user_id'), 'add_role')): ?>
		<div class="well">
			<h4Add Role</h4>
			<p>You do not have permission to view this form</p>
		</div>
		<?php endif; ?>

->	Now we will install flexi auth
		Update the 'base_url' to CodeIgniters root installation directory.
		$config['base_url'] = 'http://localhost/your_codeigniter_directory/';
		$config['index_page'] = '';	
		$config['encryption_key'] = 'YOUR_ENCRYPTION_KEY';
		$config['global_xss_filtering'] = TRUE;
		$config['sess_use_database'] = TRUE;
		$config['security']['static_salt'] = 'change-me!';

		$route['default_controller'] = 'auth_lite/index';

		Optional Setting for Google Captcha
		Once you have obtained your keys, update the flexi auth libraries config file as follows.
		$config['security']['recaptcha_public_key'] = 'ENTER_RECAPTCHA_PUBLIC_KEY_HERE';
		$config['security']['recaptcha_private_key'] = 'ENTER_RECAPTCHA_PRIVATE_KEY_HERE';
->	Update the 'config/database.php' file

->	Installing Library Files
	To install the flexi auth library, copy the 'application' folder from 'library_files' to the root Codeigniter folder. Here we are copying all folder from demo_flexi_auth and pasting it to root directory.

->	Update 'base_url' and 'includes_dir' vars this is because we are using demo library for flexi auth. Although this step is not usuall for plain flexi auth.
		These can be found in the constructor of each controller and look like.
		$this->load->vars('base_url', 'http://localhost/your_codeigniter_directory/');
		$this->load->vars('includes_dir', 'http://localhost/your_codeigniter_directory/includes/');

->	Import SQL database dump provided with demo flexi auth library

->	Our new db is ci-pack-1

->	


->	


->	


->	


->	



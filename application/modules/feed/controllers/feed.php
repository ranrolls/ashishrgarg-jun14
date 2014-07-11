<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Feed extends MX_Controller {

	protected $_items = array();
	protected $_currentItems = array();
	protected $_itemsTitle = array();
	protected $_categories = array();
	protected $_out = '';
	protected $_key = '';

	public function __construct() {
		parent::__construct();
	}

	public function _remap($method) {
		if(method_exists($this, $method)) {
			// redirect(base_url());
			$this -> $method();
			// $this -> listAll();
		}else if($method == '') {
			$this -> listAll();
		} else {
			$this -> processor($method);
		}
	}

	public function index() {
		$this -> listAll();
	}

	protected function prepareView($dt) {
		$tit = $this -> config -> item('site_name') . ' Listing News Channels';
		echo modules::run('cms/exAppHead', $tit);
		echo $dt;
		echo modules::run('cms/exAppFoot');
		exit();
	}

	protected function openOuter() {
		$this -> _out = '<div class="mainContent"><h1>Listing News Channels</h1><div data-role="collapsible-set" data-inset="false">';
	}

	protected function closeOuter() {
		$this -> _out .= '</div><!-- outer closed --></div><!-- main content close -->';
	}

	protected function findItems() {
		$mix = array_keys($this -> _items);
		// print_r($mix);
		foreach($mix as $m) {
			// echo 'the given value for $m is '.$m.'and present key is ' . $this->_key.'<br />';

			$off = strlen($this -> _key);
			if($this -> _key == substr($m, 0, $off)) {
				array_push($this -> _currentItems, $m);
				// echo 'the given value for $m is '.$m.' and present key is ' . $this->_key.'<br />';
			} else {
				// break;
				// echo 'search key is '.$this->_key.'<br />';
				// print_r($this->_currentItems);
			}
		}

	}

	protected function openUl() {
		$this -> _out .= '<ul data-role="listview" data-inset="false">';
	}

	protected function feedLi() {
		foreach($this->_currentItems as $c) {
			$on = strlen($this -> _key) + 1;
			$off = strlen($c);
			$t = substr($c, $on, $off);
			$t = $this -> _itemsTitle[$t];

			$this -> _out .= '<li><a class="news" title="' . $t . '" href="' . base_url('feed/' . $c) . '" >' . $t . '</a></li>';
		}
	}

	protected function closeUl() {
		$this -> _out .= '</ul>';
	}

	protected function feedItems($key) {
		$this -> _key = $key;
		// echo 'input to feedItems is '.$this->_key.'<br />';
		$this -> findItems();
		// echo '<br />printing current items <br />';
		// print_r($this->_currentItems);
		if(count($this -> _currentItems) > 0) {
			$this -> openUl();
			$this -> feedLi();
			$this -> closeUl();
		}
		$this -> _currentItems = array();
	}

	protected function openCategory($key, $value) {
		// $this->_out .= 'The key is '.$key.' and value for this key is '.$value.'<br />';
		$this -> _out .= '<div data-role="collapsible"><h3>' . $value . '</h3>';
		$this -> feedItems($key);
		$this -> _out .= '</div><!-- category close -->';
	}

	protected function generateAll() {
		$this -> openOuter();
		foreach($this -> _categories as $key => $value) {
			$this -> openCategory($key, $value);
		}
		$this -> closeOuter();
		$this -> prepareView($this -> _out);
		$this -> _out = '';
	}

	protected function processTitle() {
		$newTitle = '-';
		$pos = strpos($this -> _key, $newTitle);
		$tLen = strlen($this -> _key);
		$head = $this -> _categories[substr($this -> _key, 0, $pos)];
		$tail = $this -> _itemsTitle[substr($this -> _key, $pos + 1, $tLen)];
		// $this->_key = $newTitle;
		$title = $head . ' - ' . $tail;
		return $title;
	}

	protected function generate($key) {
		$this -> load -> helper('xml');
		$this -> _out = '<div class="mainContent"><h1>' . $this -> processTitle() . '</h1>';

		// $this -> _out .= 'content preparing';
		$this -> _out .= $this -> feed2($this -> _items[$key]);
		$this -> _out .= '</div><!-- mainContent ends -->';
		$this -> prepareView($this -> _out);
		$this -> _out = '';
	}

	protected function feedOut() {
		if($this -> _key !== '') {
			// echo 'incomming key is '.$this->_key;
			$this -> generate($this -> _key);
		} else {
			$this -> generateAll();
		}
	}

	protected function feed1($address) {
		$this -> load -> helper('xml');
		$rss = simplexml_load_file($address);
		$data['st'] = array();
		foreach($rss->channel->item as $item) {
			$title = (string)$item -> title;
			// Title
			$link = (string)$item -> link;
			// Url Link
			$description = (string)$item -> description;
			//Description
			$e = '<div><a href="' . $link . '" target="_blank" title="" >
							' . $title . ' 
							</a>
							<p>' . $description . '</p>  
									<hr>
					</div>';
			array_push($data['st'], $e);
		}
		$this -> load -> view('index', $data);
	}

	protected function feed2($address) {
		// URL location of your feed
		$feedUrl = $address;
		$feedContent = "";
		// Fetch feed from URL
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $feedUrl);
		curl_setopt($curl, CURLOPT_TIMEOUT, 3);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HEADER, false);

		// FeedBurner requires a proper USER-AGENT...
		curl_setopt($curl, CURL_HTTP_VERSION_1_1, true);
		curl_setopt($curl, CURLOPT_ENCODING, "gzip, deflate");
		curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3");

		$feedContent = curl_exec($curl);
		curl_close($curl);

		// Did we get feed content?
		if($feedContent && !empty($feedContent)) {
			$feedXml = @simplexml_load_string($feedContent);
			if($feedXml) {
				$data['st'] = '';
				foreach($feedXml->channel->item as $item) {
					$title = (string)$item -> title;
					$link = (string)$item -> link;
					$description = (string)$item -> description;
					$e = '<div class="feed">
								<a href="' . $link . '" target="_blank" title="' . $title . '">
									<h4>' . $title . '</h4>
								</a>
								<p>' . $description . '</p>
								<hr>
							</div>';
					$data['st'] .= $e;
				}
			}
		}

		return $data['st'];
		// $this -> load -> view('index', $data);
	}

	protected function categories() {
		$this -> _categories = array('ca' => 'Chartered Accountant News India', 'mc' => 'Money Control India', 'ht' => 'Hindustan Times', 'toi' => 'Times of India', 'zee' => 'Zee News India', 'sky' => 'Sky Weather', );
	}

	protected function itemsTitle() {
		$this -> _itemsTitle = array('news' => 'News', 'topnews' => 'Top News', 'budget' => 'Budget News', 'business' => 'Business News', 'mutualfunds' => 'Mutual Funds News', 'personalfinance' => 'Personal Finance News', 'brokeragerecos' => 'Brokerage Recos News', 'buzzingstocks' => 'Buzzing Stocks News', 'economy' => 'Economy News', 'marketreports' => 'Market Reports News', 'internationalmarkets' => 'International Markets News', 'insurancenews' => 'Insurance News', 'currentaffairs' => 'Current Affairs News', 'currency' => 'Currency News', 'directtax' => 'Direct Tax News', 'fromcourt' => 'From Court News', 'vat' => 'Vat News', 'servicetax' => 'Service Tax News', 'auditing' => 'Auditing News', 'market' => 'Market News', 'latestcircular' => 'Latest Circular News', 'generalnews' => 'General News News', 'customandexcise' => 'Custom & Excise News', 'budgetextravaganza' => 'Budget Extravaganza News', 'corporatelaw' => 'Corporate Law News', 'mergersandacquisitions' => 'Mergers & Acquisitions News', 'salestax' => 'Aales Tax News', 'indirecttax' => 'Indirect Tax News', 'forex' => 'Forex News', 'newforms' => 'New Forms News', 'variousactsandrules' => 'Various Acts & Rules News', 'itat-constitutionbenches' => 'ITAT - Constitution Benches News', 'departmentofcompaniesaffairs' => 'Department of Companies Affairs News', 'financebills' => 'Finance Bills News', 'spostsnews' => 'Sposts News', 'sciencetechnologynews' => 'Science Technology News', 'worldnews' => 'World News', 'indianationalnews' => 'India National News', 'southasianews' => 'South Asia News', 'weatherwarning' => 'Weather Warning News', 'globalwarming' => 'Global Warming News', 'airtraffic' => 'Air Traffic News', 'water' => 'Water News', 'weather' => 'Weather News', 'lifestyleandweather' => 'Life Style & Weather News', 'cricket' => 'Cricket News', 'football' => 'Football News', 'tennis' => 'Tennis News', 'fashion' => 'Fashion News', 'sexandrelationships' => 'Sex and Relationships News', 'healthandwellness' => 'Health & Wellness News', 'artandculture' => 'Art & Culture News', 'travel' => 'Travel News', 'books' => 'Books News', 'technology' => 'Technology News', 'apps' => 'Apps News', 'gadgets' => 'Gadgets News', 'auto' => 'Auto News', 'car' => 'Car News', );
	}

	protected function items() {
		$this -> _items = array('toi-news' => 'http://timesofindia.feedsportal.com/c/33039/f/533919/index.rss', 'mc-topnews' => 'http://www.moneycontrol.com/rss/MCtopnews.xml', 'mc-budget' => 'http://www.moneycontrol.com/rss/budget2013.xml', 'mc-business' => 'http://www.moneycontrol.com/rss/business.xml', 'mc-mutualfunds' => 'http://www.moneycontrol.com/rss/mfcolumns.xml', 'mc-personalfinance' => 'http://www.moneycontrol.com/rss/pfcolumns.xml', 'mc-brokeragerecos' => 'http://www.moneycontrol.com/rss/brokeragerecos.xml', 'mc-buzzingstocks' => 'http://www.moneycontrol.com/rss/buzzingstocks.xml', 'mc-economy' => 'http://www.moneycontrol.com/rss/economy.xml', 'mc-marketreports' => 'http://www.moneycontrol.com/rss/marketreports.xml', 'mc-internationalmarkets' => 'http://www.moneycontrol.com/rss/internationalmarkets.xml', 'mc-insurancenews' => 'http://www.moneycontrol.com/rss/insurancenews.xml', 'mc-currentaffairs' => 'http://www.moneycontrol.com/rss/currentaffairs.xml', 'mc-currency' => 'http://www.moneycontrol.com/rss/currency.xml', 'ca-news' => 'http://feeds.feedburner.com/feedburner/WEcF', 'ca-directtax' => 'http://feeds.feedburner.com/cainindia/SOZw', 'ca-fromcourt' => 'http://feeds.feedburner.com/cainindia/zamT', 'ca-vat' => 'http://feeds.feedburner.com/VatvalueAddedTax', 'ca-servicetax' => 'http://feeds.feedburner.com/cainindia/ovfq', 'ca-auditing' => 'http://feeds.feedburner.com/cainindia/MIgx', 'ca-market' => 'http://feeds.feedburner.com/cainindia/Pxru', 'ca-latestcircular' => 'http://feeds.feedburner.com/LatestCirculars', 'ca-generalnews' => 'http://feeds.feedburner.com/cainindia/FWuN', 'ca-customandexcise' => 'http://feeds.feedburner.com/cainindia/GXJT', 'ca-budgetextravaganza' => 'http://feeds.feedburner.com/BudgetExtravaganza', 'ca-corporatelaw' => 'http://feeds.feedburner.com/cainindia/vDOQ', 'ca-mergersandacquisitions' => 'http://feeds.feedburner.com/cainindia/DehU', 'ca-salestax' => 'http://feeds.feedburner.com/cainindia/SNNq', 'ca-indirecttax' => 'http://feeds.feedburner.com/cainindia/AneF', 'ca-forex' => 'http://feeds.feedburner.com/cainindia/XUKO', 'ca-newforms' => 'http://feeds.feedburner.com/cainindia/XCIx', 'ca-variousactsandrules' => 'http://feeds.feedburner.com/VariousActsRules', 'ca-itat-constitutionbenches' => 'http://feeds.feedburner.com/cainindia/LOTW', 'ca-departmentofcompaniesaffairs' => 'http://feeds.feedburner.com/DepartmentOfCompaniesAffairs', 'ca-financebills' => 'http://feeds.feedburner.com/cainindia/DCCU', 'zee-spostsnews' => 'http://zeenews.india.com/rss/sports-news.xml', 'zee-sciencetechnologynews' => 'http://zeenews.india.com/rss/science-technology-news.xml', 'zee-worldnews' => 'http://zeenews.india.com/rss/world-news.xml', 'zee-indianationalnews' => 'http://zeenews.india.com/rss/india-national-news.xml', 'zee-southasianews' => 'http://zeenews.india.com/rss/south-asia-news.xml', 'sky-weatherwarning' => 'http://www.skymetweather.com/content/stories/weather-warning/feed/', 'sky-globalwarming' => 'http://www.skymetweather.com/content/stories/global-warming/feed/', 'sky-airtraffic' => 'http://www.skymetweather.com/content/stories/air-traffic/feed/', 'sky-water' => 'http://www.skymetweather.com/content/stories/water/feed/', 'sky-weather' => 'http://www.skymetweather.com/content/stories/weather-and-economy/feed/', 'sky-lifestyleandweather' => 'http://www.skymetweather.com/content/stories/lifestyle-and-weather/feed/', 'ht-cricket' => 'http://feeds.hindustantimes.com/HT-cricket', 'ht-football' => 'http://feeds.hindustantimes.com/HT-Football', 'ht-tennis' => 'http://feeds.hindustantimes.com/HT-Tennis', 'ht-fashion' => 'http://feeds.hindustantimes.com/HT-Fashion', 'ht-sexandrelationships' => 'http://feeds.hindustantimes.com/HT-Sexandrelationships', 'ht-healthandwellness' => 'http://feeds.hindustantimes.com/HT-Wellness', 'ht-artandculture' => 'http://feeds.hindustantimes.com/HT-Wellness', 'ht-travel' => 'http://feeds.hindustantimes.com/HT-Travel', 'ht-books' => 'http://feeds.hindustantimes.com/HT-Books', 'ht-technology' => 'http://feeds.hindustantimes.com/HT-Entertainment', 'ht-apps' => 'http://feeds.hindustantimes.com/HT-Apps-updates', 'ht-gadgets' => 'http://feeds.hindustantimes.com/HT-Gadgets-updates', 'ht-auto' => 'http://feeds.hindustantimes.com/HT-auto', 'ht-car' => 'http://feeds.hindustantimes.com/HTAutoSection-CarReviews');
	}

	protected function init() {
		$this -> categories();
		$this -> itemsTitle();
		$this -> items();
	}

	protected function processor($in) {
		// echo 'input for processor function is ',$in;
		$this -> init();
		$this -> _key = $in;
		$this -> feedOut();
	}

	protected function listAll() {
		$this -> init();
		$this -> feedOut();
	}

	public function sample($in) {
		$this -> init();
		$this -> _key = $in;
		$this -> load -> helper('xml');
		$this -> processTitle();
		$this -> _out = $this -> feed2($this -> _items[$in]);
		return $this -> _out;
	}

	
	public function feedE1() {
		$this->load->helper('simple_html_dom');
		$raw = file_get_html('http://www.icai.org/post.html?post_id=9428');
		$out = array();
		foreach($raw->find('div#cpost li') as $element){
			foreach($element->find('a') as $a){
				$in = array(
					'href'	=>		$a->href,
					'tag'		=>		$a->innertext,
				);
		  		array_push($out,$in);
			}
		}
		print("<pre>".print_r($out,true)."</pre>");
	}
}

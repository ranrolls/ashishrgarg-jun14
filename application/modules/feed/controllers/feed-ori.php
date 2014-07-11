<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Feed extends MX_Controller{
	public function __construct(){
		parent::__construct();
	}
	public function index(){
		$address = array(
			'toi-news'				=>			'http://timesofindia.feedsportal.com/c/33039/f/533919/index.rss',
			'mc-topnews'			=>			'http://www.moneycontrol.com/rss/MCtopnews.xml',
			'mc-budget'				=>			'http://www.moneycontrol.com/rss/budget2013.xml',
			'mc-business'			=>			'http://www.moneycontrol.com/rss/business.xml',
			'mc-mutualfunds'		=>			'http://www.moneycontrol.com/rss/mfcolumns.xml',
			'mc-personalfinance'	=>			'http://www.moneycontrol.com/rss/pfcolumns.xml',
			'mc-brokeragerecos'	=>			'http://www.moneycontrol.com/rss/brokeragerecos.xml',
			'mc-buzzingstocks'	=>			'http://www.moneycontrol.com/rss/buzzingstocks.xml',
			'mc-economy'			=>			'http://www.moneycontrol.com/rss/economy.xml',
			'mc-marketreports'	=>			'http://www.moneycontrol.com/rss/marketreports.xml',
			'mc-internationalmarkets'=>	'http://www.moneycontrol.com/rss/internationalmarkets.xml',
			'mc-insurancenews'		=>			'http://www.moneycontrol.com/rss/insurancenews.xml',
			'mc-currentaffairs'		=>			'http://www.moneycontrol.com/rss/currentaffairs.xml',
			'mc-currency'				=>			'http://www.moneycontrol.com/rss/currency.xml',
			'ca-news'					=>			'http://feeds.feedburner.com/feedburner/WEcF',
			'ca-directtax'				=>			'http://feeds.feedburner.com/cainindia/SOZw',
			'ca-fromcourt'				=>			'http://feeds.feedburner.com/cainindia/zamT',
			'ca-vat'						=>			'http://feeds.feedburner.com/VatvalueAddedTax',
			'ca-servicetax'				=>			'http://feeds.feedburner.com/cainindia/ovfq',
			'ca-auditing'					=>			'http://feeds.feedburner.com/cainindia/MIgx',
			'ca-market'						=>			'http://feeds.feedburner.com/cainindia/Pxru',
			'ca-latestcircular'			=>			'http://feeds.feedburner.com/LatestCirculars',
			'ca-generalnews'				=>			'http://feeds.feedburner.com/cainindia/FWuN',
			'ca-custom&excise'			=>			'http://feeds.feedburner.com/cainindia/GXJT',
			'ca-budgetextravaganza'		=>			'http://feeds.feedburner.com/BudgetExtravaganza',
			'ca-corporatelaw'				=>			'http://feeds.feedburner.com/cainindia/vDOQ',
			'ca-mergers&acquisitions'	=>			'http://feeds.feedburner.com/cainindia/DehU',
			'ca-salestax'					=>			'http://feeds.feedburner.com/cainindia/SNNq',
			'ca-indirecttax'				=>			'http://feeds.feedburner.com/cainindia/AneF',
			'ca-forex'						=>			'http://feeds.feedburner.com/cainindia/XUKO',
			'ca-newforms'					=>			'http://feeds.feedburner.com/cainindia/XCIx',
			'ca-variousacts&rules'		=>			'http://feeds.feedburner.com/VariousActsRules',
			'ca-itat-constitutionbenches'		=>			'http://feeds.feedburner.com/cainindia/LOTW',
			'ca-departmentofcompaniesaffairs'=>			'http://feeds.feedburner.com/DepartmentOfCompaniesAffairs',
			'ca-financebills'						=>			'http://feeds.feedburner.com/cainindia/DCCU',
			'zee-spostsnews'						=>			'http://zeenews.india.com/rss/sports-news.xml',
			'zee-sciencetechnologynews'		=>			'http://zeenews.india.com/rss/science-technology-news.xml',
			'zee-worldnews'				=>			'http://zeenews.india.com/rss/world-news.xml',
			'zee-indianationalnews'		=>			'http://zeenews.india.com/rss/india-national-news.xml',
			'zee-southasianews'			=>			'http://zeenews.india.com/rss/south-asia-news.xml',
			'sky-weatherwarning'			=>			'http://www.skymetweather.com/content/stories/weather-warning/feed/',
			'sky-globalwarming'			=>			'http://www.skymetweather.com/content/stories/global-warming/feed/',
			'sky-airtraffic'				=>			'http://www.skymetweather.com/content/stories/air-traffic/feed/',
			'sky-water'						=>			'http://www.skymetweather.com/content/stories/water/feed/',
			'sky-weather'					=>			'http://www.skymetweather.com/content/stories/weather-and-economy/feed/',
			'sky-lifestyle&weather'		=>			'http://www.skymetweather.com/content/stories/lifestyle-and-weather/feed/',
			'ht-cricket'					=>			'http://feeds.hindustantimes.com/HT-cricket',
			'ht-football'					=>			'http://feeds.hindustantimes.com/HT-Football',
			'ht-tennis'						=>			'http://feeds.hindustantimes.com/HT-Tennis',
			'ht-fashion'					=>			'http://feeds.hindustantimes.com/HT-Fashion',
			'ht-sexandrelationships'	=>			'http://feeds.hindustantimes.com/HT-Sexandrelationships',
			'ht-health&wellness'			=>			'http://feeds.hindustantimes.com/HT-Wellness',
			'ht-art&culture'				=>			'http://feeds.hindustantimes.com/HT-Wellness',
			'ht-travel'						=>			'http://feeds.hindustantimes.com/HT-Travel',
			'ht-books'						=>			'http://feeds.hindustantimes.com/HT-Books',
			'ht-technology'				=>			'http://feeds.hindustantimes.com/HT-Entertainment',
			'ht-apps'						=>			'http://feeds.hindustantimes.com/HT-Apps-updates',
			'ht-gadgets'					=>			'http://feeds.hindustantimes.com/HT-Gadgets-updates',
			'ht-auto'						=>			'http://feeds.hindustantimes.com/HT-auto',
			'ht-car'							=>			'http://feeds.hindustantimes.com/HTAutoSection-CarReviews'
		);
		// $this->feed1($address['toi-news']);
		$this->load->helper('xml');
		$this->feed2($address['ht-art&culture']);
		// $this->feed2($address['ca-news']);
	}
	
	public function feed1($address){
		$this->load->helper('xml');
		$rss = simplexml_load_file($address);
      $data['st'] = array();
	   foreach ($rss->channel->item as $item) {
			$title = (string) $item->title; // Title
			$link   = (string) $item->link; // Url Link
			$description = (string) $item->description; //Description
			$e = '<div><a href="'.$link.'" target="_blank" title="" >
							'.$title.' 
							</a>
							<p>'.$description.'</p>  
									<hr>
					</div>';
			array_push($data['st'],$e);
		}
		$this->load->view('index',$data);
	}
	public function feed2($address){
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
		if($feedContent && !empty($feedContent)){
		  $feedXml = @simplexml_load_string($feedContent);
		  if($feedXml){
				$data['st'] = '';
			   foreach ($feedXml->channel->item as $item) {
					$title = (string) $item->title;
					$link   = (string) $item->link;
					$description = (string) $item->description;
					$e = '<div class="feed">
								<a href="'.$link.'" target="_blank" title="'.$title.'">
									<h4>'.$title.'</h4>
								</a>
								<p>'.$description.'</p>
								<hr>
							</div>';
					$data['st'] .= $e;
				}
		  }
		} 	
		$this->load->view('index',$data);
	}
}

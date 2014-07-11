
function getNumber(value){
	if (value == null || isNaN(value) || value=='') {
		return '0';
	}else{
		return value;
	}	
}

function calculateData(){
	try{
		
	var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
	var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
	var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
	var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
	var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
	var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
	var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
	var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
	var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
	var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


		setView();
		incTax.value = parseInt('0' ,10);
		surcharge.value = parseInt('0' ,10);
		eduCess.value = parseInt('0' ,10);
		hEduCess.value = parseInt('0' ,10);
		totTaxLiab.value = parseInt('0' ,10);
		
		netTxblIncome.value = getNumber(netTxblIncome.value);
		incTax.value = getNumber(incTax.value);
		surcharge.value = getNumber(surcharge.value);
		eduCess.value = getNumber(eduCess.value);
		hEduCess.value = getNumber(hEduCess.value);
		totTaxLiab.value = getNumber(totTaxLiab.value);
		
		
		if(assyear.value=='2007'){
			calculateTax_2007();
		}else if(assyear.value=='2008'){
			calculateTax_2008();
		}else if(assyear.value=='2009'){
			calculateTax_2009();
		}else if(assyear.value=='2010'){
			calculateTax_2010();
		}else if(assyear.value=='2011'){
			calculateTax_2011();
		}else if(assyear.value=='2012'){
			calculateTax_2012();
		}else if(assyear.value=='2013'){
			calculateTax_2013();
		}else if(assyear.value=='2014'){
			
			calculateTax_2014();
		}else if(assyear.value=='2015'){
			
			calculateTax_2015();
		}
	}catch(e){alert(e.stack);}
}

function setView(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');
	
	if(taxPayer.value !='IN' && taxPayer.value !='-1'){
		trResStatus.style.display ='none';
		trAssesseeCategory.style.display ='none';
	}else if(taxPayer.value=='IN' && resStatus.value=='NRES' && assyear.value!='-1' ){
		trResStatus.style.display ='';
		trAssesseeCategory.style.display ='none';
	}else {
		trResStatus.style.display='';
		trAssesseeCategory.style.display='';
	}
	
	
	if((assyear.value != '2012' && assyear.value != '2013' && assyear.value != '2014' && assyear.value != '2015') && assesseeCategory.options.length ==5 ){
		assesseeCategory.removeChild(assesseeCategory.options[4]);
		document.getElementById('idAssesseeCategory').innerHTML = 'Male / Female / Senior Citizen'; 
	}else if ((assyear.value == '2012' || assyear.value == '2013' || assyear.value == '2014' || assyear.value == '2015') &&  assesseeCategory.options.length ==4){
		assesseeCategory.options[1] = new Option ("Male", "M") ;
		assesseeCategory.options[2] = new Option ("Female", "M") ;
		assesseeCategory.options[3] = new Option ("Senior Citizen", "SC") ;
		assesseeCategory.options[4] = new Option ("Super Senior Citizen", "SSC") ;
		document.getElementById('idAssesseeCategory').innerHTML = 'Male / Female / Senior Citizen / Super Senior Citizen';	
	
	}
	
	if((assyear.value == '2010' || assyear.value == '2011' ||assyear.value == '2012' || assyear.value == '2013'|| assyear.value == '2014' || assyear.value == '2015') && taxPayer.options.length==10){
		taxPayer.options[5] = new Option("LLP", "LLP");
		taxPayer.options[6] = new Option("Co-operative Society", "COP");
		taxPayer.options[7] = new Option("Local Authority", "LA");
		taxPayer.options[8] = new Option("Artificial Juridicial Person", "AJP");
		taxPayer.options[9] = new Option("Domestic Company", "DC");
		taxPayer.options[10] = new Option("Foreign Company", "FC");
	}else if((assyear.value == '2007' || assyear.value == '2008' ||assyear.value == '2009') && taxPayer.options.length==11){
		taxPayer.removeChild(taxPayer.options[5]);
	}
	
	if( ((trAssyear.style.display=='' && assyear.value!=-1) || (trAssyear.style.display=='none') ) &&
		((trTaxPayer.style.display=='' && taxPayer.value!=-1) || (trTaxPayer.style.display=='none') ) &&
		((trResStatus.style.display=='' && resStatus.value!=-1) || (trResStatus.style.display=='none') ) &&
		((trAssesseeCategory.style.display=='' && assesseeCategory.value!=-1) || (trAssesseeCategory.style.display=='none') )) {
		netTxblIncome.readOnly=false;	
	}else{
		netTxblIncome.value=parseInt('0',10);
		netTxblIncome.readOnly=true;
	}
}

function calculateTax_2007(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('135000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('135001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('150000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('135000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('150001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('150000',10) )* parseFloat('0.2')) + parseInt('1500',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('21500',10));
		}
		
		// for surcharge		
		var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 21500);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('185000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('185001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('185000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('13000',10));
		}
		
		// for surcharge		
		var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 13000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if( (taxPayer.value=='IN') || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('100000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('100001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('150000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('100000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('150001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('150000',10) )* parseFloat('0.2')) + parseInt('5000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('25000',10));
		}
		
		// for surcharge		
		var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 25000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		if(taxPayer.value=='AJP'){
			surcharge.value = incTax.value * 0.1 ; 
			surcharge.value  = Math.round(surcharge.value);
		}
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = 0;
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='FRM' || taxPayer.value=='DC'){
			surcharge.value = incTax.value  * 0.1 ; 
			surcharge.value  = Math.round(surcharge.value);
		}
		
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
		surcharge.value = incTax.value  * 0.025 ; 
		surcharge.value  = Math.round(surcharge.value);
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2008(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('145000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('145001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('150000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('145000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('150001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('150000',10) )* parseFloat('0.2')) + parseInt('500',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('20500',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 20500);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('195000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('195001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('195000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('11000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 11000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}else if( (taxPayer.value=='IN') || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('110000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('110001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('150000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('110000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('150001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('150000',10) )* parseFloat('0.2')) + parseInt('4000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )* parseFloat('0.3')) + parseInt('24000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 250000)  * 0.3 + 24000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		if(taxPayer.value=='AJP'){
			surcharge.value = incTax.value  * 0.1 ; 
			surcharge.value  = Math.round(surcharge.value);
		}
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='FRM' || taxPayer.value=='DC'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		}
		
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2009(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('180000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('180001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('180000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('12000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('52000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 500000)  * 0.3 + 52000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}

	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('225000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('225001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('225000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('7500',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('47500',10));
		}
		
		// for surcharge
		var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 500000)  * 0.3 + 47500);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}else if( (taxPayer.value=='IN' ) || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('150000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('150001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('150000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('15000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('55000',10));
		}
		
		// for surcharge
		if(taxPayer.value=='IN' || taxPayer.value=='HUF' || taxPayer.value=='AOP'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((1000000 - 500000)  * 0.3 + 55000);

			if( rndOffNrsTen(netTxblIncome.value) > 1000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 1000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}else if(taxPayer.value=='AJP'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			
			surcharge.value = taxOnTotInc  * 0.1;
			surcharge.value = Math.round(surcharge.value);
		}
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = 0;
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='FRM' || taxPayer.value=='DC'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}else if(taxPayer.value=='LA'){
			surcharge.value = parseInt('0',10);
			
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.025 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2010(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('190000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('190001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('190000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('11000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('51000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('240000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('240001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('240000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('6000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('46000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if( (taxPayer.value=='IN')  || taxPayer.value=='TRST' || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('160000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('160001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('300000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('160000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('300001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('300000',10) )* parseFloat('0.2')) + parseInt('14000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.3')) + parseInt('54000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		
		
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='DC'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.025 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	calcEduCessTaxCalc();
}

function calculateTax_2011(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('190000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('190001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('190000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('31000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('91000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('240000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('240001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('240000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('26000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('86000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if( (taxPayer.value=='IN') || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('160000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('160001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('160000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('34000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('94000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.075 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.025 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2012(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='F' && (resStatus.value=='RES' || resStatus.value=='NOR') ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('190000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('190001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('190000',10) )  * parseFloat('0.1'));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('31000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('91000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('25000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('85000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SSC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('60000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if( (taxPayer.value=='IN' ) || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('180000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('180001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('180000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('800000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('32000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('800001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('800000',10) )* parseFloat('0.3')) + parseInt('92000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='DC'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.05 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.02 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2013(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('25000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('125000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SSC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('100000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if( (taxPayer.value=='IN') || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('200000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('200001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('200000',10) )  * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('30000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('130000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		//for surcharge
		surcharge.value = parseInt('0' ,10);
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		// for surcharge
		if(taxPayer.value=='DC'){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.05 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.4;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.02 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}
	
	calcEduCessTaxCalc();
}

function calculateTax_2014(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )  * parseFloat('0.1')) ;
			if(parseInt(incTax.value,10) >= parseInt('2000',10)){
				incTax.value = eval( parseInt(incTax.value,10) - parseInt('2000',10));
			}else{
				incTax.value = parseInt('0',10);
			}
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('25000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('125000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 125000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SSC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('100000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 100000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if( taxPayer.value=='IN' || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('200000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('200001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('200000',10))  * parseFloat('0.1')) ;
			
			if(taxPayer.value=='IN' && (resStatus.value=='RES' || resStatus.value=='NOR') && (parseInt(incTax.value,10) >= parseInt('2000',10))){
				incTax.value = eval( parseInt(incTax.value,10) - parseInt('2000',10) );
			}else if(taxPayer.value=='IN' && (resStatus.value=='RES' || resStatus.value=='NOR') && (parseInt(incTax.value,10) < parseInt('2000',10))){
				incTax.value = parseInt('0',10);
			}else if(taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP'){
				incTax.value = parseInt(incTax.value,10);
			}
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('30000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('130000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 130000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 20000)  * 0.3 + 3000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='DC'){
			
			var taxOnTotInc =  parseInt(incTax.value,10);
			
			if(rndOffNrsTen(netTxblIncome.value) > 10000000 && rndOffNrsTen(netTxblIncome.value) <= 100000000){
				var tempSurcharge = taxOnTotInc * 0.05;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				
				if ((taxOnTotInc + tempSurcharge) > 3000000 + extraInc){
					marginalrelief = (taxOnTotInc + tempSurcharge) - (3000000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				} else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			} else if (rndOffNrsTen(netTxblIncome.value) > 100000000) {
				var tempSurcharge = taxOnTotInc * 0.1;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 100000000;
				
				if ((taxOnTotInc + tempSurcharge) > 31500000 + extraInc) {
					marginalrelief = (taxOnTotInc + tempSurcharge) - (31500000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				}
				else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			}
		
		}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' ){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3 ;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		
			var taxOnTotInc =  parseInt(incTax.value,10);
			
			if(rndOffNrsTen(netTxblIncome.value) > 10000000 && rndOffNrsTen(netTxblIncome.value) <= 100000000){
				var tempSurcharge = taxOnTotInc * 0.02;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				
				if ((taxOnTotInc + tempSurcharge) > 4000000 + extraInc){
					marginalrelief = (taxOnTotInc + tempSurcharge) - (4000000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				} else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			} else if (rndOffNrsTen(netTxblIncome.value) > 100000000) {
				var tempSurcharge = taxOnTotInc * 0.05;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 100000000;
				
				if ((taxOnTotInc + tempSurcharge) > 40800000 + extraInc) {
					marginalrelief = (taxOnTotInc + tempSurcharge) - (40800000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				}
				else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			}
			
		}
	
	calcEduCessTaxCalc();
}

function calculateTax_2015(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP
var resStatus 			= document.getElementsByName('resStatus')[0];				var trResStatus 		= document.getElementById('trResStatus'); //RES , NRES , NOR
var assesseeCategory 	= document.getElementsByName('assesseeCategory')[0];		var trAssesseeCategory  = document.getElementById('trAssesseeCategory'); //M , F , SC , SSC
var netTxblIncome 		= document.getElementsByName('netTxblIncome')[0];			var trNetTxblIncome 	= document.getElementById('trNetTxblIncome');
var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');


	if(taxPayer.value=='IN' && assesseeCategory.value=='SC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('250000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('250001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('250000',10) )  * parseFloat('0.1')) ;
			if(parseInt(incTax.value,10) >= parseInt('2000',10)){
				incTax.value = eval( parseInt(incTax.value,10) - parseInt('2000',10));
			}else{
				incTax.value = parseInt('0',10);
			}
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('25000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('125000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 125000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
		
	}else if(taxPayer.value=='IN' && assesseeCategory.value=='SSC' && (resStatus.value=='RES' || resStatus.value=='NOR')){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval( eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )  * parseFloat('0.2')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('100000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 100000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if( taxPayer.value=='IN' || taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP' ){
		
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('200000',10)){
			incTax.value = parseInt('0',10);
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('200001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('500000',10)){
			incTax.value = eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('200000',10))  * parseFloat('0.1')) ;
			
			if(taxPayer.value=='IN' && (resStatus.value=='RES' || resStatus.value=='NOR') && (parseInt(incTax.value,10) >= parseInt('2000',10))){
				incTax.value = eval( parseInt(incTax.value,10) - parseInt('2000',10) );
			}else if(taxPayer.value=='IN' && (resStatus.value=='RES' || resStatus.value=='NOR') && (parseInt(incTax.value,10) < parseInt('2000',10))){
				incTax.value = parseInt('0',10);
			}else if(taxPayer.value=='HUF' || taxPayer.value=='AOP' || taxPayer.value=='AJP'){
				incTax.value = parseInt(incTax.value,10);
			}
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('500001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('1000000',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('500000',10) )* parseFloat('0.2')) + parseInt('30000',10));
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('1000001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('1000000',10) )* parseFloat('0.3')) + parseInt('130000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 1000000)  * 0.3 + 130000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
	}else if(taxPayer.value=='COP'){
		if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('0',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('10000',10)){
			incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.1')) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('10001',10) && parseInt(rndOffNrsTen(netTxblIncome.value),10) <= parseInt('20000',10)){
			incTax.value = eval( eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('10000',10) )  * parseFloat('0.2'))  + parseInt('1000',10)) ;
		}else if(parseInt(rndOffNrsTen(netTxblIncome.value),10) >= parseInt('20001',10)){
			incTax.value = eval(eval(eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) - parseInt('20000',10) )* parseFloat('0.3')) + parseInt('3000',10));
		}
		
		// for surcharge
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = ((10000000 - 20000)  * 0.3 + 3000);

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		
	}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' || taxPayer.value=='DC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.3'));
		
		// for surcharge
		if(taxPayer.value=='DC'){
			
			var taxOnTotInc =  parseInt(incTax.value,10);
			
			if(rndOffNrsTen(netTxblIncome.value) > 10000000 && rndOffNrsTen(netTxblIncome.value) <= 100000000){
				var tempSurcharge = taxOnTotInc * 0.05;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				
				if ((taxOnTotInc + tempSurcharge) > 3000000 + extraInc){
					marginalrelief = (taxOnTotInc + tempSurcharge) - (3000000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				} else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			} else if (rndOffNrsTen(netTxblIncome.value) > 100000000) {
				var tempSurcharge = taxOnTotInc * 0.1;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 100000000;
				
				if ((taxOnTotInc + tempSurcharge) > 31500000 + extraInc) {
					marginalrelief = (taxOnTotInc + tempSurcharge) - (31500000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				}
				else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			}
		
		}else if(taxPayer.value=='FRM' || taxPayer.value=='LLP' || taxPayer.value=='LA' ){
			var taxOnTotInc =  parseInt(incTax.value,10);
			var taxOnCutOffInc = 10000000  * 0.3 ;

			if( rndOffNrsTen(netTxblIncome.value) > 10000000 ){
				var tempSurcharge = taxOnTotInc  * 0.1 ;
				
				//check if eligible for marginal relief
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				if( (taxOnTotInc + tempSurcharge ) > (taxOnCutOffInc + extraInc)){
					var marginalRelief = taxOnTotInc + tempSurcharge - (taxOnCutOffInc + extraInc );
					surcharge.value = tempSurcharge - marginalRelief;
					surcharge.value  = Math.round(surcharge.value);
				}else {
					surcharge.value = tempSurcharge;
					surcharge.value  = Math.round(surcharge.value);
				}
			}
		}
	}else if(taxPayer.value=='FC'){
		incTax.value = eval(parseInt(rndOffNrsTen(netTxblIncome.value),10) * parseFloat('0.4'));
		
			var taxOnTotInc =  parseInt(incTax.value,10);
			
			if(rndOffNrsTen(netTxblIncome.value) > 10000000 && rndOffNrsTen(netTxblIncome.value) <= 100000000){
				var tempSurcharge = taxOnTotInc * 0.02;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 10000000;
				
				if ((taxOnTotInc + tempSurcharge) > 4000000 + extraInc){
					marginalrelief = (taxOnTotInc + tempSurcharge) - (4000000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				} else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			} else if (rndOffNrsTen(netTxblIncome.value) > 100000000) {
				var tempSurcharge = taxOnTotInc * 0.05;
				var extraInc = rndOffNrsTen(netTxblIncome.value) - 100000000;
				
				if ((taxOnTotInc + tempSurcharge) > 40800000 + extraInc) {
					marginalrelief = (taxOnTotInc + tempSurcharge) - (40800000 + extraInc);
					surcharge.value = tempSurcharge - marginalrelief;
				}
				else {
					surcharge.value = tempSurcharge;
				}
				surcharge.value = Math.round(surcharge.value, 0);
			}
			
		}
	
	calcEduCessTaxCalc();
}
function calcEduCessTaxCalc(){
var assyear 			= document.getElementsByName('assyear')[0];      			var trAssyear 			= document.getElementById('trAssyear');  //2007 , 2008                       
var taxPayer 			= document.getElementsByName('taxPayer')[0];				var trTaxPayer 			= document.getElementById('trTaxPayer'); //IN,TRST,HUF,AOP,DC,FC,FRM,LLP,LA,AJP,COP

var incTax 				= document.getElementsByName('incTax')[0];					var trIncTax 			= document.getElementById('trIncTax');
var surcharge 			= document.getElementsByName('surcharge')[0];				var trSurcharge 		= document.getElementById('trSurcharge');
var eduCess 			= document.getElementsByName('eduCess')[0];					var trEduCess 			= document.getElementById('trEduCess');
var hEduCess 			= document.getElementsByName('hEduCess')[0];				var trHEduCess			= document.getElementById('trHEduCess');
var totTaxLiab 			= document.getElementsByName('totTaxLiab')[0];				var trTotTaxLiab 		= document.getElementById('trTotTaxLiab');

	eduCess.value = eval( eval(parseInt(incTax.value, 10) + parseInt(surcharge.value, 10)) * parseFloat('0.02')); eduCess.value = Math.round(eduCess.value);
	hEduCess.value = eval( eval(parseInt(incTax.value, 10) + parseInt(surcharge.value, 10)) * parseFloat('0.01')); hEduCess.value = Math.round(hEduCess.value);
	
	totTaxLiab.value = eval(parseInt(eduCess.value, 10) + parseInt(hEduCess.value, 10) + parseInt(incTax.value, 10) + parseInt(surcharge.value, 10) ) ;
}

function rndOffNrsTen(newVar){
		
	if(  parseInt(newVar.charAt(newVar.length-1),10) >= parseInt('5',10)){
		newVar = eval(Math.floor(eval(parseInt(newVar,10) / parseInt('10',10))) * parseInt('10',10));
		newVar = eval(parseInt(newVar,10) + parseInt('10',10));
		
		return newVar;
	}else{
		newVar = eval(Math.floor(eval(parseInt(newVar,10) / parseInt('10',10))) * parseInt('10',10));
		
		return newVar;
	}
	
}
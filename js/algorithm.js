var print = console.log;

var MINS = {'AGE_CAT_0-4': 0.046732588778074007,
 'AGE_CAT_10-14': 0.048940832428918002,
 'AGE_CAT_15-19': 0.056454971181645004,
 'AGE_CAT_20-24': 0.068300679381341003,
 'AGE_CAT_25-29': 0.066994412122922009,
 'AGE_CAT_30-34': 0.063851557967037009,
 'AGE_CAT_35-39': 0.062412771095673003,
 'AGE_CAT_40-44': 0.063835095165549999,
 'AGE_CAT_45-49': 0.061223946725919007,
 'AGE_CAT_5-9': 0.048128781693154002,
 'AGE_CAT_50-54': 0.068322278917221008,
 'AGE_CAT_55-59': 0.062584404957523002,
 'AGE_CAT_60-64': 0.048416139376607006,
 'AGE_CAT_65-69': 0.035442706833835005,
 'AGE_CAT_70-74': 0.023005272545159001,
 'AGE_CAT_75-79': 0.016957164924672002,
 'AGE_CAT_80-84': 0.013060869923744001,
 'AGE_CAT_85-89': 0.0083093946845180008,
 'AGE_CAT_90+': 0.0045254176201250003,
 'BUSINESSES': 0,
 'CRIME': 0.47139999999999904,
 'OUTDOOR': 0.66000000000000003,
 'PARKS': 0.84999999999999909,
 'POPULATION': 260600,
 'TRANSIT_SCORE': 0.0,
 'UNEMPLOYMENT': 0,
 'UNEMPL_15+': 0.040000000000000001,
 'UNEMPL_15-24': 0.068000000000000005,
 'UNIVERSITY': 0.14285714285714202}

// string of data we have
var s = '{"TORONTO": {"AGE_CAT_15-19": 0.063570928926087122, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.043824157111519615, "AGE_CAT_60-64": 0.053129567992200435, "CRIME": 0.47139999999999999, "POPULATION": 5583064.0, "OUTDOOR": 0.68999999999999995, "AGE_CAT_90+": 0.0066611358113414683, "AGE_CAT_55-59": 0.065628156104868718, "AGE_CAT_80-84": 0.018273124732897338, "UNIVERSITY": 0.5714285714285714, "AGE_CAT_30-34": 0.074372279846307399, "AGE_CAT_35-39": 0.071559073696225259, "AGE_CAT_0-4": 0.053736101579266164, "AGE_CAT_50-54": 0.077314289752967599, "AGE_CAT_45-49": 0.07584955985444515, "AGE_CAT_20-24": 0.072730857615043221, "AGE_CAT_10-14": 0.054634590347908851, "UNEMPL_15-24": 0.21600000000000003, "AGE_CAT_85-89": 0.0115441192498205, "PARKS": 0.84999999999999998, "BUSINESSES": 0, "AGE_CAT_70-74": 0.03084437137491735, "TRANSIT_SCORE": 0.78, "UNEMPL_15+": 0.095000000000000001, "AGE_CAT_75-79": 0.024473209148897803, "AGE_CAT_25-29": 0.073704647041377705, "AGE_CAT_40-44": 0.073016868007855049, "AGE_CAT_5-9": 0.055132961806053246}, "EDMONTON": {"AGE_CAT_15-19": 0.057202869855227399, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.03891996476673016, "AGE_CAT_60-64": 0.051420999932243715, "CRIME": 0.84489999999999998, "POPULATION": 1159869.0, "OUTDOOR": 0.80000000000000004, "AGE_CAT_90+": 0.0057630487318281395, "AGE_CAT_55-59": 0.065550444556535095, "AGE_CAT_80-84": 0.015343787877647201, "UNIVERSITY": 0.7142857142857143, "AGE_CAT_30-34": 0.089604679700968914, "AGE_CAT_35-39": 0.075942000617335068, "AGE_CAT_0-4": 0.061927741682915628, "AGE_CAT_50-54": 0.071893185975954052, "AGE_CAT_45-49": 0.066505055371944385, "AGE_CAT_20-24": 0.075901346844439097, "AGE_CAT_10-14": 0.051831301899434613, "UNEMPL_15-24": 0.10000000000000001, "AGE_CAT_85-89": 0.0095890204699275016, "PARKS": 0.89000000000000001, "BUSINESSES": 0, "AGE_CAT_70-74": 0.02621340219379804, "TRANSIT_SCORE": 0.44, "UNEMPL_15+": 0.050999999999999997, "AGE_CAT_75-79": 0.019741923826875157, "AGE_CAT_25-29": 0.090960558311814432, "AGE_CAT_40-44": 0.068441379518026937, "AGE_CAT_5-9": 0.057247287866354489}, "OTTAWA": {"AGE_CAT_15-19": 0.061300850755848096, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.047200486753123001, "AGE_CAT_60-64": 0.056434078180927105, "CRIME": 0.53280000000000005, "POPULATION": 1236324.0, "OUTDOOR": 0.79000000000000004, "AGE_CAT_90+": 0.0068400345339809212, "AGE_CAT_55-59": 0.069967726811327027, "AGE_CAT_80-84": 0.017351959833763492, "UNIVERSITY": 0.42857142857142855, "AGE_CAT_30-34": 0.070533683528535299, "AGE_CAT_35-39": 0.068427656924017657, "AGE_CAT_0-4": 0.054457781601399566, "AGE_CAT_50-54": 0.080053287935411138, "AGE_CAT_45-49": 0.072807372913888085, "AGE_CAT_20-24": 0.076178836253396873, "AGE_CAT_10-14": 0.052970058917156379, "UNEMPL_15-24": 0.128, "AGE_CAT_85-89": 0.011048294467431694, "PARKS": 0.91000000000000003, "BUSINESSES": 0, "AGE_CAT_70-74": 0.032483336140357269, "TRANSIT_SCORE": 0.49, "UNEMPL_15+": 0.067000000000000004, "AGE_CAT_75-79": 0.023497824935779843, "AGE_CAT_25-29": 0.073755691810014554, "AGE_CAT_40-44": 0.069659712833865156, "AGE_CAT_5-9": 0.055031324869776847}, "WINNIPEG": {"AGE_CAT_15-19": 0.063846723908821429, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.046504139834406627, "AGE_CAT_60-64": 0.057067106204640707, "CRIME": 0.83169999999999999, "POPULATION": 730018.0, "OUTDOOR": 0.72999999999999998, "AGE_CAT_90+": 0.0085543800470203411, "AGE_CAT_55-59": 0.067507410814678523, "AGE_CAT_80-84": 0.019578605744659104, "UNIVERSITY": 0.42857142857142855, "AGE_CAT_30-34": 0.073354288050700198, "AGE_CAT_35-39": 0.068368598589389762, "AGE_CAT_0-4": 0.0544950424205254, "AGE_CAT_50-54": 0.075405039353981393, "AGE_CAT_45-49": 0.06805172237554942, "AGE_CAT_20-24": 0.074039149545129301, "AGE_CAT_10-14": 0.056324747010119594, "UNEMPL_15-24": 0.11699999999999999, "AGE_CAT_85-89": 0.013281968721251151, "PARKS": 0.88, "BUSINESSES": 0, "AGE_CAT_70-74": 0.032036440764591639, "TRANSIT_SCORE": 0.51, "UNEMPL_15+": 0.059999999999999998, "AGE_CAT_75-79": 0.024154144945313299, "AGE_CAT_25-29": 0.076010681794950422, "AGE_CAT_40-44": 0.066726719820096078, "AGE_CAT_5-9": 0.054693090054175608}, "HAMILTON": {"AGE_CAT_15-19": 0.062289931889580624, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.051349401746930326, "AGE_CAT_60-64": 0.058866115719759339, "CRIME": 0.55110000000000003, "POPULATION": 721053.0, "OUTDOOR": 0.72999999999999998, "AGE_CAT_90+": 0.009022147647498523, "AGE_CAT_55-59": 0.070929187118087683, "AGE_CAT_80-84": 0.024009837590887945, "UNIVERSITY": 0.14285714285714285, "AGE_CAT_30-34": 0.063851557967037273, "AGE_CAT_35-39": 0.062412771095673447, "AGE_CAT_0-4": 0.050417653300715605, "AGE_CAT_50-54": 0.078943791915612085, "AGE_CAT_45-49": 0.071380033140449647, "AGE_CAT_20-24": 0.072375814789840412, "AGE_CAT_10-14": 0.054017887479287222, "UNEMPL_15-24": 0.13699999999999998, "AGE_CAT_85-89": 0.016425170014688434, "PARKS": 0.85999999999999999, "BUSINESSES": 0, "AGE_CAT_70-74": 0.037978223483719882, "TRANSIT_SCORE": 0.42, "UNEMPL_15+": 0.062, "AGE_CAT_75-79": 0.029815950278871135, "AGE_CAT_25-29": 0.066994412122922842, "AGE_CAT_40-44": 0.065815678464457655, "AGE_CAT_5-9": 0.053104434233979939}, "SASKATOON": {"AGE_CAT_15-19": 0.058822355422207734, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.035927406747074515, "AGE_CAT_60-64": 0.048690434215690838, "CRIME": 0.9909, "POPULATION": 260600.0, "OUTDOOR": 0.77000000000000002, "AGE_CAT_90+": 0.0074143310470538926, "AGE_CAT_55-59": 0.062584404957523099, "AGE_CAT_80-84": 0.016807812822235674, "UNIVERSITY": 0.2857142857142857, "AGE_CAT_30-34": 0.085642342516149203, "AGE_CAT_35-39": 0.070667323057272302, "AGE_CAT_0-4": 0.062471310630201504, "AGE_CAT_50-54": 0.068322278917221604, "AGE_CAT_45-49": 0.061223946725919222, "AGE_CAT_20-24": 0.08576541575470506, "AGE_CAT_10-14": 0.054315213848067749, "UNEMPL_15-24": 0.068000000000000005, "AGE_CAT_85-89": 0.011226275138540551, "PARKS": 0.89000000000000001, "BUSINESSES": 0, "AGE_CAT_70-74": 0.025349760838760751, "TRANSIT_SCORE": 0, "UNEMPL_15+": 0.040000000000000001, "AGE_CAT_75-79": 0.020503336282655986, "AGE_CAT_25-29": 0.10207760931897257, "AGE_CAT_40-44": 0.063835095165550138, "AGE_CAT_5-9": 0.058353346594197594}, "CALGARY": {"AGE_CAT_15-19": 0.056785247394472681, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.035442706833835567, "AGE_CAT_60-64": 0.04841613937660702, "CRIME": 0.60399999999999998, "POPULATION": 1214839.0, "OUTDOOR": 0.68999999999999995, "AGE_CAT_90+": 0.0045254176201250992, "AGE_CAT_55-59": 0.065002939459921333, "AGE_CAT_80-84": 0.013060869923744651, "UNIVERSITY": 0.7142857142857143, "AGE_CAT_30-34": 0.093434305736531983, "AGE_CAT_35-39": 0.082915517718154488, "AGE_CAT_0-4": 0.063839951205676176, "AGE_CAT_50-54": 0.072441514699787657, "AGE_CAT_45-49": 0.071267863350301872, "AGE_CAT_20-24": 0.068300679381341434, "AGE_CAT_10-14": 0.053175434219010026, "UNEMPL_15-24": 0.098000000000000004, "AGE_CAT_85-89": 0.0083093946845181101, "PARKS": 0.88, "BUSINESSES": 0, "AGE_CAT_70-74": 0.023005272545159987, "TRANSIT_SCORE": 0.43, "UNEMPL_15+": 0.048000000000000001, "AGE_CAT_75-79": 0.016957164924672342, "AGE_CAT_25-29": 0.085461864861617901, "AGE_CAT_40-44": 0.077784436288361375, "AGE_CAT_5-9": 0.059873279776160304}, "VANCOUVER": {"AGE_CAT_15-19": 0.061900449704467779, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.048020292362553528, "AGE_CAT_60-64": 0.058151900445656358, "CRIME": 0.90260000000000007, "POPULATION": 2313328.0, "OUTDOOR": 0.75, "AGE_CAT_90+": 0.0072724284486551981, "AGE_CAT_55-59": 0.069107298781640528, "AGE_CAT_80-84": 0.019148771661939151, "UNIVERSITY": 0.2857142857142857, "AGE_CAT_30-34": 0.076065593944676102, "AGE_CAT_35-39": 0.070179642948659041, "AGE_CAT_0-4": 0.046732588778074145, "AGE_CAT_50-54": 0.077258976581282598, "AGE_CAT_45-49": 0.075122789276882179, "AGE_CAT_20-24": 0.074836992756717943, "AGE_CAT_10-14": 0.048940832428918238, "UNEMPL_15-24": 0.090999999999999998, "AGE_CAT_85-89": 0.012234600890826943, "PARKS": 0.87, "BUSINESSES": 0, "AGE_CAT_70-74": 0.033804141944525516, "TRANSIT_SCORE": 0.74, "UNEMPL_15+": 0.047, "AGE_CAT_75-79": 0.025339545292069065, "AGE_CAT_25-29": 0.074464971507382335, "AGE_CAT_40-44": 0.073289400551919223, "AGE_CAT_5-9": 0.04812878169315412}, "MONTREAL": {"AGE_CAT_15-19": 0.05645497118164565, "UNEMPLOYMENT": 0, "AGE_CAT_65-69": 0.048330556742645678, "AGE_CAT_60-64": 0.055892534641993626, "CRIME": 0.65930000000000011, "POPULATION": 3824221.0, "OUTDOOR": 0.66000000000000003, "AGE_CAT_90+": 0.0072769107260497014, "AGE_CAT_55-59": 0.067985044402688669, "AGE_CAT_80-84": 0.021433922645979597, "UNIVERSITY": 1.0, "AGE_CAT_30-34": 0.075015128673809398, "AGE_CAT_35-39": 0.074127894344371573, "AGE_CAT_0-4": 0.056342980506421336, "AGE_CAT_50-54": 0.075369724425960877, "AGE_CAT_45-49": 0.07150443207442736, "AGE_CAT_20-24": 0.071343026444946653, "AGE_CAT_10-14": 0.049536877585749227, "UNEMPL_15-24": 0.13800000000000001, "AGE_CAT_85-89": 0.013277723713789578, "PARKS": 0.91000000000000003, "BUSINESSES": 0, "AGE_CAT_70-74": 0.036537019871019517, "TRANSIT_SCORE": 0.77, "UNEMPL_15+": 0.098000000000000004, "AGE_CAT_75-79": 0.02725892765576202, "AGE_CAT_25-29": 0.069167030243193581, "AGE_CAT_40-44": 0.069140708709770585, "AGE_CAT_5-9": 0.054004585409775367}}';


// parse it into a data object
var data = JSON.parse( s );
// print(÷['VANCOUVER'])

var METRICS = {
	eucledian : function( a , b ) {
		// print(a)
		// print(b)
		var sum = 0;


		for ( var key in a ) {
			if (key != 'POPULATION' && key != 'AGE_CAT_TOTAL' ) {
				
				if ( b.hasOwnProperty(key) && a[key] != 0 ) {
					// only calculate if both items have this property
					
					var weight = weights[ key ] || 1;
					// console.log(weight)
					diff = ( a[key] - b[key] );
					sum += weight * diff * diff;

				}
			}

		}
		return 1 / ( 1 + Math.sqrt(sum) );
	}
}


// print('------METRIC EVALUATION----')
// for ( key in data ){
// 	for (key2 in data ){
// 		if ( key != key2 ){
// 			print( key + ' VS ' + key2 );
// 			print( METRICS.eucledian( data[key2], data[key] ) );
// 		}
// 	}
// }


var calculateSimilarity = function( item ){
	var to_be_returned = {}
	for ( key in data ) {
		// print( key + ' VS '+ item );
		to_be_returned[ key ] = METRICS.eucledian( data[ key ] , item );
	}
	return to_be_returned;
}

// var results = calculateSimilarity(current);
// print( results );

// print('AGE_CAT_25-29:')
// for ( city in results ) {
// 	print(city+':'+data[city]['AGE_CAT_25-29'])
// }


function maximize_object( obj ) {
	
	var current_max = 0;
	var max_city = '';

	for ( key in obj ) {
		if ( obj[ key ] > current_max ) {
			current_max = obj[ key ];
			max_city = key;
		}
	}

	return max_city;
}

function deepCopy( obj ) {
	// assuem that the obj has non object values

	var newObj = {};

	for ( key in obj ) {
		newObj[key] = obj[key];
	}

	return newObj;

}

function max_sort ( obj ) {
	// returns the keys of the object which are sorted by decreasing value 
	var temp = deepCopy( obj );
	var results = [];
	while( ! objectIsEmpty(temp) ) {
		//while the temporary object is not empty we can keep pushing stuff

		var current_max = maximize_object( temp );

		results.push( current_max );

		delete temp[current_max];

	}

	return results;

}

function min_sort ( obj ) {
	// returns the keys of the object which are sorted by mimimum value 
	return max_sort( obj ).reverse()
}

function objectIsEmpty( obj ){
		// http://bencollier.net/2011/04/javascript-is-an-object-empty/
    return (Object.getOwnPropertyNames(obj).length === 0);
}


// print(max_sort(results));
// print(min_sort(results));


function minimize_feature( cities , feature ){
	// print(cities)
 var minimum = 1000;
 var results = [];

 for ( var i = 0; i<cities.length; i++ ) {
 	city = cities[i]
 	// print(city)
 	var city_data = data[city][feature]
 	if ( city_data < minimum ){

 		results.unshift( city );
 		minimum = city_data
 	}
 }

return results;

}



// var sorted_results = max_sort(results);
// print(sorted_results);
// sorted_results.splice( sorted_results.length/2, 100 );
// print( minimize_feature( max_sort(results), 'CRIME' ) );


// var crime_minimized = minimize_feature( sorted_results, 'CRIME' );

// for (var i = 0; i < crime_minimized.length; i++) {
// 	print(crime_minimized[i]+':'+data[crime_minimized[i]]['CRIME'])
// };


function determineAgeGroup ( age ) {
	
	if( age < 5 ) {
		return 'AGE_CAT_0-4';
	} else if ( age < 10 ) {
		return 'AGE_CAT_5-9';
	} else if  ( age < 15 ) {
		return 'AGE_CAT_10-14';
	} else if ( age < 20 ) {
		return 'AGE_CAT_15-19';
	} else if ( age < 25 ) {
		return 'AGE_CAT_20-24';
	} else if ( age < 30 ) {
		return 'AGE_CAT_25-29';
	} else if ( age < 35 ){
		return 'AGE_CAT_30-34';
	} else if ( age < 40 ) {
		return 'AGE_CAT_35-39';
	}	else if ( age < 45 ) {
		return 'AGE_CAT_40-44';
	} else if ( age < 50 ) {
		return 'AGE_CAT_44-49';
	} else if ( age < 55 ) {
		return 'AGE_CAT_50-54';
	} else if ( age < 60 ) {
		return 'AGE_CAT_55-59';
	} else if ( age < 65 ) {
		return 'AGE_CAT_60-64';
	} else if ( age < 70 ) {
		return 'AGE_CAT_65-69';
	} else if ( age < 75 ) {
		return 'AGE_CAT_70-74';
	} else if ( age < 80 ) {
		return 'AGE_CAT_75-79';
	} else if ( age < 85 ) {
		return 'AGE_CAT_80-84';
	} else if ( age < 90 ) {
		return 'AGE_CAT_85-89';
	} else {
		return 'AGE_CAT_90'
	}

}




var cityToImageMap = {
	'EDMONTON': 'images/ed.png',
	'HAMILTON': 'images/hamil.png',
	'MONTREAL': 'images/mtl_unsplash.png',
	'OTTAWA': 'images/ott.png',
	'TORONTO': 'images/to.png',
	'VANCOUVER': 'images/vancity.png',
	'CALGARY': 'images/calg.png',
	'WINNIPEG': 'images/wpeg.png',
	'SASKATOON': 'images/sask.png'
}

var weights = {
	'CRIME': 0.5
}


function process( sliderValues , aboutYou ){

	if ( aboutYou.crime === 'yes' ) {
		weights['CRIME'] = 0.8;
	} else {
		weights['CRIME'] = 0.5;
	}

	if ( aboutYou.education === 'yes' ) {
		weights['UNIVERSITY'] = 1;
	} else {
		weights['UNIVERSITY'] = 0.0;
	}

	// convert the user entered information to allow for
	// algorithm matching
	var userInformation = {}

	// give that a score of 0.8 to indicate that it will favour that a majority
	// of the population should be in that age group

	var ageGroup =  determineAgeGroup( aboutYou.age);
	userInformation[ ageGroup ] = 0.8;


	userInformation['TRANSIT_SCORE'] = sliderValues.transit / 10.0 || 0;
	userInformation['CRIME'] = ( 1 - ( sliderValues.crime / 10.0 ) ) || 0;

	
	userInformation['UNEMPL_15'] = ( 1 - ( sliderValues.employment / 10.0 ) ) || 0;
	userInformation['UNEMPL_15-24'] = ( 1 - ( sliderValues.employment / 10.0 ) ) || 0;

	userInformation['OUTDOOR'] = sliderValues.outdoor / 10.0 || 0;
	// userInformation['OUTDOOR'] = sliderValues.outdoor / 10.0 || 0;

	// want to minimize the unemployment for the city for that users age group
	if (ageGroup === 'AGE_CAT_15-19' || ageGroup === 'AGE_CAT_20-24') {
		userInformation['UNEMPL_15-24'] = MINS['UNEMPL_15-24'];
		if ( aboutYou.employment === 'yes') {
			weights['UNEMPL_15-24'] = 0.5
		} 
	} else {
		userInformation['UNEMPL_15'] = MINS['UNEMPL_15'];
		if ( aboutYou.employment === 'yes') {
			weights['UNEMPL_15'] = 0.5
		} 

	}

	// always want to get university close to 1!
	userInformation['UNIVERSITY'] = 1;

	var results = calculateSimilarity( userInformation );
	console.log(results)
	var sorted_results = max_sort( results );
	console.log(sorted_results)
	// var selected_city = minimize_feature(truncated_results, 'CRIME')[0]

	var selected_city = sorted_results[0]

	if(aboutYou.city){
		if ( aboutYou.city.toUpperCase() === selected_city || false ){
			selected_city = sorted_results[1];
		}
	}
	
	console.log(selected_city);


	return {
		'CITYNAME': selected_city ,
		'IMAGE': cityToImageMap[selected_city]
	}
}


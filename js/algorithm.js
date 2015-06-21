var print = console.log;

// string of data we have
var s = '{"TORONTO": {"AGE_CAT_15-19": 0.063570928926087122, "AGE_CAT_30-34": 0.074372279846307399, "AGE": 0, "AGE_CAT_65-69": 0.043824157111519615, "WALKABILITY": 0, "AGE_CAT_60-64": 0.053129567992200435, "CRIME": 0.47139999999999999, "POPULATION": 5583064.0, "AGE_CAT_90+": 0.0066611358113414683, "AGE_CAT_55-59": 0.065628156104868718, "AGE_CAT_80-84": 0.018273124732897338, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.071559073696225259, "AGE_CAT_0-4": 0.053736101579266164, "AGE_CAT_50-54": 0.077314289752967599, "AGE_CAT_45-49": 0.07584955985444515, "AGE_CAT_20-24": 0.072730857615043221, "AGE_CAT_10-14": 0.054634590347908851, "AGE_CAT_85-89": 0.0115441192498205, "PARKS": 0.84999999999999998, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.03084437137491735, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.78, "TREES": 0, "AGE_CAT_75-79": 0.024473209148897803, "AGE_CAT_25-29": 0.073704647041377705, "SCHOOLS": 0, "AGE_CAT_40-44": 0.073016868007855049, "AGE_CAT_5-9": 0.055132961806053246}, "EDMONTON": {"AGE_CAT_15-19": 0.057202869855227399, "AGE_CAT_30-34": 0.089604679700968914, "AGE": 0, "AGE_CAT_65-69": 0.03891996476673016, "WALKABILITY": 0, "AGE_CAT_60-64": 0.051420999932243715, "CRIME": 0.84489999999999998, "POPULATION": 1159869.0, "AGE_CAT_90+": 0.0057630487318281395, "AGE_CAT_55-59": 0.065550444556535095, "AGE_CAT_80-84": 0.015343787877647201, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.075942000617335068, "AGE_CAT_0-4": 0.061927741682915628, "AGE_CAT_50-54": 0.071893185975954052, "AGE_CAT_45-49": 0.066505055371944385, "AGE_CAT_20-24": 0.075901346844439097, "AGE_CAT_10-14": 0.051831301899434613, "AGE_CAT_85-89": 0.0095890204699275016, "PARKS": 0.89000000000000001, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.02621340219379804, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.44, "TREES": 0, "AGE_CAT_75-79": 0.019741923826875157, "AGE_CAT_25-29": 0.090960558311814432, "SCHOOLS": 0, "AGE_CAT_40-44": 0.068441379518026937, "AGE_CAT_5-9": 0.057247287866354489}, "OTTAWA": {"AGE_CAT_15-19": 0.061300850755848096, "AGE_CAT_30-34": 0.070533683528535299, "AGE": 0, "AGE_CAT_65-69": 0.047200486753123001, "WALKABILITY": 0, "AGE_CAT_60-64": 0.056434078180927105, "CRIME": 0.53280000000000005, "POPULATION": 1236324.0, "AGE_CAT_90+": 0.0068400345339809212, "AGE_CAT_55-59": 0.069967726811327027, "AGE_CAT_80-84": 0.017351959833763492, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.068427656924017657, "AGE_CAT_0-4": 0.054457781601399566, "AGE_CAT_50-54": 0.080053287935411138, "AGE_CAT_45-49": 0.072807372913888085, "AGE_CAT_20-24": 0.076178836253396873, "AGE_CAT_10-14": 0.052970058917156379, "AGE_CAT_85-89": 0.011048294467431694, "PARKS": 0.91000000000000003, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.032483336140357269, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.49, "TREES": 0, "AGE_CAT_75-79": 0.023497824935779843, "AGE_CAT_25-29": 0.073755691810014554, "SCHOOLS": 0, "AGE_CAT_40-44": 0.069659712833865156, "AGE_CAT_5-9": 0.055031324869776847}, "WINNIPEG": {"AGE_CAT_15-19": 0.063846723908821429, "AGE_CAT_30-34": 0.073354288050700198, "AGE": 0, "AGE_CAT_65-69": 0.046504139834406627, "WALKABILITY": 0, "AGE_CAT_60-64": 0.057067106204640707, "CRIME": 0.83169999999999999, "POPULATION": 730018.0, "AGE_CAT_90+": 0.0085543800470203411, "AGE_CAT_55-59": 0.067507410814678523, "AGE_CAT_80-84": 0.019578605744659104, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.068368598589389762, "AGE_CAT_0-4": 0.0544950424205254, "AGE_CAT_50-54": 0.075405039353981393, "AGE_CAT_45-49": 0.06805172237554942, "AGE_CAT_20-24": 0.074039149545129301, "AGE_CAT_10-14": 0.056324747010119594, "AGE_CAT_85-89": 0.013281968721251151, "PARKS": 0.88, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.032036440764591639, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.51, "TREES": 0, "AGE_CAT_75-79": 0.024154144945313299, "AGE_CAT_25-29": 0.076010681794950422, "SCHOOLS": 0, "AGE_CAT_40-44": 0.066726719820096078, "AGE_CAT_5-9": 0.054693090054175608}, "HAMILTON": {"AGE_CAT_15-19": 0.062289931889580624, "AGE_CAT_30-34": 0.063851557967037273, "AGE": 0, "AGE_CAT_65-69": 0.051349401746930326, "WALKABILITY": 0, "AGE_CAT_60-64": 0.058866115719759339, "CRIME": 0.55110000000000003, "POPULATION": 721053.0, "AGE_CAT_90+": 0.009022147647498523, "AGE_CAT_55-59": 0.070929187118087683, "AGE_CAT_80-84": 0.024009837590887945, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.062412771095673447, "AGE_CAT_0-4": 0.050417653300715605, "AGE_CAT_50-54": 0.078943791915612085, "AGE_CAT_45-49": 0.071380033140449647, "AGE_CAT_20-24": 0.072375814789840412, "AGE_CAT_10-14": 0.054017887479287222, "AGE_CAT_85-89": 0.016425170014688434, "PARKS": 0.85999999999999999, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.037978223483719882, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.42, "TREES": 0, "AGE_CAT_75-79": 0.029815950278871135, "AGE_CAT_25-29": 0.066994412122922842, "SCHOOLS": 0, "AGE_CAT_40-44": 0.065815678464457655, "AGE_CAT_5-9": 0.053104434233979939}, "CALGARY": {"AGE_CAT_15-19": 0.056785247394472681, "AGE_CAT_30-34": 0.093434305736531983, "AGE": 0, "AGE_CAT_65-69": 0.035442706833835567, "WALKABILITY": 0, "AGE_CAT_60-64": 0.04841613937660702, "CRIME": 0.60399999999999998, "POPULATION": 1214839.0, "AGE_CAT_90+": 0.0045254176201250992, "AGE_CAT_55-59": 0.065002939459921333, "AGE_CAT_80-84": 0.013060869923744651, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.082915517718154488, "AGE_CAT_0-4": 0.063839951205676176, "AGE_CAT_50-54": 0.072441514699787657, "AGE_CAT_45-49": 0.071267863350301872, "AGE_CAT_20-24": 0.068300679381341434, "AGE_CAT_10-14": 0.053175434219010026, "AGE_CAT_85-89": 0.0083093946845181101, "PARKS": 0.88, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.023005272545159987, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.43, "TREES": 0, "AGE_CAT_75-79": 0.016957164924672342, "AGE_CAT_25-29": 0.085461864861617901, "SCHOOLS": 0, "AGE_CAT_40-44": 0.077784436288361375, "AGE_CAT_5-9": 0.059873279776160304}, "VANCOUVER": {"AGE_CAT_15-19": 0.061900449704467779, "AGE_CAT_30-34": 0.076065593944676102, "AGE": 0, "AGE_CAT_65-69": 0.048020292362553528, "WALKABILITY": 0, "AGE_CAT_60-64": 0.058151900445656358, "CRIME": 0.90260000000000007, "POPULATION": 2313328.0, "AGE_CAT_90+": 0.0072724284486551981, "AGE_CAT_55-59": 0.069107298781640528, "AGE_CAT_80-84": 0.019148771661939151, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.070179642948659041, "AGE_CAT_0-4": 0.046732588778074145, "AGE_CAT_50-54": 0.077258976581282598, "AGE_CAT_45-49": 0.075122789276882179, "AGE_CAT_20-24": 0.074836992756717943, "AGE_CAT_10-14": 0.048940832428918238, "AGE_CAT_85-89": 0.012234600890826943, "PARKS": 0.87, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.033804141944525516, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.74, "TREES": 0, "AGE_CAT_75-79": 0.025339545292069065, "AGE_CAT_25-29": 0.074464971507382335, "SCHOOLS": 0, "AGE_CAT_40-44": 0.073289400551919223, "AGE_CAT_5-9": 0.04812878169315412}, "MONTREAL": {"AGE_CAT_15-19": 0.05645497118164565, "AGE_CAT_30-34": 0.075015128673809398, "AGE": 0, "AGE_CAT_65-69": 0.048330556742645678, "WALKABILITY": 0, "AGE_CAT_60-64": 0.055892534641993626, "CRIME": 0.65930000000000011, "POPULATION": 3824221.0, "AGE_CAT_90+": 0.0072769107260497014, "AGE_CAT_55-59": 0.067985044402688669, "AGE_CAT_80-84": 0.021433922645979597, "UNEMPLOYMENT": 0, "AGE_CAT_35-39": 0.074127894344371573, "AGE_CAT_0-4": 0.056342980506421336, "AGE_CAT_50-54": 0.075369724425960877, "AGE_CAT_45-49": 0.07150443207442736, "AGE_CAT_20-24": 0.071343026444946653, "AGE_CAT_10-14": 0.049536877585749227, "AGE_CAT_85-89": 0.013277723713789578, "PARKS": 0.91000000000000003, "LIBRARIES": 0, "BUSINESSES": 0, "AGE_CAT_70-74": 0.036537019871019517, "UNIVERSITIES": 0, "TRANSIT_SCORE": 0.77, "TREES": 0, "AGE_CAT_75-79": 0.02725892765576202, "AGE_CAT_25-29": 0.069167030243193581, "SCHOOLS": 0, "AGE_CAT_40-44": 0.069140708709770585, "AGE_CAT_5-9": 0.054004585409775367}}';


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
				
				if ( b.hasOwnProperty(key) ) {
					// only calculate if both items have this property

					diff = ( a[key] - b[key] );
					sum += diff * diff;
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

var current = {
	CRIME:data['VANCOUVER']['CRIME'], 
	PARKS: data['VANCOUVER']['PARKS'],
	'AGE_CAT_25-29': data['VANCOUVER']['AGE_CAT_25-29'], 
}

var results = calculateSimilarity(current);
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



var sorted_results = max_sort(results);
// print(sorted_results);
sorted_results.splice( sorted_results.length/2, 100 );
// print( minimize_feature( max_sort(results), 'CRIME' ) );


var crime_minimized = minimize_feature( sorted_results, 'CRIME' );

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





function process( sliderValues , aboutYou ){


	var userInformation = {}


	// first parse the age of the user into one of our age groups
	userInformation['AGE-GROUP'] = determineAgeGroup( userInformation['AGE'] );

	// give that a score of 0.8 to indicate that it will favour that a majority
	// of the population should be in that age group
	userInformation[ userInformation['AGE-GROUP'] ] = 0.8;

	return {
		'CITYNAME':'MONTREAL' ,
		'IMAGE':'images/mt_unsplash.png'
	}
}


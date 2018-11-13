module.exports = {
	setIntersection: function(set1, set2){
		let intersectionSet = [];
		// iterate through set1
		for (let i=0; i<set1.length; i++){
			// if found in set 2, add it to single array
			if (set2.includes(set1[i])){
				intersectionSet.push(set1[i]);
			}
		}
		return intersectionSet;
	}
}
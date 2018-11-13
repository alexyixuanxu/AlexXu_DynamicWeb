module.exports = {
	setDifference: function(set1, set2){
		let differenceSet = [];
		for (let i=0; i<set1.length; i++){
			if (!set2.includes(set1[i])){
				differenceSet.push(set1[i]);
			}
		}
		for (let j=0; j<set2.length; j++){
			if (!set1.includes(set2[j])){
				differenceSet.push(set2[j]);
			}
		}
		return differenceSet;
	}
}
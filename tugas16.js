//min array
function nilaiMin(nilai){
	return Math.min.apply(Math, nilai)
}

//max array
function nilaiMax(nilai){
	return Math.max.apply(Math, nilai)
}

nilaiJS = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
console.log("Nilai Minimal : ", nilaiMin(nilaiJS))

nilaiJS = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
console.log("Nilai Maksimal : ", nilaiMax(nilaiJS))
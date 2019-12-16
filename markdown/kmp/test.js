let result = [];

let promise1 = new Promise(resolve => {
	setTimeout(() => {
		result.push("promise1 ");
		resolve();
	}, 1000);
});
let promise2 = new Promise(resolve => {
	setTimeout(() => {
		result.push("promise2 ");
		resolve();
	}, 2000);
});
let promise3 = new Promise(resolve => {
	setTimeout(() => {
		result.push("promise3 ");
		resolve();
	}, 500);
});
let promise4 = new Promise(resolve => {
	setTimeout(() => {
		result.push("promise4 ");
		resolve();
	}, 200);
});

Promise.prototype.myAll = function(promiseArray) {
	return new Promise(resolve => {
		let counter = 0;
		for (let prom of promiseArray) {
			console.log(prom);
			Promise.resolve(prom).then(res => {
				console.log(counter);
				counter += 1;
				if (counter == promiseArray.length) {
					resolve();
				}
			});
		}
	});
};

Promise.prototype.myRace = function(promiseArray) {
	return new Promise(resolve => {
		for (let prom of promiseArray) {
			Promise.resolve(prom)
				.then(res => {
					resolve();
				})
		}
	});
};

Promise.prototype.myRace([promise1, promise2, promise3, promise4]).then(() => {
	console.log(result);
});

// Promise.all([promise1, promise2, promise3, promise4]).then(() => {
// 	console.log(result);
// });

Function.prototype.myCall = function(context, ...args) {
	if (!context) {
		context = window;
	}
	let self = this;
	context.fn = self;
	let result = context.fn(...args);
	delete context.fn;
	return result;
};

Function.prototype.myBind = function(context, ...args) {
	if (!context) {
		context = window;
	}
	let self = this;
	return function() {
		return self.apply(context, ...args);
	};
};

function makeThrottle(fn, delay) {
	let lastCall = 0;
	return function(...args) {
		const now = new Date().getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		return fn(...args);
	};
}

function makeDebounce(fn, delay) {
	let timer;
	return function(...args) {
		if (timer) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn(...args);
			}, delay);
		}
	};
}

function deepCopy(obj) {
	let result;
	if (typeof obj == "object") {
		result = object.contructor == Array ? [] : {};
		for (let key in obj) {
			result[key] = typeof object == "object" ? deepCopy(obj[key]) : obj[key];
		}
	} else {
		result = obj;
	}
	return result;
}

console.log(typeof null);
console.log(typeof undefined);
console.log(undefined === null)
let testN = null
if(testN) {console.log("testN ah!")} 
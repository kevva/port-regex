'use strict';
module.exports = opts => {
	opts = opts || {};
	const regex = ':(\\d{2,5})';
	return opts.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
};

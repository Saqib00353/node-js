function substract(...args) {
  return args.reduce((acc, curr) => acc - curr);
}

module.exports = {
  substract,
};

module.exports = {
  makeID() {
    return Math.random().toString(36).substr(2, 9);
  },
  randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  defCity: ["lyon", "paris", "marseille", "toulouse", "lille", "bordeaux"],
};

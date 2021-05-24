module.exports = {
  // Crée un ID aléatoire
  makeID() {
    return Math.random().toString(36).substr(2, 9);
  },
  // Return un INT compri entre min et max
  randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  defCity: ["lyon", "paris", "marseille", "toulouse", "lille", "bordeaux"],
};

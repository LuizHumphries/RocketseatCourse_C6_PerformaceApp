module.exports = () => {
  const data = {
    products: [],
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: randomIntFromInterval(i, 1100),
      title: `Camiseta ${i + 1}`,
    });
  }
  return data;
};

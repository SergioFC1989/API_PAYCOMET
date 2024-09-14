const date = () => {
  const now = new Date();
  now.setDate(now.getDate() + 1); // Añade un día directamente
  return now.toISOString().slice(0, 10).replace(/-/g, "").slice(0, 8);
};

module.exports = date;

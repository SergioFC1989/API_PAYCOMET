const date = () => {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  return now.toISOString().slice(0, 10).replace(/-/g, "").slice(0, 8);
};

module.exports = date;

const success = data => {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

const error = (status, data) => {
  return {
    statusCode: status,
    body: JSON.stringify(data)
  }
};

module.exports = {
  success,
  error
};
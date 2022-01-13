const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://api.sosinventory.com/api/v2/shipment').then(response => {
    console.log(response);
  });
};

const sendShipment = () => {
  var number = document.getElementById("number").value;
  var customer = document.getElementById("customer").value;
  var itemname = document.getElementById("itemname").value;
  var itemname2 = document.getElementById("itemname2").value;

  var requestedDate = document.getElementById("requestedDate").value;
  var requestedTime = document.getElementById("requestedTime").value;

  requestedDate = document.getElementById("requestedDate").value;
  requestedTime = document.getElementById("requestedTime").value;

  var requestedDateTime = requestedDate + "T" + requestedTime + ":00";

  axios
    .post(
      'https://api.sosinventory.com/api/v2/shipment',
      {
        "starred": 0,
        "syncToken": 0,
        "number": number,
        "date": requestedDateTime,
        "customer": {
          "name": customer
        },
        "lines": [
          {
            "lineNumber": 1,
            "item": {
              "name": itemname,
            },
            "quantity": 1
          },
          {
            "lineNumber": 2,
            "item": {
              "name": itemname2,
            },
            "quantity": 1
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Host': 'api.sosinventory.com',
          'Authorization': 'Bearer hX1UlSsmsWdd1AiqPn0p4oRV2YlVTBwh-DHTCwuvnBKlpODPYCojgLSz7anSSqhSvUZyBvcilakelelgQS-2b6rW7hAg9zopVaRavFUng8QVApjzxlswOHP9rN6ol3TWzjrN-iddlKvO8mi_gBQDGGLdcfPLAWNzbh-rhdThws29Tci_oBcP4tacxmQH92QSG24AhsgqJ1e3ixn6LlGch_mYJMf3LKCZPnBZU7gtMZFalZnHb0UukJJGvxXpFppZPZjPs40XM0MZCFrClVraynZAmyqhAlTn5ssxt_KYp285pr4J'
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendShipment);

var AddNewBaseCompany = function () {
  var parseResponse = function (response) {
    var i, max;
    var company = [];
    var parr = [];
    var counter = new Counter();

    var row = response.split("||");
    for (i = 0, max = row.length; i < max; i += 1) {
      var obj = row[i].split(":");
      company.push(new Company(obj[1], obj[2], obj[0]));
      parr.push(obj[3]);
    }

    for (i = 0, max = company.length - 1; i < max; i += 1) {
      if (+parr[i] != 0) {
        company[i].setParent(company[+parr[i] - 1]);
      }
    }
    counter.setCounter(company.length - 1);
    ReactDOM.render(React.createElement(Companies, { companis: company[0], counter: counter }), document.getElementById('companyList'));
    $('#loadDiv').remove();
  };
  /**
  * Reseiveg data from database
  */
  $.ajax({
    type: 'POST',
    url: 'http://misha-fedorovych.esy.es/php/load.php',
    success: function (responseData) {
      parseResponse(responseData);
    },
    error: function (err) {
      alert(err + " 1");
    }
  });
};

var deleteData = function(id) {
  $.ajax ({
    type: 'POST',
    url: 'http://misha-fedorovych.esy.es/php/remove.php',
    data: ({id: id}),
    success: function (responseData) {
    },
    error: function (err) {
      alert(err + " 1");
    }
  });
}

var updateData = function(id, name, eae) {
  $.ajax ({
    type: 'POST',
    url: 'http://misha-fedorovych.esy.es/php/edit.php',
    data: ({id: id, name: name, eae: eae}),
    success: function (responseData) {
    },
    error: function (err) {
      alert(err + " 1");
    }
  });
}

var addData = function(id, count) {
  $.ajax ({
    type: 'POST',
    url: 'http://misha-fedorovych.esy.es/php/add.php',
    data: ({id: id, count: count}),
    success: function (responseData) {
    },
    error: function (err) {
      alert(err + " 1");
    }
  });
}

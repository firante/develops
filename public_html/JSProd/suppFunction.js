/**
* counter for generate element index
*/
function Counter () {
  var count = 0;
  this.nextValue = function() {
    return count += 1;
  }

  this.thisValue = function() {
    return count;
  }
  this.setCounter = function(val) {
    count = val;
  }
}

/**
* general constructor to obj
*/

function Company (name, eae, index) {
  var obj = this;

  obj.name = name;
  obj.eae = eae;
  obj.par = null;
  obj.children = [];
  obj.index = index;

  obj.setParent = function (parentComp) {
    if(parentComp instanceof obj.constructor) {
      parentComp.children.push(obj);
      obj.par = parentComp;
    }

  };
  obj.setChild = function (child) {
    if(child instanceof obj.constructor) {
      child.par = obj;
      obj.children.push(child);
    }
  };
  return obj;
}

function getChildrenSuma (elem) {
  var suma = +elem.eae;
  for(var i = 0, max = elem.children.length; i < max; i += 1) {
    suma += +getChildrenSuma(elem.children[i]);
  }
  return suma;
}

/**
* add new element to list
*/

function recAdd(myComp, id, count) {
  if(myComp.index == +id) {
    myComp.setChild(new Company('', 0, count));
    return;
  }
  for(var i = 0, max = myComp.children.length; i < max; i += 1) {
    recAdd(myComp.children[i], id, count);
  }
}

/**
* edit list element
*/

function recEdit(myComp, name, eae, id) {
  if(myComp.index == +id) {
    myComp.name = name;
    myComp.eae = eae;
    return;
  }
  for(var i = 0; i < myComp.children.length; i += 1) {
    recEdit(myComp.children[i], name, eae, id);
  }
}
/**
* remove element from list
*/

function recRem(myComp, id, ind) {
  if(myComp.index == +id) {
    if(ind != -1) {
      if(myComp.par != null) {
        for (var i = 0; i < myComp.children.length; i++) {
          myComp.par.setChild(myComp.children[i]);
        }
        myComp.par.children.splice(ind, 1);
        return;
      }
    } else {

    }
  }
  for(var i = 0; i < myComp.children.length; i += 1) {
    recRem(myComp.children[i], id, i);
  }
}

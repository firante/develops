function GetDomElement() {
  function _getText(idText) {
    return React.createElement('input', { type: "text", id: idText, placeholder: "Input todos..." });
  }

  this.getInputDiv = function () {
    return React.createElement('div', { className: 'inputDiv', id: "inputDiv" }, React.createElement('div', { className: 'divIcon' }), React.createElement('div', { className: 'divText' }, _getText("textTick")));
  };
};

var ChangeBlock = React.createClass({
  displayName: "ChangeBlock",

  addChild: function () {
    var id;
    if ($("input[type='radio']:checked").length > 0) {
      id = $("input[type='radio']:checked").attr('id');
      this.props.handleAdd(id, this.props.counter);
    } else {
      alert("Select company!");
    }
  },
  editCompany: function () {
    var id;
    if ($("input[type='radio']:checked").length > 0) {
      id = $("input[type='radio']:checked").attr('id');
      $('#compName' + id).prop('disabled', false);
      $('#compEAE' + id).prop('disabled', false);

      $('#compName' + id).addClass('input_companyName_ed');
      $('#compEAE' + id).addClass('input_companyEAE_ed');
    } else {
      alert("Select company!");
    }
  },
  deleteCompany: function () {
    if ($("input[type='radio']:checked").length > 0) {
      id = $("input[type='radio']:checked").attr('id');
      this.props.handleRemove(id);
    } else {
      alert("Select company!");
    }
  },

  render: function () {
    return React.createElement(
      "div",
      {
        className: "div_changes_block" },
      React.createElement(
        "div",
        {
          ref: "addChild",
          className: "div_changes",
          onClick: this.addChild },
        " add"
      ),
      React.createElement(
        "div",
        {
          className: "div_changes",
          onClick: this.editCompany },
        " edit"
      ),
      React.createElement(
        "div",
        {
          ref: "remChild",
          className: "div_changes",
          onClick: this.deleteCompany },
        " delete"
      )
    );
  }
});

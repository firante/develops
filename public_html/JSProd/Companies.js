var Companies = React.createClass({
  displayName: "Companies",

  getInitialState: function () {
    return {
      companies: this.props.companis
    };
  },
  handleAdd: function (id, counter) {
    var count = counter.nextValue();
    recAdd(this.state.companies, id, count);
    addData(id, count);
    this.setState({
      companies: this.state.companies
    });
  },

  handleRemove: function (id) {
    recRem(this.state.companies, id, -1);
    deleteData(id);
    this.setState({
      companies: this.state.companies
    });
  },

  handleEdit: function (name, eae, id) {
    recEdit(this.state.companies, name, eae, id);
    updateData(id, name, eae);
    this.setState({
      companies: this.state.companies
    });
  },

  changeHandle: function () {},

  render: function () {
    var listCompanies = [];
    var counter = this.props.counter;
    var handleAdd = this.handleAdd;
    var handleRemove = this.handleRemove;
    var changeHandle = this.changeHandle;
    var handleEdit = this.handleEdit;
    var getSuma = window.getChildrenSuma;

    return React.createElement(
      "div",
      null,
      React.createElement(ChangeBlock, {
        counter: counter,
        handleAdd: handleAdd,
        handleRemove: handleRemove
      }),
      React.createElement(
        'div',
        { className: 'head' },
        React.createElement(
          'div',
          { className: 'head-inner' },
          'Name'
        ),
        React.createElement(
          'div',
          { className: 'head-inner' },
          'CEE'
        ),
        React.createElement(
          'div',
          { className: 'head-inner' },
          'CEE+Child CEE'
        )
      ),
      React.createElement(CompanyEl, {
        company: this.state.companies,
        counter: counter,
        changeHandle: changeHandle,
        handleEdit: handleEdit,
        getSuma: getSuma
      })
    );
  }
});

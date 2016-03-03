var CompanyEl = React.createClass({
  displayName: 'CompanyEl',

  deleteCompany: function () {
    this.props.handleRemove(this.refs.remChild.id);
  },
  handleKeyPress: function (e) {
    if (e.charCode == 13) {
      if (this.refs.c_name.value != '' && this.refs.c_EAE.value != '') {
        this.refs.c_name.disabled = true;
        this.refs.c_EAE.disabled = true;
        this.refs.c_childEAE.disabled = true;
        this.props.handleEdit(this.refs.c_name.value, this.refs.c_EAE.value, this.refs.addChild.id);
        this.refs.c_name.className = 'input_companyName';
        this.refs.c_EAE.className = 'input_companyEAE';
      }
    }
  },
  changeHandle: function () {
    this.props.changeHandle();
  },

  radioClick() {
    try{
		var x = document.getElementsByClassName("div_data_activ");
		var y = x[0].getElementsByClassName('radio');
		if (!y[0].checked)
		{
			x[0].className = 'div_data';
		}
	}
	catch(err){}
	if (this.refs.addChild.checked) {
		  this.refs.refer.className = 'div_data_activ';

	} else {
		this.refs.refer.className = 'div_data';
	}
  },

  render: function () {
    var child = [];
    var disableCheck;
    var delIndex = 'd' + this.props.company.index;
    var editIndex = 'e' + this.props.company.index;
    for (var i = 0; i < this.props.company.children.length; i += 1) {
      child.push(React.createElement(CompanyEl, {
        handleRemove: this.props.handleRemove,
        handleAdd: this.props.handleAdd,
        company: this.props.company.children[i],
        counter: this.props.counter,
        handleEdit: this.props.handleEdit,
        getSuma: this.props.getSuma,
        changeHandle: this.chengeHandle }));
    }
    if (this.props.company.name == '') {
      disableCheck = false;
    } else {
      disableCheck = true;
    }

    var nameCompID = 'compName' + this.props.company.index;
    var eaeCompID = 'compEAE' + this.props.company.index;
    var divDataRef = 'div_data' + this.props.company.index;
    return React.createElement(
      'div',
      { id: 'component' },
      React.createElement(
        'div',
        {
          ref: 'g_company_div',
          className: 'div_companyDiv' },
        React.createElement(
          'div',
          {
            ref: 'refer',
            className: 'div_data'
          },
          React.createElement(
            'div',
            {
              className: 'div_inputs' },
            React.createElement('input', {
              type: 'radio',
              name: 'compRadio',
              ref: 'addChild',
              id: this.props.company.index,
              className: 'radio',
              onChange: this.radioClick
            })
          ),
          React.createElement(
            'div',
            {
              className: 'div_inputs' },
            React.createElement('input', {
              id: nameCompID,
              type: 'text',
              className: 'input_companyName',
              ref: 'c_name',
              disabled: disableCheck,
              value: this.props.company.name,
              onChange: this.changeHandle,
              onKeyPress: this.handleKeyPress })
          ),
          React.createElement(
            'div',
            {
              className: 'div_inputs' },
            React.createElement('input', {
              id: eaeCompID,
              type: 'text',
              className: 'input_companyEAE',
              ref: 'c_EAE',
              disabled: disableCheck,
              value: this.props.company.eae,
              onChange: this.changeHandle,
              onKeyPress: this.handleKeyPress })
          ),
          React.createElement(
            'div',
            {
              className: 'div_inputs' },
            React.createElement('input', {
              type: 'text',
              value: this.props.getSuma(this.props.company),
              disabled: true,
              className: 'input_companyEAE',
              ref: 'c_childEAE',
              onKeyPress: this.handleKeyPress })
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'div_child' },
        child
      )
    );
  }
});

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: this.props.data };

    this.addRecord = this.addRecord.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
    this.credits = this.credits.bind(this);
    this.debits = this.debits.bind(this);
    this.balance = this.balance.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }
  addRecord(record) {
    var records = React.addons.update(this.state.records, {$push: [record]});
    this.setState({records: records});
  }
  updateRecord(record, data) {
    var index = this.state.records.indexOf(record);
    // var records = React.addons.update(this.state.records, {$merge: [record]});
    var records = React.addons.update(
                    this.state.records, {$splice: [[index, 1, data]]}
                  );
    this.setState({records: records});
  }
  deleteRecord(record, data) {
    var index = this.state.records.indexOf(record);
    var records = React.addons.update(
                    this.state.records, {$splice: [[index, 1]]}
                  );
    this.setState({records: records});
  }
  credits() {
    var credit = this.state.records.filter((record) => record.amount >= 0);
    return credit.reduce((prev, curr) => prev+parseFloat(curr.amount),0);
  }
  debits() {
    var credit = this.state.records.filter((record) => record.amount < 0);
    return credit.reduce((prev, curr) => prev+parseFloat(curr.amount),0);
  }
  balance() {
    return this.credits() + this.debits();
  }

  render() {
    const styleObj = {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 30
    };
    return (
      <div style={styleObj} >
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Account</h3>
          </div>
          <div className='panel-body'>
            <legend>Records</legend>
            <div className='row'>
              <AmountBox type='success' amount={this.credits()} text='Credit' />
              <AmountBox type='danger' amount={this.debits()} text='Debit' />
              <AmountBox type='info' amount={this.balance()} text='Balance' />
            </div>
            <hr />
            <RecordForm handleNewRecord={this.addRecord}/>
            <hr />
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.records.map(function(record) {
                  return <Record key={record.id} record={record}
                    handleDeleteRecord={this.deleteRecord}
                    handleEditRecord={this.updateRecord} />
                }.bind(this))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

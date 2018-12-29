import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import jsonQuery from 'json-query';

// External resource
import { SidePanel } from '../examples';
import ReactTable from 'react-table';
import _ from 'lodash';
import GenericCruder from '../../utils/genericCruder';

export class DefaultPage extends Component {
  static propTypes = {
    sales: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    data: [],
  };

  render() {

    const crud = new GenericCruder({endPoint: 'sales?_page=7&_limit=50'})
    crud.printCall()

    const { fetchSalesPending, salesList, fetchSalesListError } = this.props.sales;
    const { fetchSales } = this.props.actions;

    //FIXME: Refector it later
    let returnArray = [];
    jsonQuery('sales[**]', { data: salesList }).value.map(item => {
      if (item.saleItems.length === 1) {
        returnArray.push({ ...item.saleItems[0], invoiceNumber: item.invoiceNumber });
      } else {
        item.saleItems.map(innerItem => {
          returnArray.push({ ...innerItem, invoiceNumber: item.invoiceNumber });
        });
      }
    });

    return (
      <div className="sales-default-page">
        <SidePanel />
        <div className="examples-page-container">
          <button className="btn-fetch-reddit" disabled={fetchSalesPending} onClick={() => fetchSales(500)}>
            {fetchSalesPending ? 'Fetching...' : 'Fetch reactjs topics'}
          </button>
          {fetchSalesListError && (
            <div className="fetch-list-error">Failed to load: {fetchSalesListError.toString()}</div>
          )}
          {salesList.length > 0 ? (
            <ReactTable
              data={returnArray}
              style={{ width: '100%' }}
              columns={[
                {
                  Header: 'Produto',
                  columns: [
                    {
                      Header: 'Nota',
                      accessor: 'invoiceNumber',
                      maxWidth: 80,
                    },
                    {
                      Header: 'Produto',
                      accessor: 'product',
                      maxWidth: 80,
                    },
                    {
                      Header: 'Lote',
                      accessor: 'batch',
                      width: 120,
                    },
                    {
                      Header: 'Quantidade',
                      accessor: 'quantity',
                      width: 120,
                    },
                  ],
                },
                {
                  Header: 'Vendedor',
                  columns: [
                    {
                      Header: 'CPF/CNPJ',
                      accessor: 'seller.type',
                      width: 120,
                    },
                    {
                      Header: 'CPF/CNPJ',
                      accessor: 'seller.number',
                      width: 120,
                    },
                  ],
                },
                {
                  Header: 'Comprador',
                  columns: [
                    {
                      Header: 'CPF/CNPJ',
                      accessor: 'buyer.type',
                      width: 120,
                    },
                    {
                      Header: 'CPF/CNPJ',
                      accessor: 'buyer.number',
                      width: 120,
                    },
                  ],
                },
                {
                  Header: 'Due date',
                  columns: [
                    {
                      Header: 'Data',
                      accessor: 'dueDate.value',
                      width: 120,
                    },
                  ],
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          ) : (
            <div className="no-items-tip">No items yet.</div>
          )}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sales: state.sales,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);

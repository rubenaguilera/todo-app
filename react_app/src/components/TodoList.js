import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialTable, { MTableBodyRow, MTableToolbar } from 'material-table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import BlockUi from 'react-block-ui';
import { fetchTodos, deleteTodos } from '../actions/index';
import { todoTableStyle } from '../shared/TableStyles';
import { TODO_STATE_DONE } from '../shared/Constants';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.onRowClicked = this.onRowClicked.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  removeSelectedTodos(data) {
    const ids = data.map(todo => todo.id);
    console.log(ids);
    this.props.dispatch(deleteTodos(ids));
  }

  toggleSelectedTodos(data) {
    console.log(data);
  }

  onRowClicked(event, rowData) {
    this.props.history.push(`/todos/${rowData.id}`);
  }

  sortTodos(todos) {
    const compare = (todoA, todoB) => {
      return moment(todoA.dueDate, 'DD-MM-YYYY') < moment(todoB.dueDate, 'DD-MM-YYYY') ? 1: -1;
    };
    return todos.sort(compare);
  }

  rowOverride(props) {
    let className = '';
    if (moment(props.data.dueDate, 'DD-MM-YYYY') > moment() && props.data.state !== TODO_STATE_DONE) {
      className = 'table-row-red-highlight';
    } else if(props.data.state === TODO_STATE_DONE) {
      className = 'table-row-green-highlight';
    }

    return (
      <MTableBodyRow {...props} className={className}/>
    );
  }

  render() {
    const columns = [
      {
        title: 'ID',
        field: 'id',
        hidden: true
      },
      {
        title: 'Todo content',
        field: 'text',
        cellStyle: todoTableStyle.cellStyle.text,
        headerStyle: todoTableStyle.headerStyle.text
      },
      {
        title: 'State',
        field: 'state',
        headerStyle: todoTableStyle.headerStyle.state
      },
      {
        title: 'Due date',
        field: 'dueDate',
        headerStyle: todoTableStyle.headerStyle.dueDate
      }
    ];

    const options = {
      selection: true,
			toolbarButtonAlignment: 'left'
    };
    const actions=[
      {
        tooltip: 'Remove Selected TODOS',
        icon: 'delete',
        onClick: (evt, data) => this.removeSelectedTodos(data)
      },
      {
        tooltip: 'Toggle TODOS state',
        icon: 'cached',
        onClick: (evt, data) => this.toggleSelectedTodos(data)
      }
    ];
    const { classes } = this.props;
    return (
      <div>
        <Link to="/todos/new">
          <Fab color="primary" aria-label="Add TODO" className={classes.fab} >
            <AddIcon />
          </Fab>
        </Link>
        <BlockUi tag="div" blocking={this.props.todos.isFetching}>
          <MaterialTable
            data={this.sortTodos(this.props.todos.items)}
            columns={columns}
            title="TODOS"
            options={options}
            actions={actions}
            onRowClick={this.onRowClicked}
            components={{
              Row: this.rowOverride,
              Toolbar: props => (
                <div className={props.selectedRows.length ? 'toolbar-selected-rows' : ''}>
                  <MTableToolbar {...props}/>
                </div>
              )
            }}
          />
        </BlockUi>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
};

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(TodoList));

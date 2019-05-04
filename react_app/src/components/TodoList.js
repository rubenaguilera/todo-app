import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { fetchTodos } from '../actions/index';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class TodoList extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  removeSelectedTodos(data) {
    console.log(data);
  }

  toggleSelectedTodos(data) {
    console.log(data);
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
        field: 'text'
      },
      {
        title: 'State',
        field: 'state'
      },
      {
        title: 'Due date',
        field: 'dueDate'
      }
    ];

    const options = {
      selection: true
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
        <MaterialTable
          data={this.props.todos.items}
          columns={columns}
          isLoading={this.props.todos.isFetching}
          title="TODOS"
          options={options}
          actions={actions}
        />
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

import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchTodos } from '../actions/index';

class TodoList extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  removeSelectedTodos(data) {
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
        field: 'due_date'
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
      }
    ];
    return (
      <div>
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

export default connect(mapStateToProps)(TodoList);

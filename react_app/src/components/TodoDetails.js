import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import BlockUi from 'react-block-ui';
import { fetchTodo, cleanSelectedTodo } from '../actions/index';

class TodoDetails extends React.Component {
	constructor(props) {
		super(props);
		const id = this.props.match.params.id;
		this.props.dispatch(fetchTodo(id));

		this.redirectToList = this.redirectToList.bind(this);
	}

	redirectToList() {
		this.props.history.push('/todos');
	}

	componentWillUnmount() {
		this.props.dispatch(cleanSelectedTodo());
	}

	render() {
		return (
			<Grid container spacing={8} justify="center">
				<Grid item xs={12} lg={4}>
					<Card>
						<BlockUi tag="div" blocking={!this.props.todo.text}>
							<CardContent className="form-card">
								<Typography variant="h4" gutterBottom className="title-centered">
									TODO Details
								</Typography>
								<Divider/>
								{
									this.props.todo.text ? (
										<form noValidate autoComplete="off">
											<Grid container spacing={0}>
												<Grid item xs={12}>
													<TextField
														id="text"
														label="TODO content"
														multiline
														rows="3"
														defaultValue={this.props.todo.text}
														margin="normal"
														variant="outlined"
														fullWidth
														disabled
													/>
												</Grid>
												<Grid item xs={8} lg={4} md={6}>
													<TextField
														id="text"
														label="Due date"
														defaultValue={this.props.todo.dueDate}
														margin="normal"
														variant="outlined"
														fullWidth
														disabled
													/>
												</Grid>
											</Grid>
										</form>
									) : (
										<div style={{height: '200px'}}>

										</div>
									)
								}
							</CardContent>
						</BlockUi>
						<CardActions>
							<Grid container spacing={0} justify="flex-end">
								<Button size="small" color="primary" onClick={this.redirectToList}>
									Back to List
								</Button>
							</Grid>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todo: state.selectedTodo,
		isFetching: state.isFetching
	}
};

export default connect(mapStateToProps)(TodoDetails);
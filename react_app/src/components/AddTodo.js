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
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { saveTodo } from '../actions/index';
import { TODO_STATE_TODO } from '../shared/Constants';

class AddTodo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: null,
			state: TODO_STATE_TODO
		};

		this.redirectToList = this.redirectToList.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleDateChange(date) {
		this.setState({ dueDate: date.format('DD-MM-YYYY') });
	}

	saveTodo() {
		this.props.dispatch(saveTodo(this.state));
		this.redirectToList();
	}

	redirectToList() {
		this.props.history.push('/todos');
	}

	render() {
		return(
			<Grid container spacing={8} justify="center">
				<Grid item xs={12} lg={4}>
					<Card>
						<CardContent className="form-card">
							<Typography variant="h4" gutterBottom className="title-centered">
								Add TODO
							</Typography>
							<Divider/>
							<form noValidate autoComplete="off">
								<Grid container spacing={0}>
									<Grid item xs={12}>
										<TextField
											id="text"
											name="text"
											label="TODO content"
											multiline
											rows="3"
											value={this.state.text}
											onChange={(event) => this.handleInputChange(event)}
											margin="normal"
											variant="outlined"
											fullWidth
										/>
									</Grid>
									<Grid item xs={8} lg={4} md={6}>
										<MuiPickersUtilsProvider utils={MomentUtils}>
											<DatePicker
												margin="normal"
												label="Due date"
												format="DD-MM-YYYY"
												value={this.state.dueDate}
												onChange={(date) => this.handleDateChange(date)}
												variant="outlined"
												fullWidth
											/>
										</MuiPickersUtilsProvider>
									</Grid>
								</Grid>
							</form>
						</CardContent>
						<CardActions>
							<Grid container spacing={0} justify="flex-end">
								<Button size="small" color="primary" onClick={this.saveTodo}>
									Save
								</Button>
								<Button size="small" color="primary" onClick={this.redirectToList}>
									Cancel
								</Button>
							</Grid>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		);
	}
}


export default connect()(AddTodo);
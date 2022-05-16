import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../apiRequests/apiCalls';
import './Review.css'


class Review extends Component {

	handleOnClick = event => {
		event.preventDefault()
		this.props.deleteReview(this.props.review.id)
	}

	render() {
		
		return (
			<div>
				<br></br><br></br>
				<li>
					{this.props.review.content}
				</li>
				{/* <button onClick={this.handleOnClick}>Delete</button> */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<button onClick={this.handleOnClick} class="btn"><i class="fa fa-trash"></i></button>

			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	deleteReview: id => dispatch(deleteReview(id)) 
})

export default connect(null, mapDispatchToProps)(Review)

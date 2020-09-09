import React from "react";
import "../css/cards.css";
import { Row, Col } from "react-bootstrap";
{/*adding className to col makes div with class col which changes the formatting*/}

class ShowCoach extends React.Component {
	state = { stateCoach: {} };

	componentDidMount() {
		fetch(`http://localhost:3000/coaches/${this.props.match.params.id}`)
			.then((resp) => resp.json())
			.then((coach) => this.setState({ stateCoach: coach }));
	}

	render() {
		return (
			<div className="bg-format cf-ambience">
				<Row>
					<Col
						style={{
							paddingBottom: "50px",
							marginTop: "50px",
							marginLeft: "50px",
						}}
					>
						<img
							src={this.state.stateCoach.picture}
							alt="Foster Fitness Coach"
							width="500"
							height="500"
						/>
					</Col>
					<Col
						style={{
							paddingTop: "50px",
							backgroundColor: "rgba(0,0,0,.5)",
						}}
					>
						<h3 className="gym-text">
							{this.state.stateCoach.name}
						</h3>
						<p className="gym-text">{this.state.stateCoach.bio}</p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ShowCoach;

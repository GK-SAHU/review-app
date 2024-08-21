import { Component } from "react";

import "./index.css";

class ReviewApp extends Component {
  state = {
    activereviews: 0,
  };

  displayRecentReviw = (recentReview) => {
    const { imgUrl, username, companyName, description } = recentReview;
    return (
      <div className="rev-container">
        <img src={imgUrl} alt="" />
        <h1 className="username">{username}</h1>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    );
  };

  onClickLeftSide = () => {
    const { activereviews } = this.state;
    if (activereviews > 0) {
      this.setState((prevState) => ({
        activereviews: prevState.activereviews - 1,
      }));
    }
  };

  onClickRightSide = () => {
    const { activereviews } = this.state;
    const { reviewsList } = this.props;

    if (activereviews < reviewsList.length - 1) {
      this.setState((prevState) => ({
        activereviews: prevState.activereviews + 1,
      }));
    }
  };

  render() {
    const { activereviews } = this.state;
    const { reviewsList } = this.props;
    const recentReview = reviewsList[activereviews];
    return (
      <div className="reviw-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftSide}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.displayRecentReviw(recentReview)}
          <button
            type="button"
            className="button"
            onClick={this.onClickRightSide}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}
export default ReviewApp;

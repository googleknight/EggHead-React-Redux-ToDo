import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { Header } from '../Header/Header';
import Board from '../Board/Board';
import PanelList from '../PanelList/PanelList';
import { GoToHomePageAction, getNotes } from '../../redux/actions';
import './Container.css';

class Container extends React.Component {
  componentDidMount() {
    axios.get('/notes').then((notes) => {
      this.props.getNotes(notes.data);
    });
  }
  render() {
    if (this.props.homepage) {
      return (
        <div
          className="App-Container"
        >
          <Header>
            <h3>Start taking notes</h3>
          </Header>
          <Board />
          <Header>
            <h3>About Us</h3>
          </Header>
        </div>
      );
    }
    return (
      <div className="App-Container">
        <Header>
          <h3>Saved Notes</h3>
        </Header>
        <PanelList />
        <Header>
          <button
            className="Container-createnewnote-button"
            onClick={this.props.goToHomePage}
          >Create new Note
          </button>
        </Header>
      </div>
    );
  }
}


Container.propTypes = {
  homepage: PropTypes.bool,
  goToHomePage: PropTypes.func.isRequired,
  getNotes: PropTypes.func.isRequired,
};

Container.defaultProps = {
  homepage: true,
};


const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(GoToHomePageAction()),
  getNotes: notes => dispatch(getNotes(notes)),
});
const mapStateToProps = state => ({
  homepage: state.notes.homepage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

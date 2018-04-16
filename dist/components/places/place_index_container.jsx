import PlaceIndex from "./place_index";
import { connect } from 'react-redux';
import {
  fetchFavorites,
  deleteFavorite,
  subscribeToUpdater } from "../../actions/place_actions";
import { fetchLocation } from '../../actions/location_actions';

const mapStateToProps = (state) => {

  let places = Object.keys(state.places).map((id) => {
    return state.places[id]
  })

  return {
    places
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    subscribeToUpdater: () => dispatch(subscribeToUpdater()),
    fetchLocation: () => dispatch(fetchLocation()),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceIndex);

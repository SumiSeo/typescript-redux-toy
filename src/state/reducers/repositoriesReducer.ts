import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositioriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositioriesState,
  action: Action
): RepositioriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      //as soon as user clicks search button
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

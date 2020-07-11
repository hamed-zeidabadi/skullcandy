import data from "../Data/data";
import _ from "lodash";

const initialState = {
  data: data,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      const newDATA = _.orderBy(data, ["like"], ["desc"]);
      return {
        data: newDATA,
      };

    default:
      return state;
  }
};

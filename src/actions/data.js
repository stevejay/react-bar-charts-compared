import _ from "lodash";

export const types = {
  DATA_UPDATED: "DATA_UPDATED"
};

export const barChartDataUpdated = people => ({
  type: "DATA_UPDATED",
  payload: people
});

const PEOPLE = ["Arthur", "Bob", "Charlie", "Dave", "Elsie", "Fred", "Grant"];

export const updateBarChartData = updateType => (dispatch, getState) =>
  new Promise(resolve => {
    const existingPeople = getState().data.people;
    const maxRandomValue = _.random(1) === 0 ? 50 : 100;

    let people = null;

    if (updateType === "values" && !_.isEmpty(existingPeople)) {
      people = existingPeople.map(datum => ({
        ...datum,
        value: _.random(maxRandomValue)
      }));
    } else {
      people = _.take(_.shuffle(PEOPLE), 5).map(name => ({
        key: name,
        value: _.random(maxRandomValue)
      }));
    }

    dispatch(barChartDataUpdated(people));
    resolve();
  });

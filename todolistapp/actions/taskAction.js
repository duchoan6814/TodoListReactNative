import dataMock from '../dataMock';
export const getDataToday = () => (dispatch) => {
  dispatch({
    type: 'FETCH_DATA',
    payload: dataMock,
  });
};

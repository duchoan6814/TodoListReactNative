import dataMock from '../dataMock';
export const getDataToday = () => (dispatch) => {
  dispatch({
    type: 'FETCH_DATA',
    payload: dataMock,
  });
};

export const deleteData = (id) => (dispatch) => {
  dispatch({
    type: 'DELETE_DATA',
    payload: id,
  });
};

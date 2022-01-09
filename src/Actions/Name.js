import MyStore from "../ReduxStore/MyStore";

const nameAction = (nameData) => {
  //alert(nameData);
  MyStore.dispatch({
    type: "Name",
    payload: nameData,
  });
};
export default nameAction;

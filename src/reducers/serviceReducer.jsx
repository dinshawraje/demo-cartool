const serviceReducer = (state = [], action) => {
    switch (action.type) {
  
      case 'ADD_SERVICE':
        return state.concat([action.data]);
      case 'DELETE_SERVICE':
        return state.filter((service) => service.id !== action.id);
      case 'EDIT_SERVICE':
        return state.map((service) => service.id === action.id ? { ...service, editing: !service.editing } : service)
      case 'UPDATE':
        return state.map((service) => {
          console.log(' updated data' + service)
          console.log('action details' + JSON.stringify(action))
          let newData = action.data
          if (service.id === action.id) {
            return {...service,...newData}
            
          } else return service;
        })
      default:
        return state;
    }
  }
  export default serviceReducer;
  
import Axios from 'axios';

const RESOURCE_NAME = '/GetManufacturers';

export default {
  getManufacturers () {
    return Axios.get(RESOURCE_NAME);
  },

  getModelsByManufacturerId (manId) {
    return Axios.get('/GetModelsByManufacturer', {params: { manufacturerId: manId }});
  },

  deleteOwner (manId) {
    console.log('service done: deleted', manId);
    return Axios.get('/GetModelsByManufacturer', {params: { manufacturerId: manId }});
  },

  create () {
    console.log('service done: created');
    return Axios.get(RESOURCE_NAME);
  },

  update (manId, formData) {
    console.log('service done: updated:', manId, formData);
    return Axios.get(RESOURCE_NAME);
  },

  get (manId) {
    console.log('service done: got:', manId);
    return Axios.get('/GetModelsByManufacturer', {params: { manufacturerId: manId }});
  }

};

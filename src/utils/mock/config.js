import AxiosMockAdapter from 'axios-mock-adapter';
import { mockAxios } from 'utils/api';

const mock = new AxiosMockAdapter(mockAxios, { delayResponse: 200 });

export default mock;

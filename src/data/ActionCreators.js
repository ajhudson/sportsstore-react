import { ActionTypes} from "./Types";
//import { data as phData} from "./placeholderData";
import { RestDataSource } from './RestDatasource';

const datasource = new RestDataSource();

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: datasource.GetData(dataType).then(response => ({ dataType, data: response.data}))
});

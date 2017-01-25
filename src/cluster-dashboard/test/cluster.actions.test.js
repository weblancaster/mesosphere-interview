import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
    SET_CLUSTER
} from '../../shared/constants';
import {
    startNewCluster,
    setCluster,
    addNewCluster,
    removeLastCluster
} from '../cluster.actions';

describe('cluster-dashboard', () => {
    it('handles startNewCluster action', () => {
        const expectedAction = {
            available: true
        };

        expect(startNewCluster()).toEqual(expectedAction);
    });

    it('handles setCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [
                {
                    available: true
                }
            ]
        };

        expect(setCluster([{
            available: true
        }])).toEqual(expectedAction);
    });

    it('handles addNewCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [
                {
                    available: true
                },
                {
                    available: true
                }
            ]
        };
        const store = mockStore({
            cluster: {
                clusters: [{
                    available: true
                }]
            }
        });

        store.dispatch(addNewCluster());

        expect(store.getActions()[0]).toEqual(expectedAction);
        // expect(store.getState().cluster.clusters.length).toEqual(2);
    });

    it('handles removeLastCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [
                {
                    available: true
                }
            ]
        };
        const store = mockStore({
            cluster: {
                clusters: [
                    {available: true},
                    {available: true}
                ]
            }
        });

        store.dispatch(removeLastCluster());

        expect(store.getActions()[0]).toEqual(expectedAction);
        // expect(store.getState().cluster.clusters.length).toEqual(1);
    });
});

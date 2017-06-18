import expect from 'unexpected';
import reducer from '../reducer';
import { update } from '../actions';

describe('ReduxTest reducer', () => {
  it('updates lastUpdate', () => {
    const lastUpdate = String(new Date());

    const stateBefore = {};
    const action = update(lastUpdate);
    const stateAfter = { lastUpdate };

    expect(reducer(stateBefore, action), 'to equal', stateAfter);
  });
});

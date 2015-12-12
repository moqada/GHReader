import assert from 'power-assert';
import sinon from 'sinon';
import * as actions from '../../src/actions/app';


describe('actions/app', () => {
  let sandbox = null;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('init()', () => {
    const clock = sandbox.useFakeTimers();
    const spy = sandbox.spy();
    actions.init()(spy);
    clock.tick(3001);
    assert(spy.args.length === 2);
    assert.deepEqual(spy.args[0], [{type: '@@GHREADER/APP/INIT'}]);
    assert.deepEqual(spy.args[1], [{type: '@@GHREADER/APP/INITIALIZED'}]);
  });
});

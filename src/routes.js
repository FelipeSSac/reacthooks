import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import UseState from './Lessons/UseState';
import UseEffect from './Lessons/UseEffect';
import UseContext from './Lessons/UseContext';
import UseReducer from './Lessons/UseReducer';
import UseCallback from './Lessons/UseCallback';
import UseMemo from './Lessons/UseMemo';
import UseRef from './Lessons/UseRef';
import UseImperativeHandle from './Lessons/UseImperativeHandle';
import UseLayoutEffect from './Lessons/UseLayoutEffect';
import CustomHooks from './Lessons/CustomHooks';
import UseDebugValue from './Lessons/UseDebugValue';

const routes = [
  { path: '/', name: 'useState' },
  { path: '/useeffect', name: 'useEffect' },
  { path: '/usecontext', name: 'useContext' },
  { path: '/usereducer', name: 'useReducer' },
  { path: '/usecallback', name: 'useCallback' },
  { path: '/usememo', name: 'useMemo' },
  { path: '/useref', name: 'useRef' },
  { path: '/useimperativehandle', name: 'useImperativeHandle' },
  { path: '/uselayouteffect', name: 'useLayoutEffect' },
  { path: '/customhooks', name: 'CustomHooks' },
  { path: '/usedebugvalue', name: 'useDebugValue' }
]

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UseState} />
        <Route path="/useeffect" component={UseEffect} />
        <Route path="/usecontext" component={UseContext} />
        <Route path="/usereducer" component={UseReducer} />
        <Route path="/usecallback" component={UseCallback} />
        <Route path="/usememo" component={UseMemo} />
        <Route path="/useref" component={UseRef} />
        <Route path="/useimperativehandle" component={UseImperativeHandle} />
        <Route path="/uselayouteffect" component={UseLayoutEffect} />
        <Route path="/customhooks" component={CustomHooks} />
        <Route path="/usedebugvalue" component={UseDebugValue} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
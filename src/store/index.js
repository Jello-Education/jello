import React from 'react';

import * as actions from '../actions';
import initial from '../states/initial.state';
import useGlobalHook from './useGlobalHook';

const useGlobal = useGlobalHook(React, initial, actions);

export default useGlobal;

import mixpanel from 'mixpanel-browser';
import { mixpanelToken, env } from '../resources/config';

const Mixpanel = () => {
  if (mixpanelToken) mixpanel.init(mixpanelToken);

  const envCheck = env === 'production' || env === 'staging';

  const actions = {
    identify: (id) => {
      if (envCheck && mixpanel.identify) mixpanel.identify(id);
      else () => {};
    },
    alias: (id) => {
      if (envCheck && mixpanel.alias) mixpanel.alias(id);
      else () => {};
    },
    track: (name, props) => {
      if (envCheck && mixpanel.track) mixpanel.track(name, props);
      else () => {};
    },
    people: {
      set: (props) => {
        if (envCheck && mixpanel.people) mixpanel.people.set(props);
        else () => {};
      },
    },
  };

  return actions;
};

export default Mixpanel;

import requester from '../resources/requester';
import setToast from '../utils/toast.utils';

export const getTrackChapters = async (store, trackId) => {
  store.actions.setInStore('track', 'isLoading', true);
  const [error, response] = await requester(
    'GET',
    `/v1/public/tracks/${trackId}/chapters`
  );
  if (error) {
    setToast('error', 'getTrackChaptersError');
  } else {
    store.actions.setInStore('track', 'trackChapters', response.data);
  }
  store.actions.setInStore('track', 'isLoading', false);
};

export const getVideoPartnerId = (videoUrl) => {
  if (videoUrl.includes('youtube')) return ['youtube', videoUrl.split('v=')[1]];
  if (videoUrl.includes('youtu.be'))
    return ['youtube', videoUrl.split('youtu.be/')[1]];
  if (videoUrl.includes('vimeo'))
    return ['vimeo', videoUrl.split('vimeo.com/')[1]];
  return '';
};

export default null;

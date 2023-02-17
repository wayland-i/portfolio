export function getDeviceType(req) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return /mobile/i.test(userAgent) ? 'mobile' : 'desktop';
  }
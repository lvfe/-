const webpush = require('web-push');

// push的数据
const payload = {
  title: '一篇新的文章',
  body: '点开看看吧',
  icon: 'xx', // 图片链接
  data: {
    url: 'www.baidu.com'
  }
}

const vapidKeys = {
  publicKey: 'BKzIIoV8RgBqSlOZ5GMle3OY6rZoB-aaoRxldWN8jn5MZOXbtH5tFTchxDRW1jTSLTCOdNPfyk4Yszx0Lk1Clts',
  privateKey: 'm5rk4Cann9l5pp7TiLPuNmL2Ho_zmIvgM3wz07EZSSs'
}

const pushSubScription = {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeaki7zwcdJ8r-2PZhwjyeCkHN3GaFAI4NQP8awz3e5svu0xDP6Peanq7iNTRd6S8weseu8JGpJDmLF1V2CcSZRExeWfLt0p5ksuNvCQmYnC4Bwy6wBzUGt-yQRAQMdq9_RKsEnadYfWAQt6LHENfaUr0gKcJJcj1Jb6vGfel-eqjEmjE",
  "keys": {
    "auth": "QyYLx2m29E-3a5kXzqdIDg",
    "p256dh": "BEX1qgwC7MIRw-Vck7wsQPw5M8CIhkQ6thqs5ZwmPkXYy1zF-7sXvKE9hxeZtlm1rHd5lpvpjJf3q26rJje8zUc"
  }
}
webpush
  .sendNotification(pushSubScription, JSON.stringify(payload), {
    vapidDetails: {
      subject: 'mailto:18223306087@163.com',
      ...vapidKeys,
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err)
  })

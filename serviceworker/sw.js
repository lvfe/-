const version =  '0.0.1';
const cachekey = 'connie-cache';
const self = this;
this.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cachekey)
        .then(cache=>{
            return cache.addAll(['/', '/index.html'])
        })
    );
})
this.addEventListener('activate', function(event){
    console.log('activate');
    event.waitUntil(
        Promise.all([
            // update client  
          
            // self.ClientRectList.claim(),
            // clear old version
            caches.keys().then(cacheList=>{
                return Promise.all(cacheList.map(cacheName=>{
                    if(cacheName!==cachekey){
                        return caches.delete(cacheName);
                    }
                }))
            })
        ])
    );
})
this.addEventListener('fetch', (event)=>{
    console.log('fetch');
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            console.log('get fetch');
        // 如果 service worker有自己的放回，就直接返回，减少一次http请求
            if (response) {
                return response;
            }
            // 如果service worker没有返回，那就直接请求真实远程服务
            var request = event.request.clone();
            return fetch(request)
                .then((res) => {
                    console.log(res, 8888);
                    // 请求失败，直接返回失败的结果
                    if (!res || res.status !== 200) {
                        return res;
                    }
                    
                    // 请求成功的话，将请求缓存起来
                    var respondClone = res.clone;
                    caches
                        .open(cachekey)
                        .then((cache) => {
                            cache.put(event.request, respondClone)
                        })
                    return res;
                })
        })
    )
})
this.addEventListener('push', function(event){
    console.log('push');
    const title = 'push work';
    event.waitUntil(self.ServiceWorkerRegistration.showNotifaction(title))
});
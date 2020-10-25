//类似模块
const imgFun = (function(){
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function(src){
            imgNode.src= src;
        }
    }
})();
const proxyImage = (function(){
    const img = new Image();
    img.onload = function(){
        imgFun.setSrc(this.src);
    }
    return {
        setSrc: function(src){
            imgFun.setSrc('./loading.png');
            img.src= src;
        }
    };
})();
proxyImage.setSrc('/pic.png');
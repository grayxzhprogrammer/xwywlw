export default function MapLoader () {
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap)
        } else {
            var url = 'https://webapi.amap.com/maps?v=1.4.15&key=[4f7aea358fc1f724015adb69b9cf8303]&callback=onLoad'
            var script = document.createElement('script')
            script.charset = 'utf-8'
            script.src = url
            script.onerror = reject
            document.head.appendChild(script)
        }
        window.onLoad = () => {
            resolve(window.AMap)
        }
    });
}

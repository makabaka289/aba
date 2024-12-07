// 替换为你的 API Key 和城市 ID
const apiKey = "418c4e4749ff42928fc413bc96e92103";  // 你的 API Key
const cityId = "101090101";  // 北京的城市 ID

// 通过城市 ID 获取天气信息
function getWeather() {
    const weatherUrl = `https://devapi.qweather.com/v7/weather/now?location=${cityId}&key=${apiKey}`;

    // 请求天气数据
    fetch(weatherUrl)
        .then(response => response.json())  // 解析 JSON 数据
        .then(data => {
            // 检查 API 返回的数据是否有效
            if (data.code === "200" && data.now) {
                const weatherText = data.now.text;  // 天气描述
                const temperature = data.now.temp;  // 当前温度
                const feelsLike = data.now.feelsLike;  // 体感温度

                // 更新网页上的天气信息
                document.getElementById("weather").textContent = 
                    `天气：${weatherText} | 温度：${temperature}°C | 体感温度：${feelsLike}°C`;
            } else {
                document.getElementById("weather").textContent = "天气信息获取失败，请稍后再试。";
            }
        })
        .catch(error => {
            console.error("天气请求失败：", error);
            document.getElementById("weather").textContent = "无法连接到天气服务，请检查网络。";
        });
}

// 页面加载时调用获取天气的函数
window.addEventListener('load', function() {
    getWeather();
});



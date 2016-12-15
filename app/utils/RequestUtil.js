/**
 * Created by jian on 16-12-13.
 */

const HOST = 'http://apis.baidu.com/';

// get方法
export async function get(urlKey, params = {}) {
    return await request(urlKey, 'GET', params);
}

// post方法
export async function post(urlKey, params = {}) {
    return await request(urlKey, 'POST', params);
}

// 上传


// 下载

// 断点续传

// 基层请求api
async function request(urlKey, method, params = {}) {
    let url;
    if(!urlKey) {
        throw new Error('请求错误，地址不能为空!');
    }
    url = HOST + urlKey;

    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': method === "GET" ? "application/json" : "application/x-www-form-urlencoded"
        }
    };

    if(method == "POST" || method == "PUT") {
        let bodyString = "";
        for(let param in params) {
            bodyString += (param + "=" + encodeURIComponent(params[param]) + "&");
        }
        options = {...options, body: bodyString.substring(0, bodyString.length - 1)};
    }

    try{
        const response = await fetch(url, options);
        if(response.ok) {
            const json = await response.text();
            const jsonObj = JSON.parse(json);
            
            if(!jsonObj) {
                throw new Error("unknown json", json);
            }

            return jsonObj;
        }
    }
    catch(error) {
        throw error;
    }

}
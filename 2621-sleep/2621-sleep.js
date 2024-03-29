/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

const genericResponse = (code,message,data,metadata)=>{
    return {
        code: code,
        message : message,
        data : data,
        metadata : metadata
    }

};

module.exports = {
    genericResponse
}
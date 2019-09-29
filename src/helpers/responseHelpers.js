exports.SuccessResponse = class SuccessResponse {
    constructor (build) {
        this.code = 0;
        this.msg = 'Success';
        this.records = build.records;
    }
    static get Builder () {
        class Builder {
            withRecords (records) {
                this.records = records;
                return this
            }
            build () {
                return new SuccessResponse(this)
            }
        }
        return Builder
    }
}

exports.FailResponse = class FailResponse {
    constructor (build) {
        this.code =  build.code;
        this.msg = build.msg;
    }
    static get Builder () {
        class Builder {
            withError (code,msg) {
                this.code = code;
                this.msg = msg;
                return this
            }
            build () {
                return new FailResponse(this)
            }
        }
        return Builder
    }
}
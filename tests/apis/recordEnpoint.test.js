import jest from "jest";
import services from '../../src/services/index'
import {getRecords} from '../../src/apis/recordEndpoint'

const mockRequest = (query) => ({
    query
});

const mockResponse = () => {
    const res = {};
    res.response = "";
    res.status = () => res;
    res.json = (resp) => {
        res.response = resp
        return res;
    }
    return res;
};

const mockGetRecords = () => {
    return [
            {"key":"TAKwGc6Jr4i8Z487", "createdAt":"2017-01-28T01:22:14.398Z", "totalCount":2800},
            {"key":"NAeQ8eX7e5TEg7oH", "createdAt":"2017-01-27T08:19:14.135Z", "totalCount":2900}
        ];
};

describe('apis recordEndpoint', () => {
    test('should it returns successfully', async () => {
        const req = mockRequest({ startDate: '2016-01-01', endDate: '2019-01-01', minCount:0, maxCount: 1000 });
        const res = mockResponse();
        services.getRecords = mockGetRecords;
        const records = await getRecords(req, res);
        expect(records.response.code).toBe(0);
        expect(records.response.msg).toBe('Success');
        expect(records.response.records.length).toBe(2);
        expect(records.response.records[0].key).toBe("TAKwGc6Jr4i8Z487");
        expect(records.response.records[1].key).toBe("NAeQ8eX7e5TEg7oH");
    });
});
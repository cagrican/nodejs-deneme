import jest from "jest";
import {getRecords} from '../../src/services/records/getRecords'
import mockingoose from 'mockingoose';
import Record from '../../src/models/Record';

describe('services records getrecords', () => {
    test('should it fetch records from mongoose', async () => {

        //when
        mockingoose(Record).toReturn([
            {
                "key":"TAKwGc6Jr4i8Z487", "createdAt":"2017-01-28T01:22:14.398Z", "totalCount":2800
            },
            {
                "key":"NAeQ8eX7e5TEg7oH", "createdAt":"2017-01-27T08:19:14.135Z", "totalCount":2900
            }
        ], 'aggregate');

        //given
        const records = await getRecords();

        //then
        expect(records.length).toBe(2);
        expect(records[0].key).toBe("TAKwGc6Jr4i8Z487");
        expect(records[1].key).toBe("NAeQ8eX7e5TEg7oH");

    });
});
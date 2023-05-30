import { assert } from 'chai'
import { getDatetimeString } from './timeUtils';

describe('#timestampToDatetimeString(number)', () => {
    it('should return datetime string', () => {
        const now = new Date().getTime()
        const datetimeString = getDatetimeString(now)
        assert.equal(typeof datetimeString, 'string');
    });
});

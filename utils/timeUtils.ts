import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Seoul')

export function getDatetimeString(timestamp?: number) {
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss.SSS');
}

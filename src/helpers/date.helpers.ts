import moment from 'moment';

export const getHours = (date: Date): number => {
    return moment(date).hours();
};

export const formatDate = (date: Date | string): string => {
    return moment(date).format('YYYY-MM-DD HH:00:00')
};

export const getCurrentWeekDays = (): string => {
    const weekStart = moment(new Date()).format('MMMM DD');
    const weekEnd = moment(weekStart).add(7, 'days').format('DD');

    return `${weekStart} - ${weekEnd}`;
};

export const getDayShorthand = (date: Date, daysToAdd: number): string => {
    return moment(date).add(daysToAdd - 1, 'day').format('ddd');
}; 

export const today = moment().format('ddd');

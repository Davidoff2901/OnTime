export function dateFormat(dateString: string): { year: number; month: string; day: number } {
    const date = new Date(dateString);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return {
        year: date.getFullYear(),
        month: monthNames[date.getMonth()],
        day: date.getDate()
    };
}
class Utils {
    static formatDateToString(dateTime: Date): string {
      const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day: number = dateTime.getDate();
      const month: string = months[dateTime.getMonth()];
      const year: number = dateTime.getFullYear();
  
      return `${day} ${month} ${year}`;
    }

    static getDateRelativeToNow(offsetDays: number): Date {
        const now: Date = new Date();
        const newDate: Date = new Date(now);
        newDate.setDate(now.getDate() + offsetDays);
        return newDate;
      }
  }
  
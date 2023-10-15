class utilDate {
  getYears() {
    const years = [];
    for (let i = 1900; i < 2100; i++) {
      years.push(i);
    }
    return years;
  }

  getMonthNames(locale = undefined) {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      dates.push(new Date(2000, i, 15));
    }
    const dtf = new Intl.DateTimeFormat(locale, { month: "long" });
    return dates.map((d) => ({ text: dtf.format(d), value: d.getMonth() }));
  }

  getWeekdayNames(locale = undefined) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const dt = new Date(2000, 0, i + 1);
      dates[dt.getDay()] = dt;
    }
    const dtf = new Intl.DateTimeFormat(locale, { weekday: "short" });
    return dates.map((d) => dtf.format(d));
  }

  getStringDate(date: Date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}

export default new utilDate();

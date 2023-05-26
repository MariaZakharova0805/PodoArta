const startDate = new Date(2016, 0, 1);
const currentDate = new Date();
const startYear = startDate.getFullYear();
const currentYear = currentDate.getFullYear();

export const yearsPassed = currentYear - startYear;

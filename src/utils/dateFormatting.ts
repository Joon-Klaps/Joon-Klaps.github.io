type DateInput = Date | string | number | null | undefined;

function normalizeDate(input: DateInput): Date | null {
  if (input === null || input === undefined) {
    return null;
  }

  const date = input instanceof Date ? input : new Date(input);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatMonthYear(input: DateInput, locale: string = "default"): string {
  const date = normalizeDate(input);
  if (!date) {
    return "";
  }

  return date.toLocaleString(locale, { month: "long", year: "numeric" });
}

export interface FormatDateRangeOptions {
  locale?: string;
  separator?: string;
  showPresentLabel?: boolean;
  presentLabel?: string;
}

export function formatDateRange(
  startDateInput?: DateInput,
  endDateInput?: DateInput,
  options: FormatDateRangeOptions = {},
): string {
  const locale = options.locale ?? "default";
  const separator = options.separator ?? " – ";
  const showPresentLabel = options.showPresentLabel ?? false;
  const presentLabel = options.presentLabel ?? "Present";

  const startDate = normalizeDate(startDateInput);
  const endDate = normalizeDate(endDateInput);

  if (!startDate && !endDate) {
    return "";
  }

  if (startDate && endDate) {
    const startLabel = formatMonthYear(startDate, locale);
    const endLabel = formatMonthYear(endDate, locale);
    return startLabel === endLabel ? startLabel : `${startLabel}${separator}${endLabel}`;
  }

  if (startDate) {
    const startLabel = formatMonthYear(startDate, locale);
    if (showPresentLabel) {
      return `${startLabel}${separator}${presentLabel}`;
    }
    return startLabel;
  }

  return formatMonthYear(endDate, locale);
}

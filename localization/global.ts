/**
 * Localization strings that are shared across components or that are used
 * in the Header or UserTools menu
 *
 * @module
 */

import { strip } from '../lib/localizationHelper';
import { createDictionary } from './utils';

// Refer to "Guidelines for Programmers" in ./README.md before editing this file

export const globalText = createDictionary({
  title: { 'en-us': 'Project Ephemeris' },
  siteDescription: {
    'en-us': strip(`Ephemeris is a web-based calendar application`),
  },
  keywords: { 'en-us': strip(`Project Ephemeris, Max Patiiuk`) },
  author: { 'en-us': 'Max Patiiuk' },
  returnToHomePage: { 'en-us': '← Return to homepage' },
  opensInNewTab: { 'en-us': '(opens in new tab)' },
  calendars: { 'en-us': 'Calendars' },
  calendar: { 'en-us': 'Calendar' },
  notFoundPageHeader: { 'en-us': 'Oops! Nothing was found' },
  notFoundPageMessage: {
    'en-us': `The page you are looking for might have been removed,
    had its name changed or is temporarily unavailable.`,
  },
  unexpectedError: { 'en-us': 'Unexpected Error' },
  reload: { 'en-us': 'Reload' },
  previousPage: { 'en-us': 'Previous page' },
  unexpectedErrorHasOccurred: { 'en-us': 'An unexpected error has occurred.' },
  today: { 'en-us': 'Today' },
  day: { 'en-us': 'Day' },
  week: { 'en-us': 'Week' },
  month: { 'en-us': 'Month' },
  year: { 'en-us': 'Year' },
  daysOfWeek: { 'en-us': 'SMTWTFS' },
  daysOfWeekEurope: { 'en-us': 'MTWTFSS' },
  loading: { 'en-us': 'Loading' },
  errorBoundaryDialogHeader: { 'en-us': 'Unexpected error has occurred' },
  errorBoundaryDialogMessage: {
    'en-us': 'Please reload the page and try again.',
  },
  errorMessage: { 'en-us': 'Error message:' },
  close: { 'en-us': 'Close' },
  edit: { 'en-us': 'Edit' },
  name: { 'en-us': 'Name' },
  description: { 'en-us': 'Description' },
  color: { 'en-us': 'Color' },
  cancel: { 'en-us': 'Cancel' },
  save: { 'en-us': 'Save' },
  add: { 'en-us': 'Add' },
  myCalendar: { 'en-us': 'My calendar' },
  next: { 'en-us': 'Next' },
  previous: { 'en-us': 'Previous' },
  delete: { 'en-us': 'delete' },
  from: { 'en-us': 'From' },
  till: { 'en-us': 'Till' },
  deleteOccurrenceDialogTitle: { 'en-us': 'Delete event?' },
  deleteOccurrenceDialogMessage: {
    'en-us': 'Are you sure you want to delete this event?',
  },
  repeatsEvery: { 'en-us': 'Repeats every:' },
  repeatsFor: { 'en-us': 'Repeats for:' },
  createEvent: { 'en-us': 'Create Event' },
  startTime: { 'en-us': 'Start time' },
  endTime: { 'en-us': 'End time' },
  weeks: { 'en-us': 'weeks' },
  time: { 'en-us': (city: string) => `${city} Time` },
  search: { 'en-us': 'Search' },
  recurring: { 'en-us': 'Recurring' },
  eventCount: { 'en-us': 'Total events:' },
});

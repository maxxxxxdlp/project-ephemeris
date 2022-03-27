import type { Calendar } from '../lib/datamodel';
import { toggleItem } from '../lib/helpers';
import type { RA } from '../lib/types';
import { globalText } from '../localization/global';
import { Input, Label, Link, Ul } from './Basic';

export function CalendarList({
  calendars,
  enabledCalendars,
  onChange: handleChange,
}: {
  readonly calendars: RA<Calendar> | undefined;
  readonly enabledCalendars: RA<number>;
  readonly onChange: (enabledCalendars: RA<number>) => void;
}): JSX.Element {
  return (
    <section>
      <div className="flex">
        <h2 className="flex-1">{globalText('calendars')}</h2>
        <Link.Icon
          href="/settings/calendars"
          icon="cog"
          aria-label={globalText('edit')}
          title={globalText('edit')}
        />
      </div>
      {Array.isArray(calendars) ? (
        <Ul>
          {calendars.map((calendar) => (
            <li key={calendar.id} title={calendar.description}>
              <Label.ForCheckbox>
                <Input.Checkbox
                  className="h-5 w-5 rounded-sm"
                  style={{ color: calendar.color }}
                  checked={enabledCalendars.includes(calendar.id)}
                  onValueChange={(): void =>
                    handleChange(toggleItem(enabledCalendars, calendar.id))
                  }
                />
                {calendar.name}
              </Label.ForCheckbox>
            </li>
          ))}
        </Ul>
      ) : (
        globalText('loading')
      )}
    </section>
  );
}

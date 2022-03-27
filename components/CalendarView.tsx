import React from 'react';

import type { Calendar, New } from '../lib/datamodel';
import { replaceKey } from '../lib/helpers';
import { globalText } from '../localization/global';
import { Input, Label, Textarea } from './Basic';

export function CalendarView({
  calendar,
  onChange: handleChange,
}: {
  readonly calendar: New<Calendar>;
  readonly onChange: (calendar: New<Calendar>) => void;
}): JSX.Element {
  return (
    <>
      <h2>{calendar.name}</h2>
      <Label.Generic>
        {globalText('name')}
        <Input.Text
          value={calendar.name}
          onValueChange={(name): void =>
            handleChange(replaceKey(calendar, 'name', name))
          }
        />
      </Label.Generic>
      <Label.Generic>
        {globalText('description')}
        <Textarea
          value={calendar.description}
          onValueChange={(description): void =>
            handleChange(replaceKey(calendar, 'description', description))
          }
        />
      </Label.Generic>
      <Label.Generic>
        {globalText('color')}
        <Input.Generic
          type="color"
          value={calendar.color}
          onValueChange={(color): void =>
            handleChange(replaceKey(calendar, 'color', color))
          }
        />
      </Label.Generic>
    </>
  );
}

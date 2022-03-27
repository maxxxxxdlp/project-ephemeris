import React from 'react';
import Modal from 'react-modal';

import { error } from '../lib/assert';
import type { RA } from '../lib/types';
import { crash, ErrorBoundary } from './ErrorBoundary';
import { useBooleanState } from './Hooks';
import { LoadingScreen } from './ModalDialog';

/*
 * Exposing component's setError callback to the outside so that an error
 * can be summoned outside of React code
 */
let exposedSetError: (errorElement: JSX.Element | undefined) => void;
export const summonErrorPage = (errorElement: JSX.Element | undefined) =>
  exposedSetError(errorElement);

export function Contexts({
  children,
}: {
  readonly children: JSX.Element;
}): JSX.Element {
  React.useEffect(() => Modal.setAppElement('#root'), []);

  const holders = React.useRef<RA<number>>([]);

  const [isLoading, handleLoading, handleLoaded] = useBooleanState();

  const handle = React.useCallback(
    (promise: Promise<unknown>): void => {
      const holderId = holders.current.length;
      holders.current = [...holders.current, holderId];
      handleLoading();
      promise
        .catch((error: Error) => {
          crash(error);
          throw error;
        })
        .finally(() => {
          holders.current = holders.current.filter((item) => item !== holderId);
          if (holders.current.length === 0) handleLoaded();
        });
    },
    [handleLoading, handleLoaded]
  );

  const [error, setError] = React.useState<JSX.Element | undefined>(undefined);
  React.useEffect(() => {
    exposedSetError = setError;
  });

  return (
    <ErrorBoundary>
      <LoadingContext.Provider value={handle}>
        <LoadingScreen isLoading={isLoading} />
        <ErrorContext.Provider value={setError}>
          {error}
          {children}
        </ErrorContext.Provider>
      </LoadingContext.Provider>
    </ErrorBoundary>
  );
}

export const LoadingContext = React.createContext<
  (promise: Promise<unknown>) => void
>(() => error('Not defined'));
LoadingContext.displayName = 'LoadingContext';

export const ErrorContext = React.createContext<
  (errorElement: JSX.Element) => void
>(() => error('Not defined'));
ErrorContext.displayName = 'ErrorContext';

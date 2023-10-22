import {DependencyList, useEffect, useMemo} from 'react';
import {useDeepState} from './useDeepState';

/**
 * This custom memo hook triggers factory callback only when the content of the deps is different through deep comparision
 */
export function useDeepMemo<T>(
  factory: () => T,
  deps: DependencyList | undefined,
) {
  const [cachedDeps, setCachedDeps] = useDeepState(deps);

  useEffect(() => {
    setCachedDeps(deps);
  }, [deps]);

  return useMemo(factory, cachedDeps);
}

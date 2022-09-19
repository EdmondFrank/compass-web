import { MetricQuery } from '@graphql/generated';
import isArray from 'lodash/isArray';
import { repoUrlFormatForChart } from '@common/utils/url';
import get from 'lodash/get';
import { toTimeXAxis } from '@modules/analyze/options/index';
import { Level } from '@modules/analyze/constant';

export const pickKeyToXAxis = (
  data: {
    label: string;
    level: Level;
    result: MetricQuery | undefined;
  }[],
  opts: { typeKey: string; valueKey: string }
) => {
  const item = get(data, `[0].result.${opts.typeKey}`);
  if (isArray(item)) {
    return toTimeXAxis(item, opts.valueKey);
  }
  return [];
};

export const pickKeyToYAxis = (
  data: {
    label: string;
    level: Level;
    result: MetricQuery | undefined;
  }[],
  opts: {
    typeKey: Exclude<keyof MetricQuery, '__typename'>;
    valueKey: string;
    legendName: string;
  }
) => {
  if (isArray(data)) {
    const isCompare = data.length > 1;
    return data.map((item) => {
      const typeResult = item.result?.[opts.typeKey];
      // @ts-ignore
      const data = typeResult?.map((i) => Number(i[opts.valueKey]));

      const label =
        item.level === 'repo' ? repoUrlFormatForChart(item.label) : item.label;
      const name = isCompare ? label : opts.legendName;

      return {
        name,
        data: data || [],
      };
    });
  }
  return [];
};

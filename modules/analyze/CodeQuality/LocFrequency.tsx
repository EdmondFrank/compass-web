import React, { useEffect, useMemo, useRef } from 'react';
import EChartX from '@common/components/EChartX';
import {
  bar,
  ChartComponentProps,
  getBarOption,
  getLineOption,
  lineArea,
  toTimeXAxis,
} from '../options';
import BaseCard from '@common/components/BaseCard';
import useMetricQueryData from '@modules/analyze/hooks/useMetricQueryData';
import { CodeQuality } from '@modules/analyze/Misc/SideBar/SideBarConfig';
import {
  pickKeyGroupToYAxis,
  pickKeyToXAxis,
} from '@modules/analyze/options/metric';
import useDatePickerFormat from '@modules/analyze/hooks/useDatePickerFormat';

const LocFrequency: React.FC<ChartComponentProps> = ({
  loading = false,
  xAxis,
  yAxis,
}) => {
  const dateDesc = useDatePickerFormat();
  const echartsOpts = useMemo(() => {
    const series = yAxis.map(({ name, data }) => {
      return bar({ name, data });
    });
    return getBarOption({ xAxisData: xAxis, series });
  }, [xAxis, yAxis]);

  return (
    <BaseCard
      loading={loading}
      title="loc frequency"
      id={CodeQuality.LocFrequency}
      description={`Determine the average number of lines touched (lines added plus lines removed) per week in the past ${dateDesc}.`}
    >
      {(containerRef) => (
        <EChartX option={echartsOpts} containerRef={containerRef} />
      )}
    </BaseCard>
  );
};

const LocFrequencyWithData = () => {
  const data = useMetricQueryData();
  const isLoading = data?.some((i) => i.loading);

  const xAxis = useMemo(() => {
    return pickKeyToXAxis(data, {
      typeKey: 'metricCodequality',
      valueKey: 'grimoireCreationDate',
    });
  }, [data]);

  const yAxis = useMemo(() => {
    return pickKeyGroupToYAxis(data, [
      {
        typeKey: 'metricCodequality',
        valueKey: 'linesAddedFrequency',
        legendName: 'lines add',
      },
      {
        typeKey: 'metricCodequality',
        valueKey: 'linesRemovedFrequency',
        valueFormat: (v) => v * -1,
        legendName: 'lines remove',
      },
    ]);
  }, [data]);

  return <LocFrequency loading={isLoading} xAxis={xAxis} yAxis={yAxis} />;
};

export default LocFrequencyWithData;

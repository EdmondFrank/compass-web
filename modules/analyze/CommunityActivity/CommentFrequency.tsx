import React, { useMemo } from 'react';
import { MetricQuery } from '@graphql/generated';
import EChartX from '@common/components/EChartX';
import { getLineOption, mapToLineSeries, toTimeXAxis } from '../options';
import BaseCard from '@common/components/BaseCard';
import useMetricQueryData from '@modules/analyze/hooks/useMetricQueryData';

const CommitFrequency: React.FC<{
  loading?: boolean;
  data: { url: string; result: MetricQuery | undefined }[];
}> = ({ loading = false, data }) => {
  const echartsOpts = useMemo(() => {
    if (!data[0]?.result?.metricActivity) return {};

    const metricCommunity = data[0].result.metricCommunity;
    const xAxisDate = toTimeXAxis(metricCommunity, 'grimoireCreationDate');

    const isCompare = data?.length > 1;

    const series = data.map((item) => {
      return mapToLineSeries(
        item.result!.metricActivity,
        'commentFrequency',
        isCompare ? item.url : 'commentFrequency'
      );
    });

    return getLineOption({
      xAxisData: xAxisDate,
      series,
    });
  }, [data]);

  return (
    <BaseCard
      loading={loading}
      title="commentFrequency"
      description="The growth in the aggregated count of unique contributors analyzed during the selected time period."
    >
      <EChartX option={echartsOpts} />
    </BaseCard>
  );
};

const CommitFrequencyWithData = () => {
  const data = useMetricQueryData();
  return <CommitFrequency data={data} />;
};

export default CommitFrequencyWithData;

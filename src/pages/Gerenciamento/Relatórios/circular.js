export const data = (dataProp, theme) => ({
  datasets: dataProp.datasets.map((dataset) => ({
    ...dataset,
    borderWidth: 8,
    borderColor: theme.palette.background.default,
    hoverBorderColor: theme.palette.background.default,
  })),
  labels: dataProp.labels,
});

export const options = (theme) => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  legend: {
    display: false,
  },
  layout: {
    padding: 0,
  },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    caretSize: 10,
    yPadding: 20,
    xPadding: 20,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.dark,
    titleFontColor: theme.palette.text.primary,
    bodyFontColor: theme.palette.text.secondary,
    footerFontColor: theme.palette.text.secondary,
    callbacks: {
      label(tooltipItem, _data) {
        const label = _data.labels[tooltipItem.index];
        const value = _data.datasets[0].data[tooltipItem.index];

        return `${label}: ${value}%`;
      },
    },
  },
});

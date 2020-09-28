import { fade } from '@material-ui/core';

export const data = (dataProp, theme, labels) => ({
  datasets: [
    {
      label: 'Este ano',
      backgroundColor: theme.palette.secondary.main,
      data: dataProp.thisYear,
      barThickness: 12,
      maxBarThickness: 10,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: 'Ano passado',
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
      data: dataProp.lastYear,
      barThickness: 12,
      maxBarThickness: 10,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
  labels,
});

export const options = (theme) => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cornerRadius: 20,
  legend: {
    display: false,
  },
  layout: {
    padding: 0,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
        ticks: {
          padding: 20,
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
          maxTicksLimit: 5,
          callback: (value) => (value > 0 ? `${value}K` : value),
        },
      },
    ],
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
      title: () => {},
      label: (tooltipItem) => {
        let label = `Caixa: ${tooltipItem.yLabel}`;

        if (tooltipItem.yLabel > 0) {
          label += 'K';
        }

        return label;
      },
    },
  },
});

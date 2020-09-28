import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import brLocale from '@fullcalendar/core/locales/pt-br';
import {
  Box,
  Paper,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  Hidden,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@material-ui/core';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

import { viewOptions } from './config';
import { useStyles } from './styles';
import { capitalize, dateFormat } from 'utils/helper';

function Calendar() {
  const classes = useStyles();
  const theme = useTheme();
  const calendarRef = useRef(null);
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(mobileDevice ? 'listWeek' : 'dayGridMonth');
  const [events] = useState(null);

  const handleDate = (action) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi[action]();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const goToday = () => handleDate('today');
  const goPrev = () => handleDate('prev');
  const goNext = () => handleDate('next');
  return (
    <Paper className={classes.calendar} component={Box} mt={3} p={2}>
      <Box mb={2}>
        <Grid container alignItems='center' spacing={3} justify='space-between'>
          <Grid item>
            <ButtonGroup size='small'>
              <Button onClick={goPrev}>Anterior</Button>
              <Button onClick={goToday}>Atual</Button>
              <Button onClick={goNext}>Próximo</Button>
            </ButtonGroup>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <Typography variant='h3' color='textPrimary'>
                {capitalize(dateFormat(date, 'month-year'))}
              </Typography>
            </Grid>
            <Grid item>
              {viewOptions.map((viewOption) => {
                const Icon = viewOption.icon;

                return (
                  <Tooltip key={viewOption.value} title={viewOption.label}>
                    <IconButton
                      color={viewOption.value === view ? 'secondary' : 'default'}
                      onClick={() => handleViewChange(viewOption.value)}
                    >
                      <Icon />
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <FullCalendar
        allDayMaintainDuration
        initialView={view}
        droppable
        editable
        eventResizableFromStart
        events={events}
        headerToolbar={false}
        height='auto'
        ref={calendarRef}
        rerenderDelay={10}
        selectable
        weekends
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
          timelinePlugin,
        ]}
        locale={brLocale}
        noEventsText='Não existem aulas no período selecionado'
      />
    </Paper>
  );
}

export default Calendar;

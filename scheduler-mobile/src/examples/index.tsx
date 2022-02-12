// import { ReactHashCalendar } from '../components';
import React from 'react';

const ReactHashCalendar = require('../components').ReactHashCalendar;

const state = {
  defaultDatetime: new Date(),
  isShowCalendar: false,
  markDate: [
    '2022/11/24',
    '2022/11/22',
    {
      color: 'red',
      type: 'dot',
      date: [
        '0',
        '2022/02/25',
        '2022/03/25',
        '2022/04/01',
        '2022/05/25',
        '2022/06/25',
        '2022/07/25',
        '2022/08/25',
        '2022/09/25',
        '2022/10/25',
        '2022/11/25',
        '2022/12/25',
      ],
    },
    {
      color: 'blue',
      type: 'circle',
      date: [
        '2022/01/20',
        '2022/02/20',
        '2022/03/20',
        '2022/04/20',
        '2022/05/20',
        '2022/06/20',
        '2022/07/20',
        '2022/08/20',
        '2022/09/20',
        '2022/10/20',
        '2022/11/20',
        '2022/12/20',
      ],
    },
    {
      color: 'pink',
      date: [
        '2022/01/12',
        '2022/02/12',
        '2022/03/12',
        '2022/04/12',
        '2022/05/12',
        '2022/06/12',
        '2022/07/12',
        '2022/08/12',
        '2022/09/12',
        '2022/10/12',
        '2022/11/12',
        '2022/12/12',
      ],
    },
    {
      color: '#000000',
      date: [
        '2022/01/29',
        '2022/02/29',
        '2022/03/29',
        '2022/04/29',
        '2022/05/29',
        '2022/06/29',
        '2022/07/29',
        '2022/08/29',
        '2022/09/29',
        '2022/10/29',
        '2022/11/29',
        '2022/12/29',
      ],
    },
  ],
};

type State = typeof state;

class Examples extends React.Component<{}, State, {}> {
  public state: State = state;

  handleVisibleChange = (isShowCalendar: boolean) => {
    this.setState({ isShowCalendar });
  };

  showCalendar = () => {
    this.setState({ isShowCalendar: true });
  };

  dateClick = (date?: string | Date) => {
    console.log('Examples -> dateClick -> date', date);
  };

  dateConfirm = (date?: string | Date) => {
    console.log('Examples -> dateConfirm -> date', date);
  };

  disabledDate = (date: Date): boolean => {
    let timestamp = date.getTime();
    let oneDay = 24 * 60 * 60 * 1000;

    if (timestamp < new Date().getTime() - oneDay) {
      return true;
    }
    return false;
  };

  touchEndCallback = (direction: any, status) => {
    if (status) {
      console.log(888, direction, status);
    }
  };

  render() {
    const { markDate } = this.state;
    return (
      <div>
        <ReactHashCalendar
          pickerType='date'
          isShowWeekView={true}
          showTodayButton={true}
          isShowAction={true}
          lang='CN'
          dateClickCallback={(date) => console.log(date)}
          markDate={markDate}
          slideChangeCallback={this.touchEndCallback}
        />
      </div>
    );
  }
}

export default Examples;

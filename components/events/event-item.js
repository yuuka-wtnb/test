import Link from 'next/link';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';

import classes from './event-item.module.css';

function EventItem(props) {
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;

  return <li className={classes.item}>
      <img src={'/' + image} alt={title}></img>
      <div className={classes.content}>
          <div classname={classes.summary}>
              <h2>{title}</h2>
              <div className={classes.date}>
                  <DateIcon></DateIcon>
                  <time>{humanReadableDate}</time>
              </div>
              <div className={classes.address}>
                  <AddressIcon></AddressIcon>
                  <address>{formattedAddress}</address>
              </div>
          </div>
          <div className={classes.actions}>
              <Button link={exploreLink}>
                  <span>Explore Event</span>
                  <span className={classes.icon}><ArrowRightIcon></ArrowRightIcon></span>
                  </Button>
          </div>
      </div>
  </li>;
}

export default EventItem;

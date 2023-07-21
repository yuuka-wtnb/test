import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import ResultsTitle from "@/components/events/results-title";

import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

function FilteredEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading....</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    2021 > numYear ||
    1 > numMonth ||
    12 < numMonth
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invailed filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilteredEventPage;

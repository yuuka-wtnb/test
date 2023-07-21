import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSeach from "../components/events/events-search";
import { Fragment } from "react";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents}></EventList>
    </Fragment>
  );
}

export default HomePage;

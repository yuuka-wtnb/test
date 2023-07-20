import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

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
    return <p>Invailed filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filteredEvents || filteredEvents.length == 0){
    return <p>No events found for the chosen filter!</p>
  }

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEventPage;

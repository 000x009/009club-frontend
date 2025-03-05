import styles from "./index.module.css";
import { useEventList } from "../../entities/Event/lib/hooks/useEventList";
import { InfiniteScroll } from "../../shared/ui/InfiniteScroll";
import { EventCards } from "../EventCards";

export function Events() {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useEventList();

  return (
    <div className={styles.container}>
      <InfiniteScroll
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={() => hasNextPage && fetchNextPage()}
      >
          <EventCards
              events={data?.items ?? []}
              total={data?.total}
              isFetchingNextPage={isFetchingNextPage}
              isLoading={isLoading}
          />
      </InfiniteScroll>
    </div>
  );
}

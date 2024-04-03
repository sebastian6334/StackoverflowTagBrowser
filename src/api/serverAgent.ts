import { useCounterStore } from "../store";

const fetchTags = () => {
  useCounterStore.setState({ isLoading: true, error: undefined });

  fetch(`https://api.stackexchange.com/2.3/tags?site=stackoverflow`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch tags");
      }
      return response.json();
    })
    .then((data) => {
      useCounterStore.setState({ allTags: data.items, isLoading: false });
    })
    .catch((error) => {
      useCounterStore.setState({ isLoading: false, error: error.message });
    });
};

export default fetchTags;

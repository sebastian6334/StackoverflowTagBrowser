import { useStore } from "../store";

const fetchTags = () => {
  useStore.setState({ isLoading: true, error: undefined });

  fetch(`https://api.stackexchange.com/2.3/tags?site=stackoverflow`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch tags");
      }
      return response.json();
    })
    .then((data) => {
      useStore.setState({ allTags: data.items, isLoading: false });
    })
    .catch((error) => {
      useStore.setState({ isLoading: false, error: error.message });
    });
};

export default fetchTags;

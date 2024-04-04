import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import SelectField from "./components/fields/selectField/SelectField";
import { useStore } from "./store";
import sortItemsByProperty from "./helpers/sort";
import Header from "./components/header/Header";
import { fieldConfig } from "./components/fields/config";
import fetchTags from "./api/serverAgent";
import Loader from "./components/loader/Loader";
import ErrorComponent from "./components/errorComponent/ErrorComponent";
import DisplayTagsComponent from "./components/displayTagsComponent/DisplayTagsComponent";
import NumberField from "./components/fields/numberField/NumberField";
import ToggleButton from "./components/fields/toggleButton/ToggleButton";
import PaginationField from "./components/fields/paginationField/PaginationField";

function App() {
  const [tags, setTags] = useState([]);
  const [sortField, setSortField] = useState("count");
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(0);

  const { allTags, isLoading, error, pageInformation } = useStore(
    (state) => state
  );

  const { page, pageSize } = pageInformation;

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    if (allTags.length > 0) {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      setTags(allTags.slice(start, end));
      setTotalPages(Math.ceil(allTags.length / pageSize));
    }
  }, [page, pageSize, allTags]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    useStore.setState({
      pageInformation: { page: value, pageSize: pageSize },
    });
  };

  const handleSortFieldChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortField(event.target.value);
  };

  const hangleSort = () => {
    const { sortType, sortedItems } = sortItemsByProperty({
      items: allTags,
      property: sortField,
      sortOrder,
    });

    setSortOrder(sortType);
    useStore.setState({ allTags: sortedItems });
  };

  const displayComponent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (!isLoading && !error) {
      return <DisplayTagsComponent tags={tags} />;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid ml={2} item>
        <NumberField
          title={fieldConfig.elementsPerPage.title}
          minValue={fieldConfig.elementsPerPage.minValue}
          maxValue={allTags.length}
          defaultValue={pageSize}
        />
      </Grid>
      <Grid item>
        <SelectField
          title={fieldConfig.sortBy.title}
          handleChange={handleSortFieldChange}
          menuItems={fieldConfig.sortBy.menuItems}
          defaultValue={sortField}
        />
      </Grid>
      <Grid item>
        <ToggleButton
          titleArr={["Ascending", "Descending"]}
          onChange={hangleSort}
        />
      </Grid>

      <Grid item xs={12}>
        {displayComponent()}
      </Grid>

      <Grid item xs={12}>
        <PaginationField
          totalPages={totalPages}
          page={page}
          handlePageChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
}

export default App;

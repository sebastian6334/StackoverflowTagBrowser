import React, { useState, useEffect } from "react";
import { Button, Grid, Pagination } from "@mui/material";
import SelectField from "./components/fields/selectField/SelectField";
import { useCounterStore } from "./store";
import sortItemsByProperty from "./helpers/sort";
import Header from "./components/header/Header";
import { fieldConfig } from "./components/fields/config";
import fetchTags from "./api/serverAgent";
import Loader from "./components/loader/Loader";
import ErrorComponent from "./components/errorComponent/ErrorComponent";
import DisplayTagsComponent from "./components/displayTagsComponent/DisplayTagsComponent";
import NumberField from "./components/fields/numberField/NumberField";

function App() {
  const [tags, setTags] = useState([]);
  const [sortField, setSortField] = useState("count");
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalPages, setTotalPages] = useState(0);

  const { allTags, isLoading, error, pageInformation } = useCounterStore(
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
    useCounterStore.setState({
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
    useCounterStore.setState({ allTags: sortedItems });
  };

  const displayComponent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (!isLoading && !error) {
      return <DisplayTagsComponent tags={tags} totalPages={totalPages} />;
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
        <Button
          variant="outlined"
          size="medium"
          onClick={hangleSort}
          sx={{
            height: "100%",
            borderRadius: "8px",
            background: "#f5f5f5",
            boxShadow:
              "inset 0 0 10px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow:
                "inset 0 0 8px rgba(255, 152, 0, 0.4), inset 0 0 12px rgba(255, 152, 0, 0.6)",
              background: "#ffffff",
              color: "#000000",
            },
          }}
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </Button>
      </Grid>

      <Grid item xs={12}>
        {displayComponent()}
      </Grid>

      <Grid item xs={12}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              borderRadius: "8px",
              boxShadow:
                "inset 0 0 6px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.1)",
              margin: "0 5px",
              background: "#f5f5f5",
              "&:hover": {
                boxShadow:
                  "inset 0 0 8px rgba(255, 152, 0, 0.4), inset 0 0 12px rgba(255, 152, 0, 0.6)",
                background: "#ffffff",
                color: "#000000",
              },
              "&.Mui-selected": {
                background: "#f7a664",
                boxShadow:
                  "inset 0 0 8px rgba(0, 0, 0, 0.3), inset 0 0 12px rgba(0, 0, 0, 0.4)",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default App;

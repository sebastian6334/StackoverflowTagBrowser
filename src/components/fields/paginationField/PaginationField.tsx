import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";

export interface PropsInterface {
  totalPages: number;
  page: number;
  handlePageChange?: (_: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationField = ({
  totalPages = 1,
  page = 1,
  handlePageChange,
}: PropsInterface) => {
  const [pages, setPages] = useState(totalPages);
  const [pageNumber, setPageNumber] = useState(page);

  useEffect(() => {
    setPages(totalPages);
    setPageNumber(page);
  }, [totalPages, page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
    handlePageChange && handlePageChange(_, value);
  };

  return (
    <Pagination
      count={pages}
      page={pageNumber}
      onChange={handleChange}
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
  );
};
export default PaginationField;

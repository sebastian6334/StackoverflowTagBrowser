import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ItemsInterface } from "../../helpers/sort";

export interface TagInterface {
  [key: string]: boolean | string | number;
}

const DisplayTagsComponent = ({ tags }: ItemsInterface) => {
  return (
    <>
      <Grid item m={2} xs={12}>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0 8px 12px -6px rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "50%" }}>Tag</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tags.map((tag: TagInterface, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <a
                        href={`https://stackoverflow.com/questions/tagged/${tag.name}`}
                        target="_blank"
                      >
                        {tag.name}
                      </a>
                    </TableCell>
                    <TableCell>{tag.count}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default DisplayTagsComponent;

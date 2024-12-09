// search form with options for genre and rating

// import form elements from semanticUI
import {
  FormGroup,
  FormField,
  Button,
  Form,
  Select,
} from "semantic-ui-react";

// genre options
const genreOptions = [
  { key: 1, text: "Action", value: 1 },
  { key: 2, text: "Adventure", value: 2 },
  { key: 3, text: "Animation", value: 3 },
  { key: 4, text: "Biography", value: 4 },
  { key: 5, text: "Comedy", value: 5 },
  { key: 6, text: "Crime", value: 6 },
  { key: 7, text: "Drama", value: 7 },
  { key: 8, text: "Family", value: 8 },
  { key: 9, text: "Fantasy", value: 9 },
  { key: 10, text: "History", value: 10 },
  { key: 11, text: "Horror", value: 11 },
  { key: 12, text: "Music", value: 12 },
  { key: 13, text: "Mystery", value: 13 },
  { key: 14, text: "Romance", value: 14 },
  { key: 15, text: "Sci - Fi", value: 15 },
  { key: 16, text: "Short", value: 16 },
  { key: 17, text: "Thriller", value: 17 },
  { key: 18, text: "War", value: 18 },
];

// rating options
const ratingOptions = [
  { key: 1, text: "Abysmal (0 - 1)", value: 1 },
  { key: 2, text: "Terrible (1 - 2)", value: 2 },
  { key: 3, text: "Bad (2 - 3)", value: 3 },
  { key: 4, text: "Not As Bad (3 - 4)", value: 4 },
  { key: 5, text: "Fair (4 - 5)", value: 5 },
  { key: 6, text: "Average (5 - 6)", value: 6 },
  { key: 7, text: "Good (6 - 7)", value: 7 },
  { key: 8, text: "Very Good (7 - 8)", value: 8 },
  { key: 9, text: "Excellent (8 - 9)", value: 9 },
  { key: 10, text: "Perfect (9+)", value: 10 },
];

export default function SearchForm(props) {
    
    return (
      <Form>
        <FormGroup widths={"equal"}>
          <FormField
            control={Select}
            label="Genre"
            options={genreOptions}
            placeholder="Genre"
          />
          <FormField
            control={Select}
            label="Rating"
            options={ratingOptions}
            placeholder="Rating"
          />
        </FormGroup>
        <FormField control={Button}>Find Movies!</FormField>
      </Form>
    );
}

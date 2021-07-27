import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function searchBar({
  handleSearch,
  handleChange,
  searchValues,
  statusOptions,
}) {
  const options = statusOptions.map(option => (
    <option value={option}>{option}</option>
  ));

  return (
    <form onSubmit={handleSearch}>
      <HStack>
        <Select
          onChange={handleChange}
          value={searchValues.status}
          id="status"
          variant="filled"
          size="sm"
        >
          {options}
        </Select>
        <InputGroup size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.500" />}
          />
          <Input
            value={searchValues.searchString}
            id="searchString"
            type="text"
            size="sm"
            placeholder="search"
            onChange={handleChange}
          />
        </InputGroup>
        <Button type="submit" size="sm">
          Search
        </Button>
      </HStack>
    </form>
  );
}

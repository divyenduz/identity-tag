Deprecating. Don't think that it needs any changes so can be used but no further changes to this project.

# Introduction

A pass through tagged template literal because I want to format GraphQL queries without using gql or the comment (`/* GraphQL */`) syntax to hint VSCode + any GraphQL prettifier.

# Usage

```ts
import { identityTag as gql } from "identity-tag";
```

VSCode + any GraphQL prettifier like to prettify this now.

```ts
const query = gql`
  {
    id
  }
`;
```

# Related

- https://github.com/bevacqua/map-tag

#!/bin/bash

curl --include --request PATCH http://localhost:4741/games/$GameID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
    "index": 0,
    "value": "x"
  },
  "over": false
}
  }'
# data output from curl doesn't have a trailing newline
echo

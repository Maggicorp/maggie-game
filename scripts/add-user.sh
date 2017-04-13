#!/bin/bash

curl --include --request PATCH http://localhost:4741/games/$GameID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "player_o": {
  "id": 1,
  "email": "maggie1"
}
  }'
# data output from curl doesn't have a trailing newline
echo

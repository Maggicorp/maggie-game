#!/bin/bash

curl --include --request PATCH http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "12",
      "new": "13"
    }
  }'
# data output from curl doesn't have a trailing newline
echo

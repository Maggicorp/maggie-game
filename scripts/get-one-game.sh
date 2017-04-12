#!/bin/bash

curl --include --request GET http://tic-tac-toe.wdibos.com/games/$GameID \
  --header "Authorization: Token token=$TOKEN" \
  # --header "Content-Type: application/json" \
  # --data
# data output from curl doesn't have a trailing newline
echo

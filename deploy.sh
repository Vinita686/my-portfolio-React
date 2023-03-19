#!/bin/bash
ssh-add ~/.ssh/id_rsa
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa" npm run deploy

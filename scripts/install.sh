#!/bin/bash
backend="$(pwd)/backend";
frontend="$(pwd)/frontend";
cd $frontend && yarn;
cd $backend && yarn;